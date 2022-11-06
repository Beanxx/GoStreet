import React, { useState, useEffect } from "react";
import ImageUpload from "../Upload/ImageUpload.js";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UploadDiv, UploadForm, UploadButtonDiv } from "../Upload/UploadCSS.js";

const Edit = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const [postInfo, setPostInfo] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    let body = { postNum: params.postNum };
    axios
      .post("/api/post/detail", body)
      .then((response) => {
        if (response.data.success) {
          setPostInfo(response.data.post);
          setFlag(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // input란에 초기 데이터 넣어주기
  useEffect(() => {
    setTitle(postInfo.title);
    setContent(postInfo.content);
    setImage(postInfo.image);
  }, [postInfo]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || content === "") {
      return alert("모든 항목을 채워주세요!");
    }

    let body = {
      title,
      content,
      image,
      postNum: params.postNum,
    };

    axios
      .post("/api/post/edit", body)
      .then((response) => {
        if (response.data.success) {
          alert("글 수정이 완료되었습니다.");
          navigate(`/post/${params.postNum}`);
        } else {
          alert("글 수정에 실패하였습니다.");
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
          <button
            className="cancel"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1); // 뒤로가기
            }}
          >
            취소
          </button>
          <button onClick={(e) => onSubmit(e)}>제출</button>
        </UploadButtonDiv>
      </UploadForm>
    </UploadDiv>
  );
};

export default Edit;
