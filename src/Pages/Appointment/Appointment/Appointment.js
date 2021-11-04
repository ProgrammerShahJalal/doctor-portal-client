import { Container } from '@mui/material';
import React from 'react';
import AppointmentHeader from '../../Home/AppointmentBanner/AppointmentHeader/AppointmentHeader';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Container sx={{ my: 5 }}>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </Container>
    );
};

export default Appointment;