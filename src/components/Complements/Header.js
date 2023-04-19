import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faBell } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './Complement.css'
const Header = (props) => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    const [role, setRole] = useState(sessionStorage.getItem("role"));
    const [idUser, setIdUser] = useState(sessionStorage.getItem("id"));
    const [activeLink, setActiveLink] = useState(null);

    console.log(props.data)
    const logout = () => {
        sessionStorage.removeItem('username')
        window.location.href = '/login';
    }


    return (
        <div className="header">
            <div className="headernotres">
                <div className="logo">
                    <img src={'../assets/img/logo.png'}></img>
                </div>
                <div class="nav justify-content-end nav-custom">

                    <li class={activeLink === 1 ? 'header-active nav-item' : null} onClick={() => setActiveLink(1)}>
                        <Link to={'/'} > <a class="nav-link" href="#">Home</a></Link>
                    </li>
                    {/* <li class={activeLink === 2 ? 'header-active nav-item' : null} onClick={() => setActiveLink(2)}>
                        <Link to={'/Reservation'}> <a class="nav-link" href="#">Reservation</a></Link>
                    </li> */}
                    <li class={activeLink === 3 ? 'header-active nav-item' : null} onClick={() => setActiveLink(3)}>
                        <Link to={'/Service'}> <a class="nav-link" href="#">Services</a></Link>
                    </li>
                    <li class={activeLink === 4 ? 'header-active nav-item' : null} onClick={() => setActiveLink(4)}>
                        <Link to={'/Price'}><a class="nav-link" href="#">Price</a></Link>
                    </li>
                    <li class={activeLink === 5 ? 'header-active nav-item' : null} onClick={() => setActiveLink(5)}>
                        <Link to={'/News'}><a class="nav-link" href="#">News</a></Link>
                    </li>
                    <Nav class={activeLink === 6 ? 'header-active nav-item' : null} onClick={() => setActiveLink(6)}>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Our Vision</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Nav class="nav-item">
                        <NavDropdown title={<FontAwesomeIcon icon={faBell}></FontAwesomeIcon>}>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    {
                        props.data === null || props.data === ''
                            ? (<>

                                <li class="nav-item not-hover taking" style={{ paddingTop: '10px', textDecoration: 'none' }}>
                                    <Link to={'/login'}><a className="loginres">Login</a></Link>
                                </li>

                            </>
                            )
                            : (
                                <Nav class="nav-item">
                                    <NavDropdown title={<FontAwesomeIcon icon={faUser}></FontAwesomeIcon>}>
                                        <NavDropdown.Item>
                                            <Link to={role === 'C' ? '/CustomerPage' : '/ResidentPage'}>My profile</Link>

                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item ><a onClick={logout} type="submit">Log out</a></NavDropdown.Item>

                                    </NavDropdown>
                                </Nav>
                            )
                    }
                </div>

            </div>
            <Nav className="nav-item-responsive">
                <NavDropdown className="icon-nav-item-responsive" title={<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>}>
                    <NavDropdown.Item style={{ width: '350px', marginLeft: '10' }}><Link to={'/'}> <a class="nav-link" href="#">Home</a></Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/Reservation'}> <a class="nav-link" href="#">Reservation</a></Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/Service'}><a class="nav-link" href="#">Services</a></Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/Price'}><a class="nav-link" href="#">Price</a></Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to={'/News'}><a class="nav-link" href="#">News</a></Link></NavDropdown.Item>
                    <NavDropdown.Item><a class="nav-link" href="#">Location</a></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><a onClick={logout} type="submit">Log out</a></NavDropdown.Item>
                </NavDropdown>
                <div className="logo">
                    <img src={'../assets/img/logo.png'}></img>
                </div>
            </Nav>
        </div>
    );
}

export default Header;