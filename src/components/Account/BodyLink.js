import React from 'react';
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faAppleAlt, faAddressCard, faAnchorCircleCheck, fa7, fa6, faAdd } from '@fortawesome/free-solid-svg-icons'
function BodyLink() {
    let className = 'active';
    if(className === 'active') {
        className += 'fa-beat-fade';
    }
    return (
        <ul className="body-link">
            <div style={{ display: "flex", color: "white", fontSize: "20px", borderBottom: "1px solid #00000047", marginBottom: "30px", paddingBottom: "30px", width: "100%", marginTop: "20px", fontWeight: "bold" }}>
                <FontAwesomeIcon icon={faCoffee} beatFade /> <h5 style={{ marginLeft: "20px" }}>User Page</h5>
            </div>
            <h6 style={{ color: "#2dc98a", fontWeight: "bolder", textAlign: "left", marginBottom: "30px" }}>Account</h6>
            <NavLink to='/account'><li><FontAwesomeIcon icon={faAdd} style={{ marginRight: "20px" }} />Account</li></NavLink>
            <NavLink to='/profilesetting'><li><FontAwesomeIcon icon={fa6} style={{ marginRight: "20px" }} />Profile Setting</li></NavLink>

            <h6 style={{ color: "#2dc98a", fontWeight: "bolder", textAlign: "left", marginBottom: "30px" }}>Setting</h6>
            <NavLink to='/allbooking' className={className}><li><FontAwesomeIcon icon={faAppleAlt} style={{ marginRight: "20px" }} />All Booking</li></NavLink>
            <NavLink to='/pastbooking'><li> <FontAwesomeIcon icon={faAddressCard} style={{ marginRight: "20px" }} />Past Booking</li></NavLink>
            <NavLink to='/completedbooking'><li> <FontAwesomeIcon icon={faAnchorCircleCheck} style={{ marginRight: "20px" }} />Completed Booking</li></NavLink>
            <NavLink to='/cancelledbooking'> <li><FontAwesomeIcon icon={fa7} style={{ marginRight: "20px" }} />Cancelled Booking </li></NavLink>
        </ul>
    )
}

export default BodyLink;