import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import login from '../../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, error, isLoading } = useFirebase();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);


        e.preventDefault();
    }
    return (

        <Container sx={{ mt: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            name='password'
                            onChange={handleOnChange}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} type='submit' variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">
                        <AlertTitle>Congratulations</AlertTitle>
                        User logged in — <strong>successfully!</strong>
                    </Alert>}
                    {error && <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        {error}
                    </Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;