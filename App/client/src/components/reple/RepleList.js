import React, { useState, useEffect } from "react";
import axios from "axios";
import RepleContent from "./RepleContent";
import { RepleListDiv } from "../../style/RepleCSS";

const RepleList = (props) => {
  const [repleList, setRepleList] = useState([]);

  useEffect(() => {
    let body = { postId: props.postId };
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
