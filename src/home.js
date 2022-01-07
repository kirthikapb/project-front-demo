import React from 'react'

import {
    Grid,
    Box,
    AppBar,
    IconButton,
    Typography,
    Button,
    Toolbar,
   
    
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  
 

export default function Home(props) {

    
    return (
      <div>
        <Grid container spacing={2}>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'black' }}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Movie Suscription
                </Typography>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/register")}
                >
                  Signup
                </Button>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/login")}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/products")}
                >
                  subcription plans
                </Button>
              </Toolbar>
            </AppBar>
            </Box>
            
            <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
  sx={{ hieght:800,marginTop:"100px" }}
>
            
                <h1> Welcome To MovieStar</h1>
           
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                We believe it’s important to be where people are.
                 For a lot of consumers, on-demand content and the time they spend on their
                  personal devices is an addition to all the other screens available to them.
                 Moviestar is an expression of our desire to lead and shape digital 
                   consumption by creating a world-class service that delights this younger audience.
                </Typography>
                </Grid>
         </Grid>
      </div>
    );
  }