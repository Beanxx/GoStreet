import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload";
import { UploadDiv, UploadForm, UploadButtonDiv } from "./UploadCSS";
import axios from "axios";
import { RootState } from "../../../reducer/store";
import Toast from "../../UI/Toast/Toast";

const Upload = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!user.accessToken) {
      Toast.fire({
        icon: "warning",
        text: "로그인한 회원만 글을 작성할 수 있습니다.",
      }).then(() => {
        navigate("/login");
      });
    }
  }, []);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault(); // 버튼 클릭시 기본 동작인 새로고침이 발생하는데 이를 막기 위한 용도

    if (title === "" || content === "") {
      return Toast.fire({
        icon: "warning",
        text: "모든 항목을 채워주세요!",
      });
    }

    const body = {
      title,
      content,
      image,
      uid: user.uid,
    };

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          Toast.fire({
            icon: "success",
            text: "글 작성이 완료되었습니다.",
          }).then(() => {
            navigate("/");
          });
        } else {
          Toast.fire({
            icon: "error",
            text: "글 작성에 실패하였습니다.",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <UploadDiv>
      <UploadForm>
        <div className="title-style">
          <label htmlFor="title">제목</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.currentTarget.value);
            }}
          />
        </div>
        <ImageUpload setImage={setImage} />
        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
        <UploadButtonDiv>
          <button onClick={(e) => onSubmit(e)}>등록하기</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Upload;
