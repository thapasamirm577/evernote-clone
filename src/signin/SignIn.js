import { Button } from '@material-ui/core'
import React, { useRef } from 'react'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { useHistory } from 'react-router';
import { auth } from '../config/fbconfig';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(0.1),
    },
}));

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

const SignIn = () => {
    const history = useHistory();
    const classes = useStyles();

    //getting value from input-field
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,

        ).then(user => {
            console.log(user);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div>
            <div className='sign-inContainer txtsin'>

                <div className='sgnBefore'></div>
                <div className='nameSgn'>Sign in</div>
                <form action=''>
                    {/* email for singnin */}
                    <input ref={emailRef} type='email' placeholder='email' required />
                    <label htmlFor='email'>email</label>

                     {/* password */}
                    <input ref={passwordRef} className='form-control' type='password' placeholder='password' required />
                    <label htmlFor='password'>password</label>

                    <div className='hrCntr'>
                        <ThemeProvider theme={theme}>
                            <Button onClick={handleSignIn} variant='contained' color='primary' className={classes.margin}>Sign in</Button>
                        </ThemeProvider>
                    </div>

                    <h6>Not registered? <span onClick={() => history.push('/sign-up')} className='register-link'> Sign up</span></h6>
                </form>
            </div>
        </div>
    )
}

export default SignIn
