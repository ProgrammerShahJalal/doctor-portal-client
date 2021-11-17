import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Appointments = ({ date }) => {
    const { user, token } = useAuth();
    const [appointment, setAppointments] = useState([]);
    console.log(user.email)
    useEffect(() => {
        const url = `https://polar-falls-67924.herokuapp.com/appointments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [date, user.email, token])

    return (
        <div>
            <Typography sx={{ color: 'warning.main', textAlign: 'right' }} variant="h6" gutterBottom component="div">
                Date: {date.toLocaleDateString()}
            </Typography>
            <h2>Appointments: {appointment.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Service</TableCell>
                            <TableCell align="right">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointment.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.patientName}
                                </TableCell>
                                <TableCell align="right">{row.time}</TableCell>
                                <TableCell align="right">{row.serviceName}</TableCell>
                                <TableCell align="right">{row.payment ?
                                    'Paid' :
                                    <Link to={`/dashboard/payment/${row._id}`}><button>Pay</button></Link>
                                }</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
};

export default Appointments;