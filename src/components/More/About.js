import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import React, { useEffect } from 'react'
import { Row, Col, CardTitle, Card } from 'react-materialize';
import Header from '../Complements/Header';
import FooterMore from './FooterMore';
import './More.css'
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (
        <div>
            <Header/>
            <div className='row' style={{ display: "flex", flexWrap: "wrap", marginLeft: "5px", marginRight: "50px", marginTop:"5%" }}>
                <div className='col s6' >
                    <h1 style={{ color: "#2dc98a", marginBottom: "0", lineHeight: "1.047em", fontFamily: "Mont,sans-serif", fontWeight: "900", fontSize: "2.125rem" }}>Parking Your Way</h1>
                    <p style={{ fontSize: "2.125rem", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", marginTop: "25px", color:"black" }}>Our mission is to change the way the world parks</p>
                    <p style={{ color: "#4a697c", fontFamily: "Brush Script MT, sans-serif", opacity: ".15", fontSize: "100px", marginTop: "-70px", marginBottom: "0" }}>
                        CarParkingPage
                    </p>
                </div>


                <div className='col s5' style={{ borderLeft: "2px solid #2dc98a", marginTop: "4.5%" }}>
                    <p style={{ marginBottom: "1em", marginTop: "4em", fontSize: "20px", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", color: "#4a697c" }}>We plan to do this by creating more accessible parking through the digitalisation of parking assets.</p>
                    <p style={{ marginBottom: "1em", marginTop: "4em", fontSize: "20px", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", color: "#4a697c" }}>
                        Journeys become easier and we become more connected, the more accessible our parking options are. We’re building a digital parking network to move the UK more conveniently, more affordably, and more sustainably.
                    </p>
                </div>
            </div>
            <div className='container'>
                <h2 style={{ color: "#2dc98a", marginBottom: "0", lineHeight: "1.047em", fontFamily: "Mont,sans-serif", fontWeight: "900", fontSize: "2.125rem", textAlign: "center", marginTop: "20%" }}>Our Vision</h2>
                <p style={{ fontSize: "2.125rem", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", textAlign: "center", color:"black" }}>A world where parking is seamlessly integrated into our travels through the use of smart technology.
                </p>
                <p style={{ color: "#4a697c", fontFamily: "Brush Script MT, sans-serif", opacity: ".15", fontSize: "100px", marginTop: "-40px", marginBottom: "0", marginLeft: "500px" }}>
                    CarParkingPage
                </p>
            </div>

            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
                <img src='https://www.yourparkingspace.co.uk/_nuxt/img/about-video-banner.16c08a8.jpg' style={{ width: "100%" }}></img>
            </div>

            <div style={{ display: "flex", marginTop:"100px" }} className='row' data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Row className='col s3'>
                    <Col>
                        <Card
                            // closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg" reveal waves="light" />}
                            reveal={<p>The more convenient that can help you to find the car parking area</p>}
                            // revealIcon={<Icon>more_vert</Icon>}
                            title="Car Advantages"
                        >
                        <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3'>
                    <Col>
                        <Card
                            // closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://www.rac.co.uk/drive/images/uploads/content/Bay_parking_guide_reverse.jpg" reveal waves="light" />}
                            reveal={<p>The service can make you feeling good to parking</p>}
                            // revealIcon={<Icon>more_vert</Icon>}
                            title="Car Service"
                        >
                        <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>
                            
                        </Card>
                    </Col>
                </Row><Row className='col s3'>
                    <Col>
                        <Card
                            // closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://www.rac.co.uk/drive/images/uploads/content/Bay_parking_guide_driving_test.jpg" reveal waves="light" />}
                            reveal={<p>Make you can easily to finding the parking with one click</p>}
                            // revealIcon={<Icon>more_vert</Icon>}
                            title="Car Convenient"
                        >
                        <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>
                            
                        </Card>
                    </Col>
                </Row><Row className='col s3'>
                    <Col>
                        <Card
                            // closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://images.jdmagicbox.com/comp/def_content/car-parking-management/cars-parked-in-parking-lot-car-parking-management-1-0stjw.jpg?clr=382e2e&temp=1" reveal waves="light" />}
                            reveal={<p>Can have more than 2000 place for parking in a times</p>}
                            // revealIcon={<Icon>more_vert</Icon>}
                            title="Car Huge Parking"
                        >
                        <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>
                            
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='row' style={{ marginBottom: "20%", marginTop: "5%", marginLeft: "100px" }} data-aos="fade-up" data-aos-anchor-placement="top-center">

                <div className='col s5' style={{ marginTop: "50px", position: "absolute" }}>
                    <img src='https://www.yourparkingspace.co.uk/_nuxt/img/meet-the-team-cta.d6c459c.jpg'></img>
                </div>

                <div className='col s6' style={{ backgroundColor: "#2dc98bbe", marginLeft: "23%", height: "571px", width: "800px" }}>
                    <div style={{ marginLeft: "100px", marginLeft: "200px", marginTop: "13%" }}>
                        <img src='https://www.yourparkingspace.co.uk/_nuxt/img/quotes.f6f017c.svg'></img>
                        <p style={{ paddingTop: "23px", fontSize: "2rem", lineHeight: "1.3", fontFamily: "32px Mont,sans-serif", padding: "23px 0 30px", textAlign: "left", width: "440px", fontWeight: "600", marginTop: "0" }}>
                            Behind our technology is an incredible team who have a real passion for what we are creating at YourParkingSpace.
                        </p>
                        <figcaption style={{ color: "#4a697c", fontFamily: "Brush Script MT, sans-serif", opacity: ".5", fontSize: "60px", marginTop: "-70px", marginBottom: "0", marginLeft: "190px" }}>Team 4 Project</figcaption>
                        <button className='btn' type="submit" style={{ backgroundColor: "#101921", borderRadius: "5%", border: "none", color: "white", width:"100px" }}> Join Us</button>
                    </div>
                </div>
            </div>
            <FooterMore />
        </div>
    );
}

export default About;