import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Dental from '../Dental/Dental';
import InfoCard from '../InfoCard/InfoCard';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCard></InfoCard>
            <Services></Services>
            <Dental></Dental>
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;