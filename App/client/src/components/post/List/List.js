import React from "react";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "./ListCSS.js";
import Avatar from "react-avatar";
import moment from "moment";
import "moment/locale/ko";

const List = (props) => {
  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, HH:mm") + " (수정됨)";
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
              <p className="title-style">{post.title}</p>
              <p className="content-style">{post.content}</p>
              <div className="info-style">
                <Avatar size="40" round={true} src={post.author.photoURL} />
                <div>
                  <p className="author-style">{post.author.displayName}</p>
                  <p className="date-style">
                    {setTime(post.createdAt, post.updatedAt)}
                  </p>
                </div>
              </div>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;
