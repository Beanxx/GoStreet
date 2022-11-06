import React, { useState, useEffect, useRef } from "react";
import { RepleContentDiv } from "./RepleCSS";
import { useSelector } from "react-redux";
import axios from "axios";
import Avatar from "react-avatar";
import moment from "moment";
import Swal from "sweetalert2";
import { LightBtn } from "../UI/Button";

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
        return Swal.fire({
          icon: "success",
          text: "댓글을 수정하였습니다.",
          button: "확인",
        }).then(() => {
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "댓글 수정에 실패하였습니다.",
          button: "확인",
        }).then(() => {
          window.location.reload();
        });
      }
    });
  };

  const DeleteHandler = (e) => {
    e.preventDefault();

    Swal.fire({
      icon: "warning",
      text: "정말로 삭제하시겠습니까?",
      showCancelButton: true,
      confirmButtonText: "확인",
      cancelButtonText: "취소",
      confirmButtonColor: "#50577a",
      cancelButtonColor: "#BEBCBA",
    }).then((result) => {
      if (result.isConfirmed) {
        let body = { repleId: props.reple._id, postId: props.reple.postId };

        axios
          .post("/api/reple/delete", body)
          .then((response) => {
            if (response.data.success) {
              Swal.fire({
                icon: "success",
                text: "댓글이 삭제되었습니다.",
                button: "확인",
              }).then(() => {
                window.location.reload();
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              text: "댓글 삭제에 실패하였습니다.",
              button: "확인",
            }).then(() => {
              window.location.reload();
            });
          });
      }
    });
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
              <LightBtn onClick={handleQuitEdit}>취소</LightBtn>
              <LightBtn onClick={(e) => SubmitHandler(e)}>수정 완료</LightBtn>
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
      <div className="info-style">
        <Avatar size="30" round={true} src={props.reple.author.photoURL} />

        <p className="author">{props.reple.author.displayName}</p>
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
