import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import axios from "axios";
import firebase from "../../../firebase.js";
import { MypageDiv } from "./MypageCSS.js";
import Swal from "sweetalert2";
import { FillBtn } from "../../UI/Button";

const MyPage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    if (user.isLoading && !user.accessToken) {
      navigate("/login");
    } else {
      setCurrentImage(user.photoURL);
    }
  }, [user]);

  const ImageUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/user/profile/img", formData).then((response) => {
      setCurrentImage(response.data.filePath);
    });
  };

  const SaveProfile = async (e) => {
    e.preventDefault();

    try {
      await firebase.auth().currentUser.updateProfile({
        photoURL: currentImage,
      });
    } catch (error) {
      return alert("프로필 저장에 실패하였습니다.");
    }
    let body = {
      photoURL: currentImage,
      uid: user.uid,
    };
    axios.post("/api/user/profile/update", body).then((response) => {
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          text: "프로필 저장에 성공하였습니다.",
          button: "확인",
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
