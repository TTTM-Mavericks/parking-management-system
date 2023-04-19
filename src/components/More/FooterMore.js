import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import './More.css'
import { Button, Card, TextInput } from 'react-materialize'

function FooterMore() {
    return (
        <div style={{ backgroundColor: "#2dc98a", display: "flex", padding:"40px 20px" }}>
            <div style={{ marginLeft: "20px" }}>
                <a href="" style={{marginBottom:"200px"}}>
                    <h1 style={{color:"white"}}><span style={{ border: "2px solid red", padding: "10px 20px", color:"blue"}}>E</span>Parking</h1>
                </a>
                <p style={{color:"white", marginTop:"50px"}}>A place where you can place your car in!!!</p>
                <p style={{color:"white"}}><i></i>A place you can put your trust in!!!</p>
                <p style={{color:"white"}}><i></i>Contact Us in HCM City</p>
                <p style={{color:"white"}}><i></i>Our Phone Number is: 3-7-9-49-53</p>
            </div>
            <div style={{ marginLeft: "10%" }}>
                <div style={{ display: "flex", width:"100%" }}>
                    <div style={{width:"25%"}}>
                        <h5 style={{color:"white", fontWeight:"bold"}}>Quick Links</h5>
                        <div className='linking'  style={{marginTop:"50px"}}>
                            <a href="#">Home</a><br /><br />
                            <a href="#">Our Shop</a><br /><br />
                            <a href="#">Shop Detail</a><br /><br />
                            <a href="#">Shopping Cart</a><br /><br />
                            <a href="#">Checkout</a><br /><br />
                        </div>
                    </div>

                    <div style={{width:"25%", marginLeft:"5%"}}>
                        <h5 style={{color:"white", fontWeight:"bold"}}>Quick Links</h5>
                        <div className='linking' style={{marginTop:"50px"}}>
                            <a href="#">Home</a><br /><br />
                            <a href="#">Our Shop</a><br /><br />
                            <a href="#">Shop Detail</a><br /><br />
                            <a href="#">Shopping Cart</a><br /><br />
                            <a href="#">Checkout</a><br /><br />
                        </div>
                    </div>

                    <div style={{ width: "500px", marginLeft:"5%", marginTop:"70px" }}>
                        <form style={{marginRight:"-30px"}}>
                            <Card style={{ color: "white", borderRadius: "5%" }}>
                                <h5 style={{ color: "black" }}>Your Information</h5>
                                <TextInput label="Your Name" type="text" required="required" style={{ paddingLeft: "10px" }} />
                                <TextInput type="email" label="Your Email" required="required" />
                                <button  className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white", width:"120px" }}>Subscribe Now</button>
                            </Card>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterMore;