import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
import React, { useEffect } from 'react'
import FooterMore from './FooterMore';
import './More.css'
import { Slider, Caption, Slide, Row, Col, Icon, CardTitle, Card, Container } from 'react-materialize';
import Header from '../Complements/Header';
import AOS from 'aos';
import 'aos/dist/aos.css'

function ContactUs() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);
    return (

        <div>
            <Header />
            <div className='row' style={{ marginTop: "10%" }} data-aos="fade-up" data-aos-anchor-placement="top-center">
                <div className='col s6'>
                    <img src='https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/img-featur-copyright.jpg'></img>
                </div>
                <div className='col s6'>
                    <h2 style={{ fontSize: "35px", lineHeight: "1.3", paddingBottom: "0,3em", color: "#21303e", textAlign: "left", width: "320px", fontWeight: "bold", background: "linear-gradient(-21deg,#14be3d 0%,#16d445 100%);" }}>We Make Airport Parking Easy</h2>
                    <p style={{ marginBottom: "1em", marginTop: "4em", fontSize: "20px", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", color: "#4a697c" }}>Parking lots tend to be sources of water pollution because of their extensive impervious surfaces. Most existing lots have limited or no facilities to control runoff. Many areas today also require minimum landscaping in parking lots to provide.</p>
                    <p style={{ marginBottom: "1em", marginTop: "4em", fontSize: "20px", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", color: "#4a697c" }}>Many municipalities require a minimum number of parking spaces, depending on the floor area in a store or the number of bedrooms in an apartment complex. In the US, each state's Department of Transportation sets the ratio.</p>
                    <p style={{ color: "#4a697c", fontFamily: "Brush Script MT, sans-serif", opacity: ".15", fontSize: "50px", marginTop: "-60px", marginBottom: "0", marginLeft: "300px" }}>
                        CarParkingPage
                    </p>
                </div>
            </div>

            <div className='row' style={{ marginTop: "5%" }} data-aos="fade-up" data-aos-anchor-placement="top-center">
                <div className='col s5'>
                    <h2 style={{ fontSize: "35px", lineHeight: "1.3", paddingBottom: "0,3em", color: "#21303e", textAlign: "left", width: "320px", fontWeight: "bold", background: "linear-gradient(-21deg,#14be3d 0%,#16d445 100%);" }}>Our History</h2>
                    <p style={{ marginBottom: "1em", marginTop: "4em", fontSize: "20px", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", color: "#4a697c" }}>The effect of large-scale parking in-city has long been contentious. Elimination of historic structures for garages or lots led to historical preservation movements in many cities. The acreage devoted to parking is widely seen as disrupting a walkable urban fabric, maximizing convenience to each individual building.</p>
                    <p style={{ color: "#4a697c", fontFamily: "Brush Script MT, sans-serif", opacity: ".15", fontSize: "50px", marginTop: "-40px", marginBottom: "0", marginLeft: "230px" }}>
                        CarParkingPage
                    </p>
                </div>
                <Card className='col s6' style={{ marginLeft: "7%" }} >
                    <h4 style={{ fontSize: "35px", lineHeight: "1.3", paddingBottom: "0,3em", color: "#21303e", textAlign: "left", width: "320px", fontWeight: "bold", background: "linear-gradient(-21deg,#14be3d 0%,#16d445 100%);" }}>2002-2023</h4>
                    <p style={{ marginBottom: "1em", marginTop: "4em", fontSize: "20px", maxWidth: "100%", paddingBottom: "0", fontFamily: "Mont,sans-serif", marginBlockStart: "1em", marginBlockEnd: "1em", marginInlineStart: "0px", marginInlineEnd: "0px", color: "#4a697c" }}>Aliquam commodo interdum viverra. Sed venenatis faucibus tellus, sit amet laoreet ligula ultricies a. Maecenas cursus auctor nulla, nec scelerisque est laoreet a quis. Ut gravida rutrum aliquam. Curabitur id orci maximus, ornare metus ac, tristique risus.</p>
                    <img style={{ borderRadius: "5px", width: "100%" }} src='https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/img-step1-copyright.jpg'></img>
                </Card>
            </div>

            <div className='row' style={{ backgroundColor: "#2dc98a" }} >
                <h2 style={{ textAlign: "center", marginTop: "5%", marginBottom: "6%", color: "white", fontWeight: "bold" }} data-aos="fade-up" data-aos-anchor-placement="top-center">Our Investor</h2>
                <Card className='col s4 onhover' style={{ marginRight: "50px", marginLeft: "2%", height: "350px" }} data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <img style={{ marginLeft: "30%" }} src='https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/invest2-1.png'></img>
                    <h4 style={{ textAlign: "center" }}>Cube LLC</h4>
                    <p style={{ textAlign: 'center', color: "black" }}>Parking lots specifically for bicycles are becoming more prevalent in many countries. These may include bicycle parking racks and locks and modern.</p>
                </Card>
                <Card className='col s4 onhover' style={{ marginRight: "50px", height: "350px" }} data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <img style={{ marginLeft: "30%" }} src='https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/invest3-1.png'></img>
                    <h4 style={{ textAlign: "center" }}>Car Ventures</h4>
                    <p style={{ textAlign: "center", color: "black" }}>Parking lots specifically for bicycles are becoming more prevalent in many countries. These may include bicycle parking racks and locks and modern.</p>
                </Card>
                <Card className='col s4 onhover' style={{ height: "350px", marginRight: "5%" }} data-aos="fade-up" data-aos-anchor-placement="top-center">
                    <img style={{ marginLeft: "30%" }} src='https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/invest1-1.png'></img>
                    <h4 style={{ textAlign: "center" }}>Globe Corporate</h4>
                    <p style={{ textAlign: "center", color: "black" }}>Parking lots specifically for bicycles are becoming more prevalent in many countries. These may include bicycle parking racks and locks and modern.</p>
                </Card>
                <p style={{ textAlign: "center", color: "#4a697c", fontFamily: "Brush Script MT, sans-serif", opacity: ".15", fontSize: "50px", marginTop: "-30px", marginBottom: "0", paddingBottom: "50px" }}>
                    CarParkingPage
                </p>
            </div>
            <div style={{ display: "flex", marginTop: "100px" }} className='row' data-aos="fade-up" data-aos-anchor-placement="top-center">
                <Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg" reveal waves="light" />}
                            reveal={<p>The more convenient that can help you to find the car parking area</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Advantages"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://www.rac.co.uk/drive/images/uploads/content/Bay_parking_guide_reverse.jpg" reveal waves="light" />}
                            reveal={<p>The service can make you feeling good to parking</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Service"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://www.rac.co.uk/drive/images/uploads/content/Bay_parking_guide_driving_test.jpg" reveal waves="light" />}
                            reveal={<p>Make you can easily to finding the parking with one click</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Convenient"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://images.jdmagicbox.com/comp/def_content/car-parking-management/cars-parked-in-parking-lot-car-parking-management-1-0stjw.jpg?clr=382e2e&temp=1" reveal waves="light" />}
                            reveal={<p>Can have more than 2000 place for parking in a times</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Huge Parking"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{ display: "flex", marginTop: "40px" }} className='row'>
                <Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_bay_parking_guide.jpg" reveal waves="light" />}
                            reveal={<p>The more convenient that can help you to find the car parking area</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Advantages"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://www.rac.co.uk/drive/images/uploads/content/Bay_parking_guide_reverse.jpg" reveal waves="light" />}
                            reveal={<p>The service can make you feeling good to parking</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Service"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://www.rac.co.uk/drive/images/uploads/content/Bay_parking_guide_driving_test.jpg" reveal waves="light" />}
                            reveal={<p>Make you can easily to finding the parking with one click</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Convenient"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row><Row className='col s3 onhover'>
                    <Col>
                        <Card
                            closeIcon={<Icon>close</Icon>}
                            header={<CardTitle image="https://images.jdmagicbox.com/comp/def_content/car-parking-management/cars-parked-in-parking-lot-car-parking-management-1-0stjw.jpg?clr=382e2e&temp=1" reveal waves="light" />}
                            reveal={<p>Can have more than 2000 place for parking in a times</p>}
                            revealIcon={<Icon>more_vert</Icon>}
                            title="Car Huge Parking"
                        >
                            <button className='btn' type="submit" style={{ backgroundColor: "#2dc98a", borderRadius: "5%", border: "none", color: "white" }}> Join Us</button>

                        </Card>
                    </Col>
                </Row>
            </div>


            <FooterMore />
        </div>
    );
}

export default ContactUs;