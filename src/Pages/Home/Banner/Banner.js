import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import MuiButton from '../../../StyleComponent/MuiButton';


const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
    }

    return (
        <div style={{ minHeight: 500, height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                        <Box>
                            <Typography variant='h4' sx={{ fontWeight: 500, my: 2 }}>
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography sx={{ fontWeight: 'light', mb: 2, fontSize: 15 }} variant="h6" component="div">
                                The Doctors Care Patient Portal is available to all Doctors Care patients. You can access the Doctors Care Patient Portal from any device with Internet.
                            </Typography>
                            <Link to='/appointment' style={{ textDecoration: 'none' }}><MuiButton>Get Appointment</MuiButton></Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <img style={{ width: '450px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Banner;