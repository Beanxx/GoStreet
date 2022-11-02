import React, { useEffect, useState } from "react";
import List from "./post/List.js";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신순");

  useEffect(() => {
    let body = {
      sort,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [sort]);

  return (
    <div>
      <DropdownButton variant="outline-secondary" title={sort}>
        <Dropdown.Item onClick={() => setSort("최신순")}>최신순</Dropdown.Item>
        <Dropdown.Item onClick={() => setSort("인기순")}>인기순</Dropdown.Item>
      </DropdownButton>
      <div>
        <input type="text" />
        <button></button>
      </div>
      <List postList={postList} />
    </div>
  );
};

export default MainPage;
