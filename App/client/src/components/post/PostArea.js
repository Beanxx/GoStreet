import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Detail from "./Detail/Detail";
import RepleArea from "../reple/RepleArea";
import { Spinner } from "react-bootstrap";
import { SpinnerDiv } from "./PostCSS";

const PostArea = () => {
  let params = useParams();

  const [postInfo, setPostInfo] = useState([]);
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

  return (
    <div>
      {flag ? (
        <>
          <Detail postInfo={postInfo} />
          <RepleArea postId={postInfo._id} />
        </>
      ) : (
        <SpinnerDiv>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </SpinnerDiv>
      )}
    </div>
  );
};

export default PostArea;
