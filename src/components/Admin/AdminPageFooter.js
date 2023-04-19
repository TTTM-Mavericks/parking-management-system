import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Admin.css'

const AdminFooter = () => {





    return (

        <div class="container-fluid text-light footer" style={{textAlign:'center', marginTop:'100px'}}>
            
            <span>YourParkingSpace © 2023</span>

        </div>






    );
}

export default AdminFooter;