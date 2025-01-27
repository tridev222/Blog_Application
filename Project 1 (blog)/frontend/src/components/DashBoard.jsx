import React, {useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";

const DashBoard = () => {

  const[userData,setUserData]=useState('');

// useEffect(async()=>{
//   const response = await axios.get(`http://localhost:3000/api/user/getDeatail/${id}`)
//   setUserData(response.data);
// },[])

  return (
    <div>
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" align="center" gutterBottom>
            User Dashboard
          </Typography>

          <Card sx={{ boxShadow: 3, mt: 10 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Personal Information
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong> Name:</strong> {userData.name}
                  </Typography>
                </Grid>
                {/* Email */}
                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Email:</strong> {userData.email}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Edit Profile Button */}
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Link to="/homepage/edit-user-profile">
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "10px 20px" }}
              >
                Edit Profile
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default DashBoard;
