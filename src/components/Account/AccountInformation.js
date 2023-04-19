import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Table, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import BodyLink from './BodyLink';

function AccountInformation() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/account')
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
                                    First Name
                                </th>
                                <th data-field="name" style={{ textAlign: "center" }}>
                                    Last Name
                                </th>
                                <th data-field="email" style={{ textAlign: "center" }}>
                                    Email
                                </th>
                                <th data-field="company" style={{ textAlign: "center" }}>
                                    Phone
                                </th>
                                {/* <th data-field="gender" style={{ textAlign: "center" }}>
                                    Gender
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {history.map((booking) => (
                                <tr key={booking.id} >
                                    <td style={{ textAlign: "center" }}> {booking.firstName} </td>
                                    <td style={{ textAlign: "center" }}> {booking.lastName} </td>
                                    <td style={{ textAlign: "center" }}> {booking.email} </td>
                                    <td style={{ textAlign: "center" }}> {booking.phone} </td>
                                    {/* <td style={{ textAlign: "center" }}> {booking.gender} </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <NavLink to="/profilesetting"><Button style={{ marginBottom: "10px", marginTop: "10px", marginLeft: "45%", backgroundColor: "#2DC98A" }}>Changes</Button></NavLink>
                </Container>
            </div>
        </div>
    )
}

export default AccountInformation;