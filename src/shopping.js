import  React,{useState} from 'react';
import './App.css'
import {Card,CardContent,Button,Grid,
    Box,AppBar,Toolbar,IconButton,Typography,CardActions}from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CheckIcon from "@mui/icons-material/Check";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";

export default function Subcription(props) {
const[toggle1,setToggle1]=useState(false)
const[toggle2,setToggle2]=useState(false)
const[toggle3,setToggle3]=useState(false)

const handletoggle1=(e)=>{
  alert("register if you are new user or login in to your account if you already an user")
  setToggle1(!toggle1)
  
  }
  const handletoggle2=(e)=>{
    
    alert("register if you are new user or login in to your account if you already an user")
    setToggle2(!toggle2) 
    
    }
    const handletoggle3=(e)=>{
      alert("register if you are new user or login in to your account if you already an user")
      setToggle3(!toggle3) 
     
      
      }
  return (
      <div>
    <Grid container
    direction="column"
    > 
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: 'black'}}>
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
        Subcription plans
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </div>  

        <div  className="product">
       <Grid container
        justifyContent="space-around"
       >
         {/* product1 */}       
    <Card sx={{ minWidth: 300, borderRadius:"20px" }}>
      <CardContent>
     
      <div className="head">
            <header>
                <p className="bold">super</p>
                <h1 className="header">₹899<span className="spanheader">/year</span></h1>
                
            </header>
        </div><hr/>


        <div className="bold "> 
                   <p> <CheckIcon />All content
Movies, live sports, TV, Specials</p>    
                    <p><CheckIcon />
                    5GB Storage</p>  
                    <p><CheckIcon />
                    Watch on TV or Laptop</p>
                    <p> <CheckIcon />
                    Community Access</p>         
                    <p> <HighlightOffSharpIcon />
                    Ads free movies and shows (except sports)</p> 
                      <p> <CheckIcon />
                      Number of devices that can be logged in:2</p>
                      <p> <CheckIcon />
                      Max video quality:Full HD (1080p)</p>                      
                      <p> <CheckIcon />
                      Monthly Status Reports</p>
        
        </div>
    
     <CardActions>
      <Button variant="contained" 
      name={toggle1?"UnSubscribe":"Subscribe"}
      onClick={(e)=>handletoggle1(e) }
      sx={{borderRadius:"20px",height:"45px",minWidth: 300, background: 'black'}}>
        {toggle1?"UnSubscribe":"Subscribe"}</Button>
      </CardActions>
      </CardContent> 
    </Card>



           {/* product2 */}       
    <Card sx={{ minWidth:300 , borderRadius:"20px"}}>
      <CardContent>

      <div  className="head">
            <header>
                <p className="bold"> Premium</p>
                <h1 className="header">₹1499<span className="spanheader">/year</span></h1>  
            </header>
        </div><hr/>
 
        <div className="bold"> 
        <p> <CheckIcon />All content
Movies, live sports, TV, Specials</p>   
                    <p><CheckIcon />
                    5GB Storage</p>  
                    <p><CheckIcon />
                    Watch on TV or Laptop</p>
                    <p> <CheckIcon />
                    Community Access</p>         
                    <p> <CheckIcon />
                    Ads free movies and shows (except sports)</p> 
                      <p> <CheckIcon />
                      Number of devices that can be logged in:4</p>
                      <p> <CheckIcon />
                      Max video quality:4K (2160p)</p>                      
                      <p> <CheckIcon />
                      Monthly Status Reports</p>
        
        </div>

     <CardActions>
      <Button variant="contained" 
      name={toggle2?"UnSubscribe":"Subscribe"}
      onClick={(e)=>handletoggle2(e)}
      sx={{borderRadius:"20px",height:"45px",minWidth: 300, background: 'black'}}>
        {toggle2?"UnSubscribe":"Subscribe"}</Button>
     </CardActions>
      </CardContent>   
    </Card>


    {/* product3 */}       
    <Card sx={{ minWidth: 300, borderRadius:"20px" }}>
      <CardContent>

      <div  className="head">
            <header>
                <p className="bold">premium monthly</p>
                <h1 className="header">₹299<span className="spanheader">/month</span></h1>  
            </header>
        </div><hr/>

        <div className="bold"> 
        <p> <CheckIcon />All content
Movies, live sports, TV, Specials</p>   
                    <p><CheckIcon />
                    5GB Storage</p>  
                    <p><CheckIcon />
                    Watch on TV or Laptop</p>
                    <p> <CheckIcon />
                    Community Access</p>         
                    <p> <CheckIcon />
                    Ads free movies and shows (except sports)</p> 
                      <p> <CheckIcon />
                      Number of devices that can be logged in:4</p>
                      <p> <CheckIcon />
                      Max video quality:4K (2160p)</p>                      
                      <p> <CheckIcon />
                      Monthly Status Reports</p>
        
        </div>

        <CardActions>
      <Button variant="contained" 
      name={toggle3?"UnSubscribe":"Subscribe"}
      onClick={(e)=>handletoggle3(e)}
      sx={{borderRadius:"20px",height:"45px",minWidth: 300, background: 'black'}}>
        {toggle3?"UnSubscribe":"Subscribe"}</Button>
      </CardActions>
      </CardContent>
        
    </Card>
    </Grid>
    </div>
    </Grid>
    </div>
  );
}

