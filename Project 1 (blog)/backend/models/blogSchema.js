const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = require("./userSchema");

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Corrected here
  },
  likes: { type: Number, default: 0 },

  comments: [
    {
      text: String,
      createAt: { type: Date, default: Date.now },
    },
  ],
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
