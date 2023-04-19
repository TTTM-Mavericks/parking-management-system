import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import './Complement.css'

const Footer = () => {
    return (
        <div class="container-fluid text-light mt-5 pt-5 footer">
            <div class="row px-xl-5 pt-5">
                <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="" class="text-decoration-none">
                        <h1 class="mb-4 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Parking</h1>
                    </a>
                    <p>A place where you can place your car in!!!</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>A place you can put your trust in!!!</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>Contact Us in HCM City</p>
                    <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>Our Phone Number is: 3-7-9-49-53</p>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                            <div class="col-md-4 mb-5 notresponsive">
                                <h5 class="font-weight-bold text-light mb-4">Quick Links</h5>
                                <div class="d-flex flex-column justify-content-start">
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Reservation</a>
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Slot Detail</a>
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Price Detail</a>

                                </div>
                            </div>
                            <div class="col-md-4 mb-5 notresponsive">
                                <h5 class="font-weight-bold text-light  mb-4">Quick Links</h5>
                                <div class="d-flex flex-column justify-content-start">
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>About Us</a>
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Our Vision</a>
                                    <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>

                                </div>
                            </div>
                            
                        <div class="col-md-4 mb-5">
                            <h5 class="font-weight-bold text-light  mb-4">Newsletter</h5>
                            <form action="">
                                <div class="form-group">
                                    <input style={{ height: '30px', marginBottom: '20px' }} type="text" class="form-control border-0 py-4" placeholder="Your Name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input style={{ height: '30px', marginBottom: '20px' }} type="email" class="form-control border-0 py-4" placeholder="Your Email"
                                        required="required" />
                                </div>
                                <div>
                                    <button style={{ width: '200px', height: '38px' }} class="btn btn-primary " type="submit">Subscribe Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
            </div>

        </div>
    );
}

export default Footer;