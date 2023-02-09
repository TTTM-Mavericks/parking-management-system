import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header";
import Footer from "./Footer";
import Slider from "./Slider";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
    const [displayusername, displayusernameupdate] = useState('');
    useEffect(() => {
        let username = sessionStorage.getItem('username');
        if (username === '' || username === null) {
            // usenavigate('/login');
        } else {
            displayusernameupdate(username);
        }

        let jwttoken = sessionStorage.getItem('jwttoken');
        // fetch("https://localhost:44308/Customer", {
        //     headers: {
        //         'Authorization': 'bearer ' + jwttoken
        //     }
        // }).then((res) => {
        //     return res.json();
        // }).then((resp) => {
        //     listupdate(resp);
        // }).catch((err) => {
        //     console.log(err.messsage)
        // });

    }, []);




    return (
        <HelmetProvider>
            <Helmet>
                <title>EParking</title>
            </Helmet>
            <Header></Header>
            <Slider></Slider>

            {/* -----------------------------zone-area-homepage----------------------- */}
            <div className="row zone-area-homepage">

                <div className="card col-lg-4" style={{ marginLeft: '10%' }}>
                    <div className="card-header">
                        <div>
                            <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                        </div>
                        <span>Zone 1</span>
                    </div>
                    <div className="card-body">
                        <span>Content</span>
                        <div>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button style={{ color: "#fff", width: '25%' }} type="submit"><span>Details</span></button>
                        <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                    </div>
                </div>


                <div className="card col-lg-4">
                    <div className="card-header">
                        <div>
                            <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                        </div>
                        <span>Zone 1</span>
                    </div>
                    <div className="card-body">
                        <span>Content</span>
                        <div>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button style={{ color: "#fff", width: '25%' }} type="submit"><span>Details</span></button>
                        <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                    </div>
                </div>


                <div className="card col-lg-4">
                    <div className="card-header">
                        <div>
                            <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>2.5$ / Day</p>
                        </div>
                        <span>Zone 1</span>
                    </div>
                    <div className="card-body">
                        <span>Content</span>
                        <div>
                            <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                            <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 4 hours</b>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button style={{ color: "#fff", width: '25%' }} type="submit"><span>Details</span></button>
                        <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                    </div>
                </div>

                {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                <div class=" row barrier-homepage" >

                    <div class=" col-lg-6" style={{ marginLeft: '10%' }}>
                        <h2>
                            Entry/barrier system & QR code
                        </h2>
                        <span>
                            <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>

                            <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                        </span>

                    </div>

                    <div class="col-lg-6 img-gate-homepage">
                        <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                    </div>



                </div>

                {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                <div class=" row barrier-homepage" >

                    <div class="col-lg-6 img-gate-homepage" style={{ marginLeft: '10%' }}>
                        <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                    </div>

                    <div class=" col-lg-6" >
                        <h2>
                            Entry/barrier system & QR code
                        </h2>
                        <span>
                            <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>

                            <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                        </span>


                    </div>





                </div>


            </div>
            <Footer></Footer>

            <table className="table table-bordered">
                {/* <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Credit Limit</td>
                    </tr>
                </thead> */}
                <tbody>
                    {customerlist &&
                        customerlist.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.creditLimit}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>
        </HelmetProvider>
    );
}

export default Home;