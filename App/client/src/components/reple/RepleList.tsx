import React, { useState, useEffect } from "react";
import axios from "axios";
import RepleContent from "./RepleContent";
import { RepleListDiv } from "./RepleCSS";
import { PostId, RepleListType } from "../../types/interfaces";

const RepleList = (props: PostId) => {
  const [repleList, setRepleList] = useState<RepleListType[]>([]);

  useEffect(() => {
    const body = { postId: props.postId };
    axios.post("/api/reple/getReple", body).then((response) => {
      if (response.data.success) {
        setRepleList([...response.data.repleList]);
      }
    });
  }, []);

  return (
    <RepleListDiv>
      {repleList.map((reple, idx) => {
        return <RepleContent reple={reple} key={idx} />;
      })}
    </RepleListDiv>
  );
};

export default RepleList;
