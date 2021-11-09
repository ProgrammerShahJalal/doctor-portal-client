import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        id: 'doc1',
        name: 'Fluoride Treatment',
        description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities.',
        img: fluoride
    },
    {
        id: 'doc2',
        name: 'Cavity Filling',
        description: 'Your dentist will numb the area and use a numbing gel before injecting a local anesthetic known as Lidocaine. You may feel a bit of a sting, but that is a reaction from the local anesthetic when it starts to block the nerve signals to stop the pain.',
        img: cavity
    },
    {
        id: 'doc3',
        name: 'Teeth Whitening',
        description: 'The quickest, most dramatic way to whiten is to get an in-office bleaching at a dentist is office. Using professional-strength hydrogen peroxide and special lights or lasers, your dentist can remove even deep stains in about an hour.Apr 4, 2018',
        img: whitening
    }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1, my: 15 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 2 }} variant="h6" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;