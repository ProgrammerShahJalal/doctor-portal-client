import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const Banner = () => {
    const bannerBg = {
        background: `url(${bg})`,
    }

    const verticalCenter = {
        display: 'flex',
        alignItems: 'center',
        height: 450
    }
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ ...verticalCenter, textAlign: 'left' }}>
                    <Box>
                        <Typography variant='h4' sx={{ fontWeight: 500, my: 2 }}>
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography sx={{ fontWeight: 'light', mb: 2, fontSize: 15 }} variant="h6" component="div">
                            The Doctors Care Patient Portal is available to all Doctors Care patients. You can access the Doctors Care Patient Portal from any device with Internet.
                        </Typography>
                        <Button variant="contained">Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '450px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;