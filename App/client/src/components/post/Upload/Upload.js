import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ImageUpload from "./ImageUpload.js";
import { UploadDiv, UploadForm, UploadButtonDiv } from "./UploadCSS.js";
import axios from "axios";

const Upload = (props) => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!user.accessToken) {
      alert("로그인한 회원만 글을 작성할 수 있습니다.");
      navigate("/login");
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault(); // 버튼 클릭시 기본 동작인 새로고침이 발생하는데 이를 막기 위한 용도
    // 새로고침이 발생해서 아래 코드들이 무시가 되어 버리므로 코드 추가해주기

    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title,
      content,
      image,
      uid: user.uid,
    };

    axios
      .post("/api/post/submit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          navigate("/");
        } else {
          alert("글 작성에 실패하였습니다.");
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
          type="text"
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
