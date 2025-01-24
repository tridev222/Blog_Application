import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {

  const navigate = useNavigate();

  const imageUrl =
    "https://imgs.search.brave.com/fIm5bOiZZ_QVg9Zs19lNNtQWBTFTm8NSLe9Nfbd_Kfw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYxLzdj/Lzg0LzYxN2M4NGNi/ZWJiMThkY2JjNzQ0/YzljNDczZDAxYjcz/LmpwZw";

  

  const [registerDetail, setRegisterDetail] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleRegister = async() => {
    try {
        const response = await axios.post("http://localhost:3000/api/user/register", registerDetail);
        console.log(response)
        if (response.status === 200) {
          navigate('/');
        } else {
          alert('Unexpected response: ' + response.status);
        }
      } catch (error) {
        if (error.response) {
          alert(`Error: ${error.response.data.message || 'Something went wrong'}`);
        } else if (error.request) {
          alert('Network error. Please try again.');
        } else {
          alert(`Error: ${error.message}`);
        }
      }
    setRegisterDetail({
      username: "",
      email: "",
      password: "",
    });

  };

  const handleRegisterInput = (e) => {
    const { name, value } = e.target;
    setRegisterDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        width: "400px",
        margin: "auto",
        boxShadow: "5px 2px 5px 2px rgb(0 0 0 / 0.6)",
      }}
    >
      <img
        src={imageUrl}
        alt="login"
        style={{
          width: "200px",
          margin: "auto",
          display: "flex",
          padding: "50px 0 0",
        }}
      />
      <Box
        sx={{
          padding: "25px 35px",
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          marginTop: "20px",
        }}
      >
        <TextField
          variant="standard"
          label="Username"
          name="username"
          value={registerDetail.username}
          onChange={handleRegisterInput}
        />
        <TextField
          variant="standard"
          label="Email"
          name="email"
          value={registerDetail.email}
          onChange={handleRegisterInput}
        />
        <TextField
          variant="standard"
          label="Password"
          name="password"
          value={registerDetail.password}
          onChange={handleRegisterInput}
        />
        <Button
          variant="contained"
          onClick={handleRegister}
          sx={{
            bgcolor: " #d500f9",
            color: "#c6ff00",
            fontFamily: "times new roman",
          }}
        >
          Register
        </Button>
        <Typography
          variant="h6"
          style={{ textAlign: "center", padding: "20px" }}
        >
          OR
        </Typography>
        <Button
          variant="text"
          sx={{
            bgcolor: " #d500f9",
            color: "#c6ff00",
            paddingTop: "10px",
            fontFamily: "times new roman",
          }}
        >
          Create an Account
        </Button>
      </Box>
    </Box>
  );
};

export default Registration;
