import React, { useRef } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { auth } from '../config/fbconfig';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });


const SignUp = () => {
    const history = useHistory();
    const classes = useStyles();

    //getting value from input-field
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    // const nameRef = useRef(null);
    // const addressRef = useRef(null);

    const handleSignUp = e =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
            //nameRef.current.value,
            // addressRef.current.value,
        ).then(user=>{
            console.log(user);
        }).catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <div className='sign-inContainer'>

                <div className='nameSgn hrCntr'>Sign Up</div>
                <div className='sgnafter'></div>
                <form action=''>
                    {/* Name
                    <label htmlFor='name' className='frmSgnup'>Name</label>
                    <input ref={nameRef} type='text' placeholder=' your name' required/> */}

                    {/* Email */}
                    <input ref={emailRef} type='email' placeholder='your email' required/>
                    <label className='frmSgnup'>Email</label>

                    {/* Address
                    <label className='frmSgnup'>Address</label>
                    <input ref={addressRef} type='text' placeholder='your address'/> */}

                    {/* Password */}
                    <input ref={passwordRef} className='form-control' type='password' placeholder='password' required />
                    <label className='frmSgnup' style={{textAlign:'left'}}>Password</label>
                  
                    <div className='hrCntr'>
                        <ThemeProvider theme ={theme}>
                            <Button onClick={handleSignUp} variant='contained' color='primary' className={classes.margin}>Sign up</Button>
                        </ThemeProvider>
                    </div>
                    <h6 className='hrCntr'>Have account?<span onClick={()=>history.push('/')} className='register-link'> Sign in</span></h6>
                </form>
            </div>
        </div>
    )
}

export default SignUp
