import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
// import { ShoppingBag } from '@mui/icons-material';
import logo from '../image/logo.jpg'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
// import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router'




const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log('logout clicked')
    navigate('/Login')
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>
              <Grid sx={{
                backgroundImage: `url(${logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: "none", sm: 'block' },
                height: 65,
                width: 150
              }} />
              {/* <ShoppingBag sx={{ color: 'white', fontSize: '50px' }} /> */}
            </Typography>
            <Button component={NavLink} to="/" style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : ""}}} sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}>Home </Button>
            <Button component={NavLink} to="/Login" style={({ isActive }) => {return {backgroundColor: isActive ? "#6d1b7b" : "" } }}sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }}>  Login </Button>
            {/* <Button component={NavLink} to="/api"
                            style={({ isActive }) => {
                                return {
                                    backgroundColor: isActive ? "#6d1b7b" : ""
                                }
                            }}
                            sx={{ color: 'white', textTransform: 'none' }}
                        >
                            Api
                                 </Button> */}
            <Button component={NavLink} to="/contact" style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" } }} sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }} > Contact </Button>

            <Button component={NavLink} to="/data" style={({ isActive }) => { return { backgroundColor: isActive ? "#6d1b7b" : "" }}}sx={{ color: 'white', fontSize: '16px', textTransform: 'none' }} > Data</Button>

            {/* <Button><NativeSelect
                            defaultValue={30}
                            inputProps={{
                                name: 'age',
                                id: 'uncontrolled-native',
                            }}
                        >
                               <option value={11}></option>
                            <option value={10}>Logout</option>
                            
                        </NativeSelect></Button> */}
            {/* <Button><Box  >
                            <ShoppingBag sx={{ color: 'white', fontSize: '50px' }} />
                        </Box></Button> */}



            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem>
                <Avatar /> Profile
        </MenuItem>
              {/* <Divider /> */}
              <MenuItem component={NavLink} to="/register">
                <ListItemIcon >
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
          Add another account
        </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
          Logout
        </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}
export default Navbar;
