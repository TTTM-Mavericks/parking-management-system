import React, { useState, useEffect, useRef, useCallback } from "react";
import Slider from "../Complements/Slider"
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import { Card } from "react-bootstrap";
const News = () => {
    const [username, setUsername] = useState(sessionStorage.getItem('username'));

    
    return (
        <div className="body-reservation">
            <Header data={username}></Header>
            <Slider></Slider>

            <div className="row" style={{ marginTop: "5%", width: '80%', marginLeft: '10%', marginRight: '10%' }}>
                <div class="row" style={{ marginBottom: '20px', marginTop: '-30px' }}>
                    <h2 class="section-heading">News</h2>
                </div>
                <div className="col s6 carimg">
                    <img src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/img-featur-copyright.jpg"></img>
                </div>
                <div className="col s6">
                    <h2
                        style={{
                            fontSize: "35px",
                            lineHeight: "1.3",
                            paddingBottom: "0,3em",
                            color: "#21303e",
                            textAlign: "left",
                            width: "320px",
                            fontWeight: "bold",
                            background: "linear-gradient(-21deg,#14be3d 0%,#16d445 100%);",
                        }}
                    >
                        We Make Slot Parking Easy
                    </h2>
                    <p
                        style={{
                            marginBottom: "1em",
                            marginTop: "4em",
                            fontSize: "20px",
                            maxWidth: "100%",
                            paddingBottom: "0",
                            fontFamily: "Mont,sans-serif",
                            marginBlockStart: "1em",
                            marginBlockEnd: "1em",
                            marginInlineStart: "0px",
                            marginInlineEnd: "0px",
                            color: "#4a697c",
                        }}
                    >
                        Parking lots tend to be sources of water pollution because of their
                        extensive impervious surfaces. Most existing lots have limited or no
                        facilities to control runoff. Many areas today also require minimum
                        landscaping in parking lots to provide.
                    </p>
                    <p
                        style={{
                            marginBottom: "1em",
                            marginTop: "4em",
                            fontSize: "20px",
                            maxWidth: "100%",
                            paddingBottom: "0",
                            fontFamily: "Mont,sans-serif",
                            marginBlockStart: "1em",
                            marginBlockEnd: "1em",
                            marginInlineStart: "0px",
                            marginInlineEnd: "0px",
                            color: "#4a697c",
                        }}
                    >
                        Many municipalities require a minimum number of parking spaces,
                        depending on the floor area in a store or the number of bedrooms in
                        an apartment complex. In the US, each state's Department of
                        Transportation sets the ratio.
                    </p>
                    <p
                        style={{
                            color: "#4a697c",
                            fontFamily: "Brush Script MT, sans-serif",
                            opacity: ".15",
                            fontSize: "50px",
                            marginTop: "-60px",
                            marginBottom: "0",
                            marginLeft: "300px",
                        }}
                        className="signature"
                    >
                        CarParkingPage
                    </p>
                </div>
            </div>

            <div className="row" style={{ marginTop: "5%", marginTop: "5%", width: '80%', marginLeft: '10%', marginRight: '10%' }}>
                <div className="col s5">
                    <h2
                        style={{
                            fontSize: "35px",
                            lineHeight: "1.3",
                            paddingBottom: "0,3em",
                            color: "#21303e",
                            textAlign: "left",
                            width: "320px",
                            fontWeight: "bold",
                            background: "linear-gradient(-21deg,#14be3d 0%,#16d445 100%);",
                        }}
                    >
                        Our History
                    </h2>
                    <p
                        style={{
                            marginBottom: "1em",
                            marginTop: "4em",
                            fontSize: "20px",
                            maxWidth: "100%",
                            paddingBottom: "0",
                            fontFamily: "Mont,sans-serif",
                            marginBlockStart: "1em",
                            marginBlockEnd: "1em",
                            marginInlineStart: "0px",
                            marginInlineEnd: "0px",
                            color: "#4a697c",
                        }}
                    >
                        The effect of large-scale parking in-city has long been contentious.
                        Elimination of historic structures for garages or lots led to
                        historical preservation movements in many cities. The acreage
                        devoted to parking is widely seen as disrupting a walkable urban
                        fabric, maximizing convenience to each individual building.
                    </p>
                    <p
                        style={{
                            color: "#4a697c",
                            fontFamily: "Brush Script MT, sans-serif",
                            opacity: ".15",
                            fontSize: "50px",
                            marginTop: "-40px",
                            marginBottom: "0",
                            marginLeft: "230px",
                        }}
                        className="signature"
                    >
                        CarParkingPage
                    </p>
                </div>
                <Card className="col s6" style={{ marginLeft: "7%" }}>
                    <h4
                        style={{
                            fontSize: "35px",
                            lineHeight: "1.3",
                            paddingBottom: "0,3em",
                            color: "#21303e",
                            textAlign: "left",
                            width: "320px",
                            fontWeight: "bold",
                            background: "linear-gradient(-21deg,#14be3d 0%,#16d445 100%);",
                        }}
                    >
                        2002-2023
                    </h4>
                    <p
                        style={{
                            marginBottom: "1em",
                            marginTop: "4em",
                            fontSize: "20px",
                            maxWidth: "100%",
                            paddingBottom: "0",
                            fontFamily: "Mont,sans-serif",
                            marginBlockStart: "1em",
                            marginBlockEnd: "1em",
                            marginInlineStart: "0px",
                            marginInlineEnd: "0px",
                            color: "#4a697c",
                        }}
                    >
                        Aliquam commodo interdum viverra. Sed venenatis faucibus tellus, sit
                        amet laoreet ligula ultricies a. Maecenas cursus auctor nulla, nec
                        scelerisque est laoreet a quis. Ut gravida rutrum aliquam. Curabitur
                        id orci maximus, ornare metus ac, tristique risus.
                    </p>
                    <img
                        style={{ borderRadius: "5px", width: "100%" }}
                        src="https://parkivia.ancorathemes.com/wp-content/uploads/2017/12/img-step1-copyright.jpg"
                    ></img>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default News;