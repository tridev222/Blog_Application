const Blog = require('../models/blogSchema'); // Your blog model


const likePost = async (req, res) => {
  const { postId } = req.params; 

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      postId,
      { $inc: { likes: 1 } }, 
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    return res.status(200).json({
      message: "Blog post liked successfully",
      likes: updatedBlog.likes, 
    });
  } catch (error) {
    return res.status(500).json({ message: `Server error: ${error.message}` });
  }
};

module.exports = { likePost };