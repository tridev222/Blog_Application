import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function NavBar() {
  return (
    <AppBar>
      <Toolbar sx={{ justifyContent: "center", gap: '50px' }}>
        <Link
          to="/"
          sx={{
            textDecoration: 'underline', 
            color: 'blue',               
            display: 'inline-block',
            '&:hover': {
              color: 'darkblue',          
              textDecoration: 'none',     
            },
          }}
        >
          Home
        </Link>
        <Link
          to="/aboutus"
          sx={{
            textDecoration: 'underline',
            color: 'blue',
            display: 'inline-block',
            '&:hover': {
              color: 'darkblue',
              textDecoration: 'none',
            },
          }}
        >
          About Us
        </Link>
        <Link
          to="/contactus"
          sx={{
            textDecoration: 'underline',
            color: 'blue',
            display: 'inline-block',
            '&:hover': {
              color: 'darkblue',
              textDecoration: 'none',
            },
          }}
        >
          Contact Us
        </Link>
        <Link
          to="/login"
          sx={{
            textDecoration: 'underline',
            color: 'blue',
            display: 'inline-block',
            '&:hover': {
              color: 'darkblue',
              textDecoration: 'none',
            },
          }}
        >
          Logout
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
