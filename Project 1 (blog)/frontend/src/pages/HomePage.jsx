import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import Grid from "@mui/material/Grid";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PostList from "../components/PostList";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/homePage/create");
  };

  return (
    <>
      <NavBar />
      <Banner />
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          {/* First Grid item with Create Post button */}
          <Grid
            item
            sm={2}
            xs={12}
            sx={{
              boxShadow: "2px 2px 2px 2px rgb(0 0 0/ 0.6)",
            }}
          >
            <Button
              variant="contained"
              onClick={handleCreate}
              sx={{ width: "100%" }}
            >
              Create Post
            </Button>
          </Grid>

          {/* Second Grid item for the PostList */}
          <Grid item xs={12} sm={10} lg={10}>
            <Box
              sx={{
                display: "flex", // Changed from grid to flex
                flexDirection: "column", // Align the posts in a row direction
                gap: 2,
                justifyContent: "center", // Align to the left
                flexWrap: "wrap",
              }}
            >
              <PostList />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePage;
