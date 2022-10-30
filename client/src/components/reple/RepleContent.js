import React, { useState, useEffect, useRef } from "react";
import { RepleContentDiv } from "../../style/RepleCSS";
import { useSelector } from "react-redux";

const RepleContent = (props) => {
  const ref = useRef();
  const user = useSelector((state) => state.user);
  const [modalFlag, setModalFlag] = useState(false);
  useOnClickOutside(ref, () => setModalFlag(false));

  return (
    <RepleContentDiv>
      <div className="author">
        <p>{props.reple.author.displayName}</p>
        {props.reple.author.uid === user.uid && (
          <div className="modalControl">
            <span onClick={() => setModalFlag(true)}>...</span>
            {modalFlag && (
              <div className="modalDiv" ref={ref}>
                <p>수정</p>
                <p className="delete">삭제</p>
              </div>
            )}
          </div>
        )}
      </div>
      <p>{props.reple.reple}</p>
    </RepleContentDiv>
  );
};

// Hook
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
