import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { infoData } from '../../../data/data';
import AOS from 'aos';
import 'aos/dist/aos.css'

const InfoCard = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container>
            <Grid container spacing={3}>
                {
                    infoData.map(({ Icon, title, description, background }) => <Grid key={title} item xs={12} sm={12} md={4} lg={4}>
                        <Paper data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" variant="outlined" sx={{ display: 'flex', justifyContent: 'space-between', background: background, color: '#fff', p: 3 }}>
                            <Icon sx={{ fontSize: 60 }} />
                            <div>
                                <Typography variant="body1">{title}</Typography>
                                <Typography variant="subtitle1">{description}</Typography>
                            </div>
                        </Paper>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default InfoCard;