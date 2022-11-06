var express = require("express");
var router = express.Router();
const { Post } = require("../Model/Post.js");
const { Counter } = require("../Model/Counter.js");
const { User } = require("../Model/User.js");
const multer = require("multer");
const setUpload = require("../Util/upload.js");

// 게시글 추가
router.post("/submit", (req, res) => {
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
  // mongoDB에서 여러 document를 찾는 명령어: find()
  // 하나의 document를 찾을 땐 findOne()
  Counter.findOne({ name: "counter" })
    .exec()
    .then((counter) => {
      temp.postNum = counter.postNum;

      User.findOne({ uid: req.body.uid })
        .exec()
        .then((userInfo) => {
          temp.author = userInfo._id;

          const CommunityPost = new Post(temp);
          // $inc : 값 증가시켜줌
          CommunityPost.save().then(() => {
            Counter.updateOne(
              { name: "counter" },
              { $inc: { postNum: 1 } }
            ).then(() => {
              res.status(200).json({ success: true });
            });
          });
        });
    })
    .catch((err) => {
      res.status(400).json({ success: false });
    });
});

// 게시글 목록 불러오기
router.post("/list", (req, res) => {
  let sort = {};

  if (req.body.sort === "최신순") {
    sort.createdAt = -1;
  } else {
    // 인기순
    sort.repleNum = -1;
  }
  Post.find({
    $or: [
      { title: { $regex: req.body.search } },
      { content: { $regex: req.body.search } },
    ],
  })
    .populate("author") // user 정보 불러오기
    .sort(sort)
    .skip(req.body.skip)
    .limit(5) // 한번에 찾을 doc 숫자
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
    .populate("author")
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
  let temp = {
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
  };
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

// 서버에 이미지 업로드 방법
/*
// multer 모듈 사용
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "image/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }).single("file");

// image upload
router.post("/image/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ sucess: false });
    } else {
      res.status(200).json({ success: true, filePath: res.req.file.path });
    }
  });
});
*/

// 미들웨어를 사용하여 외부 저장소에 이미지 업로드
router.post(
  "/image/upload",
  setUpload("community-bucket/post"),
  (req, res, next) => {
    // console.log(res.req);
    res.status(200).json({ success: true, filePath: res.req.file.location });
  }
);

module.exports = router;
