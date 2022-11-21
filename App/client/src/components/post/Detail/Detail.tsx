import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { BtnDiv } from "../PostCSS";
import { ListDiv, ListItem } from "../List/ListCSS";
import Avatar from "react-avatar";
import moment from "moment";
import { FillBtn } from "../../UI/Button";
import { RootState } from "../../../reducer/store";
import { PostInfo } from "../../../types/interfaces";

const Detail: React.FC<PostInfo> = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  const DeleteHandler = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      alert("확인");
    }

    const body = { postNum: params.postNum };
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

  const setTime = (a: Date, b: Date) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, HH:mm") + " (수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, HH:mm");
    }
  };

  return (
    <ListDiv>
      <ListItem>
        <p className="title-style">{props.postInfo.title}</p>
        <p className="content-style">{props.postInfo.content}</p>
        <p className="info-style">
          <Avatar size="40" round={true} src={props.postInfo.author.photoURL} />
          <div>
            <p className="author-style">{props.postInfo.author.displayName}</p>
            <p className="date-style">
              {setTime(props.postInfo.createdAt, props.postInfo.updatedAt)}
            </p>
          </div>
        </p>
        {props.postInfo.image ? (
          <img
            className="photo-style"
            src={props.postInfo.image}
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        ) : null}
      </ListItem>
      {user.uid === props.postInfo.author.uid && (
        <BtnDiv>
          <Link to={`/edit/${props.postInfo.postNum}`}>
            <FillBtn className="edit">수정</FillBtn>
          </Link>
          <FillBtn className="delete" onClick={() => DeleteHandler()}>
            삭제
          </FillBtn>
        </BtnDiv>
      )}
    </ListDiv>
  );
};

export default Detail;
