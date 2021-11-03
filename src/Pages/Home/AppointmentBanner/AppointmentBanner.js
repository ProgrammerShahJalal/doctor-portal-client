import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const AppointmentBanner = () => {
    const appointmentBg = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(45, 58, 74, 0.9)',
        backgroundBlendMode: 'darken, luminosity',
        marginTop: 150
    }
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -100 }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography sx={{ fontWeight: 500, color: 'warning.main' }} variant="h6" component="div">
                            Appointment
                        </Typography>
                        <Typography sx={{ fontWeight: 500, my: 2, color: 'white' }} variant="h4" component="div">
                            Make an Appointment Today
                        </Typography>
                        <Typography sx={{ mb: 2, color: 'white', fontWeight: 'light', fontSize: 15 }} variant="h6" component="div">
                            Welcome to Patient Portal, Your Medical Home on the Web. With Patient Portal, <br /> you can connect with your doctor through a convenient, safe and secure.
                        </Typography>
                        <Button variant="contained">Lear More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box >
    );
};

export default AppointmentBanner;