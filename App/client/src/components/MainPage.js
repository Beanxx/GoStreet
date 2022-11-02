import React, { useEffect, useState } from "react";
import List from "./post/List.js";
import axios from "axios";

const MainPage = () => {
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
    <div>
      <div>
        <input type="text" />
        <button></button>
      </div>
      <List postList={postList} />
    </div>
  );
};

export default MainPage;
