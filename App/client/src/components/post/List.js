import React from "react";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../style/ListCSS.js";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";

const List = (props) => {
  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, HH:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, HH:mm");
    }
  };

  return (
    <ListDiv>
      {props.postList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">제목: {post.title}</p>
              <Avatar size="40" round={true} src={post.author.photoURL} />
              <p className="author">글쓴이: {post.author.displayName}</p>
              <p>내용: {post.content}</p>
              <p>{setTime(post.createdAt, post.updatedAt)}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;
