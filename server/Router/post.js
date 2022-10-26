var express = require("express");
var router = express.Router();

const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");

// 게시글 추가
router.post("/submit", (req, res) => {
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
router.post("/list", (req, res) => {
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
router.post("/detail", (req, res) => {
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

// 수정
router.post("/edit", (req, res) => {
  let temp = { title: req.body.title, content: req.body.content };
  // $set: 새로운 정보로 완전히 교체
  Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 삭제
router.post("/delete", (req, res) => {
  Post.deleteOne({ postNum: Number(req.body.postNum) })
    .exec()
    .then(() => {
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

module.exports = router;
