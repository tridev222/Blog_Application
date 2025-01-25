const Blog = require("../models/blogSchema");


//Comment Post 

const addComment = async (req, res) => {
    try {
      const postId = req.params.id; 
      const { text } = req.body;
  
      if (!text) {
        return res.status(400).json({ message: "Comment text is required" });
      }
  
      const post = await Blog.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const newComment = {
        text, 
        createAt: new Date(),
      };
      post.comments.push(newComment);
  
      await post.save();
      res.status(200).json({ blog: post });
    } catch (error) {
      console.error("Error adding comment:", error);
      res.status(500).json({ message: "Server error" });
    }
  };

  const deleteComment = async (req, res) => {
    try {
      const postId = req.params.id; 
      const commentId = req.params.commentId; 
  
      const post = await Blog.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      const commentIndex = post.comments.findIndex(comment => comment._id.toString() === commentId);
  
      if (commentIndex === -1) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      //  Remove the comment from the array
      post.comments.splice(commentIndex, 1);

      await post.save();
      res.status(200).json({ message: 'Comment deleted successfully', blog: post });
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
module.exports={ addComment , deleteComment };