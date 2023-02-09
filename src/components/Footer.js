import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {





    return (

        <div class="container-fluid text-light mt-5 pt-5 footer">
            <div class="row px-xl-5 pt-5">
                <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="" class="text-decoration-none">
                        <h1 class="mb-4 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Parking</h1>
                    </a>
                    <p>A dhkjfhsdjf sdhf jshdfjlhsmdhf shdmsdhf mshdfjk sdkfsd fjsdmjfkl sjdfkjdslkfjksdjfksjd sd kds fkdjsfl.</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>Hehehe, LA, HAHA, UK, HCM City</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                    <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+9999999999</p>
                </div>
                <div class="col-lg-8 col-md-12">
                    <div class="row">
                        <div class="col-md-4 mb-5">
                            <h5 class="font-weight-bold text-light mb-4">Quick Links</h5>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                                <a class="text-light " ><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <h5 class="font-weight-bold text-light  mb-4">Quick Links</h5>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Home</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                                <a class="text-light  mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                                <a class="text-light  mb-2"  href="#"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                                <a class="text-light "><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <h5 class="font-weight-bold text-light  mb-4">Newsletter</h5>
                            <form action="">
                                <div class="form-group">
                                    <input style={{height:'30px', marginBottom:'20px'}} type="text" class="form-control border-0 py-4" placeholder="Your Name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input style={{height:'30px', marginBottom:'20px'}} type="email" class="form-control border-0 py-4" placeholder="Your Email"
                                        required="required" />
                                </div>
                                <div>
                                    <button class="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
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