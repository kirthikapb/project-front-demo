import React from 'react';
import axios from 'axios';
import {Card,CardContent,Grid}from '@mui/material';
class Loginuser extends React.Component{
    constructor(props){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    render(){
        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                var response = await axios.post(
                'http://localhost:3012/register/login', {
                    password: this.state.password,
                    email: this.state.email
                })
                if(response.data) {
                    await localStorage.setItem('token', response.data);
                    this.props.history.push('/products');
                }
                
            } catch (err) {
                console.warn(err)
            }
        }
        return(
            <>
               <Grid
  container
  direction="row"
  justifyContent="center"
  marginTop="150px"
>
			<Card sx={{ width: 300 ,height:250}}>
                <CardContent>

                    <h1>Login</h1>
                    <form onSubmit={(e)=>handleSubmit(e)}>
                        <div>
                            
                            <input type="email" name="email" placeholder="Email"
                            value={this.state.email} 
                            onChange={(e)=> this.setState({email: e.target.value})} 

                            ></input>
                        </div><br/>
                        <div>
                            
                            <input type="password" name="password" placeholder="Password" 
                            value={this.state.password} 
                            onChange={(e)=> this.setState({password: e.target.value})}></input>
                        </div> <br/>
                        <button type="submit">Submit</button> <br/>
                    </form>
                    </CardContent>
                    </Card>
                    </Grid>
            </>
        )
    }
}

export default Loginuser;