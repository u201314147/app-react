import { Box, Button, createStyles, TextField, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";
import axios from 'axios';
import AuthService from "./services/auth.service";
import { customerLoginDto } from "./models/customerLoginDto";
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

  form:{
  }, 
  container:{
    margin:'10px 20px 2px 20px'
  },
  input:{
    width:'100%'
  },
  mainContainer:{
    border: '1px solid black',
    borderRadius: '5px!important',
    position: 'absolute', left: '50%', top: '50%',
    transform: 'translate(-50%, -50%)'
  } ,
  navbutton:{
    marginLeft: "auto",
  },
  submitbutton: {
    margin: theme.spacing(1, 0, 2),
    width:'100%'

  },
}));


function Login() {
  const history = useHistory();
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");

  const classes = useStyles();

  function SubmitForm(){

    const loginDtoSend:customerLoginDto = {
      email:email,
     password:password
    };

    
    AuthService.login(loginDtoSend).then(()=>{
      history.push('/angular/home'), [history]    
    });   

    
  }
  function Register(){
    history.push('/react/register'), [history]
  }


  return (
    <div className={classes.mainContainer}>
      <Box>
    <form className={classes.form} noValidate autoComplete="off">
      <div className={classes.container}>
        <div>
      <TextField
          className={classes.input}
          id="filled-name"
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div>
      <TextField 
      className={classes.input}
      id="standard-name" type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitbutton}
            onClick={SubmitForm}
          >
       Ingresar
          </Button>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitbutton}
            onClick={Register}
          >
       Registrarse
          </Button>
          </div>
    </form>
   
    </Box>
    </div>
  );
}
export default Login;
