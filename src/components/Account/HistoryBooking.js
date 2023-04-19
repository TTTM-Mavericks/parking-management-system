import React, { useState, useEffect } from 'react';
import { Container, Table } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import BodyLink from './BodyLink';
import 'bootstrap/dist/css/bootstrap.min.css';


function PastBooking() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/past')
            .then((response) => response.json())
            .then((bookingData) => {
                setHistory(bookingData);
                console.log(bookingData);
            })
    }, [])
    return (
        <div>
            <div style={{ display: "flex" }}>

                <BodyLink />
                <Container>
                    <div style={{ borderBottom: "1px solid black", display: "flex", marginTop: "5%" }}>
                        <img src={'../assets/img/logo.png'} style={{ width: "150px", height: "40px", marginLeft: "30px", marginBottom: "10px" }}></img>
                        <NavLink className='logo' to='/login' style={{ color: "black", marginLeft: "70%", textDecoration: "none" }}><i class="bi bi-bookmark-fill"></i> Log out</NavLink>

                    </div>
                    <Table striped className='table-stripped' style={{ marginTop: "5%" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#263544", color: "white" }}>
                                <th data-field="id" style={{ textAlign: "center" }}>
                                    Start Date
                                </th>
                                <th data-field="name" style={{ textAlign: "center" }}>
                                    End Date
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Start Time
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    End Time
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Vehicle Type
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Building
                                </th>
                                <th data-field="price" style={{ textAlign: "center" }}>
                                    Slot
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((booking) => (
                                <tr key={booking.id} >
                                    <td style={{ textAlign: "center" }}> {booking.startDate} </td>
                                    <td style={{ textAlign: "center" }}> {booking.endDate} </td>
                                    <td style={{ textAlign: "center" }}> {booking.startTime} </td>
                                    <td style={{ textAlign: "center" }}> {booking.endTime} </td>
                                    <td style={{ textAlign: "center" }}> {booking.type_Of_Vehicle} </td>
                                    <td style={{ textAlign: "center" }}> {booking.id_Building} </td>
                                    <td style={{ textAlign: "center" }}> {booking.id_C_Slot} </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
    )
}

export default PastBooking;