import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RepleUploadDiv } from "../../style/RepleCSS";

const RepleUpload = (props) => {
  const [reple, setReple] = useState("");
  const user = useSelector((state) => state.user);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!reple) {
      return alert("댓글 내용을 채워주세요.");
    }

    let body = {
      reple,
      uid: user.uid,
      postId: props.postId,
    };

    axios.post("/api/reple/submit", body).then((response) => {
      if (response.data.success) {
        alert("댓글 작성이 성공하였습니다.");
        window.location.reload(); // 새로고침
      } else {
        alert("댓글 작성에 실패하였습니다.");
      }
    });
  };

  return (
    <RepleUploadDiv>
      <form>
        <input
          type="text"
          value={reple}
          onChange={(e) => setReple(e.currentTarget.value)}
        />
        <button onClick={(e) => SubmitHandler(e)}>댓글 달기</button>
      </form>
    </RepleUploadDiv>
  );
};

export default RepleUpload;
