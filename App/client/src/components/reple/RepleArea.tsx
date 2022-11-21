import React from "react";
import RepleUpload from "./RepleUpload";
import RepleList from "./RepleList";
import { useSelector } from "react-redux";
import { RepleAreaDiv } from "./RepleCSS";
import { RootState } from "../../reducer/store";
import { PostId } from "../../types/interfaces";

const RepleArea = (props: PostId) => {
  const user = useSelector((state: RootState) => state.user);

  return (
    <RepleAreaDiv>
      <div>💡 댓글</div>
      {user.accessToken && <RepleUpload postId={props.postId} />}
      <RepleList postId={props.postId} />
    </RepleAreaDiv>
  );
};

export default RepleArea;
