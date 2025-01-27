const Blog = require('../models/blogSchema'); // Your blog model

const likePost = async (req, res) => {
  const { postId } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({
        status: 'failure',
        message: 'Invalid post ID',
      });
    }

    const blog = await Blog.findById(postId);

    if (!blog) {
      return res.status(404).json({
        status: 'failure',
        message: 'Blog post not found',
      });
    }

    if (!blog.likes.includes(req.user._id)) {
      // If the user hasn't liked the post, add their ID to the likes array
      await blog.updateOne({ $push: { likes: req.user._id } });
      return res.status(200).json({
        status: 'success',
        message: 'Blog post liked successfully',
      });
    } else {
      // If the user has already liked the post, remove their ID from the likes array
      await blog.updateOne({ $pull: { likes: req.user._id } });
      return res.status(200).json({
        status: 'success',
        message: 'Blog post unliked successfully',
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 'failure',
      message: `Server error: ${error.message}`,
    });
  }
};

module.exports = { likePost };
