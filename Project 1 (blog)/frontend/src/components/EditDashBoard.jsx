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
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const EditDashBoard = () => {

  const[userData,setUserData]=useState('');
  const[userInput,setUserInput]=useState({
    name:"",
    email:""
  });

// useEffect(async()=>{
//   const response = await axios.get(`http://localhost:3000/api/user/getDeatail/${id}`)
//   setUserData(response.data);
// },[])

    const handleChange =(e)=>{
        const{name,value}=e.target;
        setUserInput((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div>
        <NavBar/>
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

                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong> Name:</strong> <TextField type="input" name="name" onChange={handleChange} value={userInput.name} />
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="body1">
                    <strong>Email:</strong> <TextField type="input" name="email" onChange={handleChange} value={userInput.email}/>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Link to="/homepage/edit-Profile">
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "10px 20px" }}
              >
                Submit
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default EditDashBoard;
