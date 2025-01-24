const express = require("express");
const { userRegister, userLogin } = require("../controller/userController");
const {createPost , getAllPost , getPost} = require("../controller/postController")
const router = express.Router();
const upload = require('../multerConfig')
const { likePost } = require("../controller/likeController");
const {isAuth} = require("../middleware/isAuth");

// User routes
router.post('/register',userRegister);
router.post('/login',userLogin);
router.get('/create/post',getAllPost)
router.get("/api/posts/:id",getPost)
router.post('/posts', upload.single('image'),isAuth, createPost); 
router.post("/like/:postId", likePost);


module.exports =  router ;
