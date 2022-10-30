const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId, // mongoose에선 자동적으로 _id를 부여해줘서 알아서 mapping해줌
      ref: "User", // 그래서 어느 스키마를 참고할지만 알려주면 된다.
    },
    repleNum: {
      type: Number,
      default: 0,
    },
  },
  { collection: "posts" }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
