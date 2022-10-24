const express = require("express");
const path = require("path"); // server 파일 경로와 client 파일 경로 합쳐주는 모듈
const mongoose = require("mongoose");

const app = express();
const port = 4000;
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "../client/build")));

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
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
