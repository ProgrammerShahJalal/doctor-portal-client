import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://polar-falls-67924.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ textAlign: 'center', textWeight: 600 }} variant="h3">Our Doctors {doctors.length}</Typography>
            <Grid container spacing={2}>
                {
                    doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                }
            </Grid>
        </Container>
    );
};

export default Doctors;