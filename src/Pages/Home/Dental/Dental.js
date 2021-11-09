import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import treatment from '../../../images/treatment.png'
import MuiButton from '../../../StyleComponent/MuiButton';

const Dental = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '75%' }} src={treatment} alt="" />
                </Grid>
                <Grid style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} item xs={12} md={6}>
                    <Typography variant="h4" gutterBottom component="div" sx={{ fontWeight: 600 }}>
                        Exceptional Dental Care, <br /> on Your Terms
                        <Typography variant="body1" gutterBottom component="div" sx={{ my: 5 }}>
                            Dental care is the maintenance of healthy teeth and may refer to: Oral hygiene, the practice of keeping the mouth and teeth clean in order to prevent dental disorders. Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery.

                        </Typography>
                        <Link to='/appointment' style={{ textDecoration: 'none' }}><MuiButton>Get Appointment</MuiButton></Link>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dental;