import { Box, Button, createStyles, IconButton, Snackbar, TextField, Theme } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React, { useState } from "react";
import axios from 'axios';
import AuthService from "./services/auth.service";
import { customerLoginDto } from "./models/customerLoginDto";
import {useHistory} from 'react-router-dom';
import { customerRegisterDto } from "./models/customerRegisterDto";
import CloseIcon from '@material-ui/icons/Close';
const useStyles = makeStyles((theme) => ({

  form:{
  }, 
  input:{
    width:'100%'
  },
  container:{
    margin:'10px 20px 2px 20px'
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


function Register() {

  const history = useHistory();
  const [password,setPassword] = useState("");
  const [passwordConfirm,setPasswordConfirm] = useState("");
  const [email,setEmail] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");


  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function SubmitForm(){

    const RegisterDtoSend:customerRegisterDto = {
      email:email,
      password:password,
      FirstName:firstName,
      LastName:lastName
    };

    if(RegisterDtoSend.password.length < 6){
      setMessage("Ingresar minimo 6 caracteres")
      setOpen(true)
    }
    if(RegisterDtoSend.password == passwordConfirm ){
    AuthService.register(RegisterDtoSend).then(()=>{
      history.push('/react/login'), [history]    
    }); }
    else{
      setMessage("Las contraseñas no coinciden")
      setOpen(true)
    }


    
  }
 
  function BackLogin(){
    history.push('/react/login'), [history]    
  }

  return (
    <div className={classes.mainContainer}>
            <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
          
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />


      <Box>
    <form className={classes.form} noValidate autoComplete="off">
      <div className={classes.container}>
      <div>
      <TextField className={classes.input} id="standard-name"  label="Nombre" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
      </div>
      <div>
      <TextField className={classes.input}  id="standard-name"  label="Apellido" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
      </div>
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
      <div>
      <TextField
      className={classes.input}
      id="standard-name" type="password" label="Password" value={passwordConfirm} onChange={(e)=>setPasswordConfirm(e.target.value)} />
      </div>
      <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitbutton}
            onClick={SubmitForm}
          >
       Crear Cuenta
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitbutton}
            onClick={BackLogin}
          >
            Regresar al login
          </Button>

        
        
          </div>
    </form>
   
    </Box>
    </div>
  );
}
export default Register;
