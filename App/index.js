const express = require("express");
const path = require("path"); // server 파일 경로와 client 파일 경로 합쳐주는 모듈
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 4000;
const config = require("./server/config/key.js");

app.use(express.static(path.join(__dirname, "./client/build")));

// client에서 보내는 body 명령어 추적 가능해짐!
app.use(express.json());
app.use("/image", express.static("./image")); // 현재 경로에 있는 이미지 폴더 안에 있는 것들을 이미지로 사용하겠다!
app.use(express.urlencoded({ extended: true }));

app.use("/api/post", require("./server/Router/post.js"));
app.use("/api/user", require("./server/Router/user.js"));
app.use("/api/reple", require("./server/Router/reple.js"));

app.listen(port, () => {
  mongoose
    .connect(config.mongoURI)
    .then(() => {
      console.log(`Example app listening on port ${port}`);
      console.log("connecting MongoDB...");
    })
    .catch((err) => {
      console.log(`${err}`);
    });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
