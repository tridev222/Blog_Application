import * as React from "react";
import { useState } from "react";
import { Button} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; 
import axios from "axios";

const Like = ({ postId }) => {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = async () => {
    try {
      const response = await axios.post(`http://localhost:3000/api/user/like/${postId}`);
      console.log(response)
      setLikes(response.data.like);
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  return (
    <Button onClick={handleLikeClick} startIcon={<ThumbUpIcon />}>
      Like ({likes})
    </Button>
  );
};
export default Like;