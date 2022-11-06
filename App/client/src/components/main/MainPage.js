import React, { useEffect, useState } from "react";
import List from "../post/List/List.js";
import axios from "axios";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { MainDiv, FilterDiv, DropdownDiv, ButtonDiv } from "./MainCss.js";
import { MoreBtn } from "../UI/Button.js";

const MainPage = () => {
  const [postList, setPostList] = useState([]);
  const [sort, setSort] = useState("최신순");
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);
  const [loadMore, setLoadMore] = useState(true);

  // 더불러오기 버튼 클릭시 보여지는 게시물 정렬
  const getPostLoadMore = () => {
    let body = {
      sort,
      search,
      skip,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...postList, ...response.data.postList]);
          setSkip(skip + response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // 최신순, 인기순 필터 적용시 보여지는 게시물 정렬
  const getPostList = () => {
    setSkip(0);
    let body = {
      sort,
      search,
      skip: 0,
    };
    axios
      .post("/api/post/list", body)
      .then((response) => {
        if (response.data.success) {
          setPostList([...response.data.postList]);
          setSkip(response.data.postList.length);
          if (response.data.postList.length < 5) {
            setLoadMore(false);
          }
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
    <MainDiv>
      <div className="title-style">
        매번 달라지는 길거리음식 위치를 찾느라 불편함을 겪으셨나요?{" "}
        <span>🤔</span>
      </div>
      <div className="title-style">
        Go!Street에서 자유롭게 길거리음식 위치를 공유해보세요! 🫶
      </div>
      <FilterDiv>
        <DropdownDiv>
          <DropdownButton
            variant="secondary"
            title={sort}
            size="sm"
            menuVariant="dark"
          >
            <Dropdown.Item onClick={() => setSort("최신순")}>
              최신순
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => setSort("인기순")}>
              인기순
            </Dropdown.Item>
          </DropdownButton>
        </DropdownDiv>
        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13) SearchHandler();
            }}
            placeholder="검색어 입력 후 enter를 눌러주세요."
          />
        </div>
      </FilterDiv>
      <List postList={postList} />
      {loadMore && (
        <ButtonDiv>
          <MoreBtn onClick={() => getPostLoadMore()}>글 더 불러오기 👀</MoreBtn>
        </ButtonDiv>
      )}
    </MainDiv>
  );
};

export default MainPage;
