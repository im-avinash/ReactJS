const express = require("express");
const Post = require("../models/users");

const router = express.Router();

router.put("", function (req, res, next) {
  Post.updateOne({ _id: req.params.id }, post).then((result) => {
    console.log(result);
  });
  res.status(200).json({ message: "Post Updated successfully" });
});

router.post("", function (req, res, next) {
  const post = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  post.save().then((createdPost) => {
    res.status(201).json({
      message: "post added successfully",
      id: createdPost._id,
    });
  });
  //   console.log(post);
});

router.get("", function (req, res, next) {
  Post.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "post fetched successfully",
      posts: documents,
    });
  });
});

module.exports = router;
