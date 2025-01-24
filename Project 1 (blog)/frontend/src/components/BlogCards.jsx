import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Box, IconButton } from "@mui/material";
import Like from "./Like";
import CommentIcon from "@mui/icons-material/Comment"; // Comment icon from MUI

export default function BlogCards({ blog }) {
  const imageUrl = blog.imageUrl;
  const imageSrc = imageUrl ? `http://localhost:3000${imageUrl}` : null;

  return (
    <Card sx={{ width: "100%", height: "100%", alignContent: "center", textAlign: "center" }}> {/* Full width and height for card */}
      {imageSrc && (
        <CardMedia
          sx={{
            width: 400, // Set width of image (small size)
            height: 150, // Set height of image
            objectFit: "cover", // Maintain image aspect ratio
            margin: "0 auto", // Center the image horizontally
            boxShadow: "5px 2px 5px 2px rgb(0 0 0/ 0.6)", // Add shadow to the image
          }}
          image={imageSrc}
          title={blog.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {blog.content}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Like postId={blog._id} />
        <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
          <Button
            variant="contained"
            startIcon={<CommentIcon />}
            sx={{ textTransform: "none" }}
          />
        </Box>
      </CardActions>
    </Card>
  );
}
