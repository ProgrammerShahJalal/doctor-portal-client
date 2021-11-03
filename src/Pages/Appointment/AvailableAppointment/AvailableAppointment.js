import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h2>Available Appointment on {date.toDateString()}</h2>
        </div>
    );
};

export default AvailableAppointment;