import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import Slider from "./Slider"
import Header from "./Header";
import Footer from "./Footer";
const Reservation = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <div class="row col-lg-6 step-reservation">
                <div class="col-lg-3 rounded-circle">sdfsdf</div>
                <div class="col-lg-3 rounded-circle">sdfsdfsdf</div>
                <div class="col-lg-3 rounded-circle">sdfsdfsdf</div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )

}
export default Reservation;