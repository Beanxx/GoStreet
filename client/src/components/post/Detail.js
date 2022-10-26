import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { PostDiv, Post, BtnDiv, SpinnerDiv } from "../../style/PostCSS.js";

const Detail = () => {
  let params = useParams();
  let navigate = useNavigate();

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

  useEffect(() => {
    console.log(postInfo);
  }, [postInfo]);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      alert("확인");
    }

    let body = { postNum: params.postNum };
    axios
      .post("/api/post/delete", body)
      .then((response) => {
        if (response.data.success) {
          alert("게시글이 삭제되었습니다.");
          navigate("/");
        }
      })
      .catch((err) => {
        alert("게시글 삭제에 실패하였습니다.");
      });
  };

  return (
    <PostDiv>
      {flag ? (
        <>
          <Post>
            <p>{postInfo.title}</p>
            <p>{postInfo.content}</p>
          </Post>
          <BtnDiv>
            <Link to={`/edit/${postInfo.postNum}`}>
              <button className="edit">수정</button>
            </Link>
            <button className="delete" onClick={() => DeleteHandler()}>
              삭제
            </button>
          </BtnDiv>
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </PostDiv>
  );
};

export default Detail;
