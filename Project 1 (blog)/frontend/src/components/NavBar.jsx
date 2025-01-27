import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom

function NavBar() {
  const navigate=useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Open menu when profile icon is clicked
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Close menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDirectionLogout=()=>{
    navigate('/login')
  }
  const handleDirectionProfile=()=>{
    navigate('/homepage/edit-Profile')
  }

  return (
    <AppBar>
      <Box sx={{ maxWidth: 'xxl' }}>
        <Toolbar disableGutters>
          {/* Desktop Links (Centered) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: "40px", justifyContent: 'center' }}>
            <Link
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                display: 'inline-block',
                margin: '0 15px',
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
                textDecoration: 'none',
                color: 'inherit',
                display: 'inline-block',
                margin: '0 15px',
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
                textDecoration: 'none',
                color: 'inherit',
                display: 'inline-block',
                margin: '0 15px',
                '&:hover': {
                  color: 'darkblue',
                  textDecoration: 'none',
                },
              }}
            >
              Contact Us
            </Link>
          </Box>

          {/* Profile Icon and Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
              <Button onClick={handleDirectionProfile}> <Typography sx={{ textAlign: 'center' }}>Edit Profile</Typography></Button>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
               <Button onClick={handleDirectionLogout}> <Typography sx={{ textAlign: 'center' }}>Logout</Typography></Button>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default NavBar;
