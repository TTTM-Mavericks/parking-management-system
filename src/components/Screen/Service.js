import React, { useState, useEffect, useRef, useCallback } from "react";
import Slider from "../Complements/Slider"
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faCar, faMoneyBill, faShield, faUserShield, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { url_api } from "../../API/api";
import './Screen.css'



const URL = url_api + "/updatemoney/findAllMoney";

const Service = () => {
    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [obj, setObj] = useState([]);

    return (
        <div className="service-page body-reservation">
            <Header data={username}></Header>
            <Slider></Slider>
            <section>
                <div class="row" style={{ marginBottom: '20px', marginTop: '20px' }}>
                    <h2 class="section-heading">Our Services</h2>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <FontAwesomeIcon icon={faCalendarDay}></FontAwesomeIcon>
                            </div>
                            <h3>Book quickly</h3>
                            <p>
                                With this system, you can easily and quickly book yourself an available slot.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
                            </div>
                            <h3>Many types of vehicles</h3>
                            <p>
                                You can book a slot with any type of transportation you have.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon>
                            </div>
                            <h3>Reasonable prices</h3>
                            <p>
                                Prices will be based on the market, but will be adjusted appropriately to meet the needs of users.
                            </p>
                        </div>
                    </div>


                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <FontAwesomeIcon icon={faShield}></FontAwesomeIcon>
                            </div>
                            <h3>Safe</h3>
                            <p>
                                Your vehicle will be kept safe and secure, with a security system and cameras to give you peace of mind.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <FontAwesomeIcon icon={faUserShield}></FontAwesomeIcon>
                            </div>
                            <h3>Security</h3>
                            <p>
                                Your personal information and vehicle will be stored completely securely.
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <div class="icon-wrapper">
                                <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                            </div>
                            <h3>Payment</h3>
                            <p>
                                Payment via bank transfer and cash will make it easy for you to pay for the seat you have booked.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="footerservice">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Service;