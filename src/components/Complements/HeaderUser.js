import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import '../Admin/Admin.css'

const UserHeader = (nameOfpage) => {

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

        <div className="admin-header" style={{marginTop:'30px'}}>

            <div className="logo" style={{marginLeft:'20%'}}>
                <img src={'../assets/img/logo.png'}></img>
            </div>
            <ul class="nav justify-content-end nav-custom  ">

                
                <li class="nav-item not-hover" style={{ paddingTop: '5px', textDecoration: 'none' }}>



                </li>
            </ul>

        </div>


    );
}

export default UserHeader;