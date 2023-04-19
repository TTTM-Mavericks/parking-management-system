import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Admin.css'
const AdminHeader = (nameOfpage) => {

    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    const [data, setData] = useState(nameOfpage)

    const logout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        window.location.href = '/AdminLogin';
    }

    return (

        <div className="admin-header">

            <div className="logo">
                <img src={'../assets/img/logo.png'}></img>
            </div>
            <ul class="nav justify-content-end nav-custom  ">

                <li class="nav-item not-hover">
                    <span  > <FontAwesomeIcon icon={faUser} style={{ paddingTop: '10px', color: 'black' }} />{displayusername}</span>
                </li>
                <li class="nav-item not-hover" style={{ paddingTop: '5px', textDecoration: 'none' }}>

                    <a href="#" style={{ color: 'white' }} onClick={logout}>Log out</a>

                </li>
            </ul>

        </div>


    );
}

export default AdminHeader;