import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { PostDiv, Post, BtnDiv } from "../../style/PostCSS.js";

const Detail = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

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
      <Post>
        <h1>{props.postInfo.title}</h1>
        <h3>{props.postInfo.author.displayName}</h3>
        {props.postInfo.image ? (
          <img
            src={props.postInfo.image}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        ) : null}

        <p>{props.postInfo.content}</p>
      </Post>
      {user.uid === props.postInfo.author.uid && (
        <BtnDiv>
          <Link to={`/edit/${props.postInfo.postNum}`}>
            <button className="edit">수정</button>
          </Link>
          <button className="delete" onClick={() => DeleteHandler()}>
            삭제
          </button>
        </BtnDiv>
      )}
    </PostDiv>
  );
};

export default Detail;
