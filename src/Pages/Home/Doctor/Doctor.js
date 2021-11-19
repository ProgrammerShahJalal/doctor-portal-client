import { Grid, Typography } from '@mui/material';
import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, image } = doctor;
    return (
        <Grid sx={{ my: 2 }} item xs={12} sm={6} md={4}>
            <img style={{ width: '300px', height: '300px', textAlign: 'center' }} src={`data:image/jpeg;base64,${image}`} alt="" />
            <Typography sx={{ textAlign: 'center' }} variant="h4"> {name}</Typography>
        </Grid>

    );
};

export default Doctor;