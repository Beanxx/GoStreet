import React, { useEffect, useState } from "react";
import List from "./post/List.js";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신순");
  const [searchTerm, setSearchTerm] = useState("");

  const getPostList = () => {
    let body = {
      sort,
      searchTerm,
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
  };

  useEffect(() => {
    getPostList();
  }, [sort]);

  const SearchHandler = () => {
    getPostList();
  };

  return (
    <div>
      <DropdownButton variant="outline-secondary" title={sort}>
        <Dropdown.Item onClick={() => setSort("최신순")}>최신순</Dropdown.Item>
        <Dropdown.Item onClick={() => setSort("인기순")}>인기순</Dropdown.Item>
      </DropdownButton>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          onKeyDown={(e) => {
            if (e.keyCode === 13) SearchHandler();
          }}
        />
      </div>
      <List postList={postList} />
    </div>
  );
};

export default MainPage;
