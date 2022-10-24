import React, { useState, useEffect } from "react";

const Upload = (props) => {
  const [content, setContent] = useState("");

  const onSubmit = () => {
    let tempArr = [...props.contentList];
    tempArr.push(content);
    props.setContentList([...tempArr]);
    setContent("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "1rem",
      }}
    >
      <input
        type="text"
        value={content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button onClick={() => onSubmit()} style={{ marginTop: "1rem" }}>
        제출!
      </button>
    </div>
  );
};

export default Upload;
