const express = require("express");
const path = require("path"); // server 파일 경로와 client 파일 경로 합쳐주는 모듈
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
