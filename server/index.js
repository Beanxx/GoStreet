const express = require("express");
const path = require("path"); // server 파일 경로와 client 파일 경로 합쳐주는 모듈
const mongoose = require("mongoose");

const app = express();
const port = 4000;
const config = require("./config/key.js");

app.use(express.static(path.join(__dirname, "../client/build")));

// client에서 보내는 body 명령어 추적 가능해짐!
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Post } = require("./Model/Post.js");
const { Counter } = require("./Model/Counter.js");

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

// 게시글 추가
app.post("/api/post/submit", (req, res) => {
  let temp = req.body;
  // mongoDB에서 여러 document를 찾는 명령어: find()
  // 하나의 document를 찾을 땐 findOne()
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;

      const CommunityPost = new Post(temp);

      // $inc : 값 증가시켜줌
      CommunityPost.save().then(() => {
        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(
          () => {
            res.status(200).json({ success: true });
          }
        );
      });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 게시글 목록 불러오기
app.post("/api/post/list", (req, res) => {
  Post.find()
    .exec()
    .then((doc) => {
      res.status(200).json({ success: true, postList: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 상세페이지
app.post("/api/post/detail", (req, res) => {
  Post.findOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then((doc) => {
      console.log(doc);
      res.status(200).json({ success: true, post: doc });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});
