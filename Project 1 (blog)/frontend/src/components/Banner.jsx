import { Typography, Box, styled } from "@mui/material";
import React from "react";

// Styling the Box to make the background image fit the container
const Image = styled(Box)`
  width: 100%;
  height: 50vh; /* Adjust the height as needed, it could be 100vh for full-screen banner */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden; /* To ensure the image doesn't overflow */

  /* Styling for image */
  & img {
    object-fit: cover; /* Ensures the image covers the container */
    width: 100%;
    height: 100%;
  }
`;

const Banner = () => {
  return (
    <div>
      <Image>
        <img
          src={"https://imgs.search.brave.com/hPxHGkKF-epXo1UzAysvPFZWCyAT_egODPcfSyClh_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jNC53/YWxscGFwZXJmbGFy/ZS5jb20vd2FsbHBh/cGVyLzYzMi8xNjIv/NDU4L2xhZ28tbmF0/dXJhbGV6YS00ay04/ay13YWxscGFwZXIt/cHJldmlldy5qcGc"}
          alt="Banner"
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
            } /* Responsive font size */,
            textAlign: "center",
            color: "white",
            position: "absolute" /* To place text on top of the image */,
            zIndex: 10 /* Ensure text is visible above the image */,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            padding: "10px",
          }}
        >
          BLOG APPLICATION
        </Typography>
      </Image>
    </div>
  );
};

export default Banner;
