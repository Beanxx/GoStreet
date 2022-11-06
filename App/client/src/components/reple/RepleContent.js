import React, { useState, useEffect, useRef } from "react";
import { RepleContentDiv, RepleUploadDiv } from "./RepleCSS";
import { useSelector } from "react-redux";
import axios from "axios";
import Avatar from "react-avatar";
import moment from "moment";

const RepleContent = (props) => {
  const ref = useRef();
  const user = useSelector((state) => state.user);
  const [modalFlag, setModalFlag] = useState(false);
  const [editFlag, setEditFlag] = useState(false);
  const [reple, setReple] = useState(props.reple.reple);
  useOnClickOutside(ref, () => setModalFlag(false));

  const SubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      uid: user.uid,
      reple,
      postId: props.reple.postId,
      repleId: props.reple._id,
    };

    axios.post("/api/reple/edit", body).then((response) => {
      if (response.data.success) {
        alert("댓글 수정에 성공하였습니다.");
      } else {
        alert("댓글 수정에 실패하였습니다.");
      }
      return window.location.reload();
    });
  };

  const DeleteHandler = (e) => {
    e.preventDefault();

    if (window.confirm("정말로 삭제하시겠습니까?")) {
      let body = { repleId: props.reple._id, postId: props.reple.postId };

      axios
        .post("/api/reple/delete", body)
        .then((response) => {
          if (response.data.success) {
            alert("댓글이 삭제되었습니다.");
            window.location.reload();
          }
        })
        .catch((err) => {
          alert("댓글 삭제에 실패하였습니다.");
        });
    }
  };

  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, HH:mm") + " (수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, HH:mm");
    }
  };

  const handleQuitEdit = () => {
    setEditFlag(false);
    setReple(props.reple.reple);
  };

  return (
    <RepleContentDiv>
      <div className="content-style">
        {editFlag ? (
          <form className="edit-style">
            <input
              type="text"
              value={reple}
              onChange={(e) => setReple(e.currentTarget.value)}
            />
            <div className="button-style">
              <button onClick={handleQuitEdit}>취소</button>
              <button onClick={(e) => SubmitHandler(e)}>수정 완료</button>
            </div>
          </form>
        ) : (
          <p className="reple-style">{props.reple.reple}</p>
        )}
        {props.reple.author.uid === user.uid && (
          <div className="modalControl">
            <span onClick={() => setModalFlag(true)}>🛠</span>
            {modalFlag && (
              <div className="modalDiv" ref={ref}>
                <p
                  onClick={() => {
                    setEditFlag(true);
                    setModalFlag(false);
                  }}
                >
                  수정
                </p>
                <p className="delete" onClick={(e) => DeleteHandler(e)}>
                  삭제
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="author-style">
        <Avatar size="30" round={true} src={props.reple.author.photoURL} />

        <p>{props.reple.author.displayName}</p>
        <p className="time">
          {setTime(props.reple.createdAt, props.reple.updatedAt)}
        </p>
      </div>
    </RepleContentDiv>
  );
};

// // 모달 밖 클릭시 모달창 닫히도록 하는 Hook
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default RepleContent;
