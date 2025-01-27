const express = require("express");
const { userRegister, userLogin, userDetail } = require("../controller/userController");
const { createPost, getAllPost, getPost } = require("../controller/postController");
const { addComment , deleteComment } = require("../controller/CommentController");
const router = express.Router();
const upload = require("../multerConfig");
const { likePost } = require("../controller/likeController");
const { isAuth } = require("../middleware/isAuth");

// User routes
router.post("/register", userRegister);
router.post("/login", userLogin);

router.get('/getDeatail/:id',userDetail)

router.get("/create/post", getAllPost);
router.get("/posts/comment/:id", getPost);

router.post("/create/post", upload.single("image"), createPost);
router.post("/like/:postId", likePost);

router.post("/posts/comment/:id", addComment);
router.delete('/posts/comment/:id/:commentId', deleteComment);

module.exports = router;
