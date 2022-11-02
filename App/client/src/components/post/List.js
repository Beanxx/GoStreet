import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListDiv, ListItem } from "../../style/ListCSS.js";
import Avatar from "react-avatar";

const List = (props) => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios
      .post("/api/post/list")
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ListDiv>
      {postList.map((post, idx) => {
        return (
          <ListItem key={idx}>
            <Link to={`/post/${post.postNum}`}>
              <p className="title">제목: {post.title}</p>
              <Avatar size="40" round={true} src={post.author.photoURL} />
              <p className="author">글쓴이: {post.author.displayName}</p>
              <p>내용: {post.content}</p>
            </Link>
          </ListItem>
        );
      })}
    </ListDiv>
  );
};

export default List;
