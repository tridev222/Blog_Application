const Post = require("../models/blogSchema");
const Blog =require("../models/blogSchema");

//create a post
const createPost = async (req,res) => {
  const { title, content , email} = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
  const Newpost = new Post({
    title,
    content,
    imageUrl,
    email
  });
  try {
    if (!title || !content || !imageUrl ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await Newpost.save();
    res.status(200).json({ message: "Post Created Successfully", post: Newpost  });
  } catch (error) {
    res.status(400).json({ message: `server error${error}` });
  }
};

//get all post
const getAllPost = async(req,res)=>{
    try {
        const blogs = await Post.find();
        res.json(blogs);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
}

//get A single Post
const getPost = async (req, res) => {
  try {
    const post = await Blog.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    res.status(200).json({ blog: post });
  } catch (error) {
    console.error("Error fetching the post:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};



module.exports = { createPost , getAllPost , getPost };
