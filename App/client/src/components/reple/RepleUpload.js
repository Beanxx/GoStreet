import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { RepleUploadDiv } from "./RepleCSS";
import Toast from "../UI/Toast/Toast";
import Swal from "sweetalert2";

const RepleUpload = (props) => {
  const [reple, setReple] = useState("");
  const user = useSelector((state) => state.user);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (!reple) {
      return Toast.fire({
        position: "bottom",
        icon: "warning",
        text: "댓글 내용을 채워주세요.",
      });
    }

    let body = {
      reple,
      uid: user.uid,
      postId: props.postId,
    };

    axios.post("/api/reple/submit", body).then((response) => {
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          text: "댓글을 등록하였습니다.",
          button: "확인",
        }).then(() => {
          window.location.reload();
        });
      } else {
        Toast.fire({
          position: "bottom",
          icon: "error",
          text: "댓글 작성에 실패하였습니다.",
        });
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
        <button onClick={(e) => SubmitHandler(e)}>⏎</button>
      </form>
    </RepleUploadDiv>
  );
};

export default RepleUpload;
