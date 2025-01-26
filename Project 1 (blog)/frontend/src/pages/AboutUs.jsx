import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import NavBar from "../components/NavBar";

const AboutUs = () => {

  return (
    <>
      <NavBar />
      <Container sx={{ backgroundColor: "#f5f5f5", padding: 6, mt: 8 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{ color: "#3f51b5", marginBottom: 4 }}
        >
          About Us
        </Typography>

        <Typography variant="body1" align="center" paragraph>
          We are a team of passionate individuals who work hard to provide the
          best service for our users.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    backgroundColor: "#3f51b5",
                  }}
                >
                  A
                </Avatar>
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                  Rishi
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ color: "text.secondary" }}
                >
                  CEO & Founder
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent>
                <Avatar
                  sx={{
                    width: 100,
                    height: 100,
                    margin: "0 auto",
                    backgroundColor: "#3f51b5",
                  }}
                >
                  B
                </Avatar>
                <Typography variant="h6" align="center" sx={{ marginTop: 2 }}>
                  Kia
                </Typography>
                <Typography
                  variant="body2"
                  align="center"
                  sx={{ color: "text.secondary" }}
                >
                  Lead Developer
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutUs;
