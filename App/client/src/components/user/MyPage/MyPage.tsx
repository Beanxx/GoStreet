import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import axios from "axios";
import firebase from "../../../firebase";
import { MypageDiv } from "./MypageCSS";
import Swal from "sweetalert2";
import { FillBtn } from "../../UI/Button";
import { RootState } from "../../../reducer/store";

const MyPage = () => {
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      navigate("/login");
    } else {
      setCurrentImage(user.photoURL);
    }
  }, [navigate, user]);

  const ImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData: any = new FormData();
    formData?.append("file", e.target.files?.[0]);

    axios.post("/api/user/profile/img", formData).then((response) => {
      setCurrentImage(response.data.filePath);
    });
  };

  const SaveProfile = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    try {
      await firebase.auth().currentUser?.updateProfile({
        photoURL: currentImage,
      });
    } catch (error) {
      return alert("프로필 저장에 실패하였습니다.");
    }
    const body = {
      photoURL: currentImage,
      uid: user.uid,
    };
    axios.post("/api/user/profile/update", body).then((response) => {
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          text: "프로필 저장에 성공하였습니다.",
        }).then(() => {
          window.location.reload();
        });
      } else {
        return alert("프로필 저장에 실패하였습니다.");
      }
    });
  };

  return (
    <MypageDiv>
      <form>
        <div className="avatar-box">
          <label>
            <div className="sub-style">이미지를 클릭하여</div>
            <div className="sub-style">프로필 이미지를 변경할 수 있습니다!</div>
            <div className="avatar-style">
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => ImageUpload(e)}
              />
              <Avatar
                size="150"
                round={true}
                src={currentImage}
                style={{ cursor: "pointer" }}
              />
            </div>
          </label>
        </div>
        <div className="button-style">
          <FillBtn onClick={(e) => SaveProfile(e)}>저장</FillBtn>
        </div>
      </form>
    </MypageDiv>
  );
};

export default MyPage;
