import React, { Component } from 'react'
import axios from 'axios';
import { Card, CardContent, Grid } from '@mui/material';
export class Projectlogin extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
           password:"",
             errors:{
              name:"",
              email:"",
              password:""
             }
        }
    }
    handleChange=(e)=>
{
    let {name,value}=e.target
    let errors={...this.state.errors}
    if(value==="")
    {
        errors[name]="required"
    }
    else
    {
        errors[name]=""
    }
   
    if(name==="email")
    {
        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(pattern.test(value))
        {
            errors.email=""   
        }
        else if(value==="") 
        {
            errors.email="required"
        }
        else 
        {
                errors.email="enter a valid email"
        }
    }
    if(name==="password")
    {
        let pattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(pattern.test(value))
        {
            errors.password=""   
        }
        else if(value==="") 
        {
            errors.password="required"
        }
        else 
        {
                errors.password="password should contain atleast one number and one special character"
        }
    }
    this.setState({errors,[name]:value});

};
handlesubmit= async(e)=>
{ 
e.preventDefault()
try{
	var response = await axios.post(
	'http://localhost:3012/register/signup', {
		name: this.state.name,
		password: this.state.password,
		email: this.state.email
	})
	if(response.data.status==="ok") {
	
		this.props.history.push('/login');
	}
	else
	{
		alert(response.data.msg)
	}
} catch (err) {
	console.warn(err)
}
	

}
   render() {
      
        return (
            <>
              
              
              <Grid
				container
				direction="row"
				justifyContent="center"
				marginTop="150px"
			>
				<Card sx={{ width: 300 }}>
					<CardContent>
                    <h1>signup form</h1>
              <form  onSubmit={(e)=>this.handlesubmit(e)} >
                      <div>
                         
                          <input type="text" 
                          placeholder='username'
                           name="name"
                            value={this.state.name}
                            onChange={(e)=>{this.handleChange(e)}}
                            ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.name}</span>
                      </div><br/>
                    
                       <div>
                         
                          <input type="text" 
                          placeholder='email'
                           name="email"
                            value={this.state.email}
                            onChange={(e)=>{this.handleChange(e)}}
                           ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.email}</span>
                      </div><br/>
					  <div>
                          
                          <input type="password" 
                          placeholder='password'
                           name="password"
                            value={this.state.password}
                            onChange={(e)=>{this.handleChange(e)}}
                           ></input><br/>
                            <span style={{color:"red"}}>{this.state.errors.password}</span>
                      </div><br/>
                      
                      <button>register</button>
                  </form>
                  </CardContent>
 				</Card>
 			</Grid>
            </>
        )
    }
}

export default Projectlogin
