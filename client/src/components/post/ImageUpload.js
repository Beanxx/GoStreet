import React from "react";
import { Form } from "react-bootstrap";
import axios from "axios";

const ImageUpload = (props) => {
  const FileUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/post/image/upload", formData).then((response) => {
      props.setImage(response.data.filePath);
    });
  };

  return (
    <div>
      <Form.Control
        type="file"
        className="shadow-none"
        accept="image/*"
        onChange={(e) => FileUpload(e)}
      />
      {/* accept 속성: 어떤 유형의 파일을 input 태그로 관리할지 지정 가능  */}
    </div>
  );
};

export default ImageUpload;
