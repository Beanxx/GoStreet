import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const Detail = () => {
  let params = useParams();

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

  return (
    <div>
      {flag ? (
        <div>
          <p>{postInfo.title}</p>
          <p>{postInfo.content}</p>
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Detail;
