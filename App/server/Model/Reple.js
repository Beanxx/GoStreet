const mongoose = require("mongoose");

const repleSchema = new mongoose.Schema(
  {
    reple: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // 어떠한 포스트에 등록되어 있는지만 확인할거라 ref 설정을 해주지 않아도 됨
    postId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { collection: "reples" }
);

const Reple = mongoose.model("Reple", repleSchema);

module.exports = { Reple };
