import React, { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import Slider from "../Complements/Slider";
import './Main.css'
import PopUpWarning from './PopUp/PopUpWarning';
import { url_api } from "../../API/api";

const URL_WARNING_C = url_api + '/checkLoginCustomerExpireInvoice';
const URL_WARNING_R = url_api + '/checkLoginResidentExpireInvoice';

const Home = () => {
    const reviews = [
        { _id: 1, text: "abc" },
        { _id: 2, text: "def" },
        { _id: 3, text: "ghi" },
        { _id: 4, text: "jkl" },

    ];

    const [zone, setZone] = useState('A');
    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [id, setId] = useState(sessionStorage.getItem('id'));
    const [role, setRole] = useState(sessionStorage.getItem('role'));
    const [URL_WARNING, set_URL_WARNING] = useState('')
    const [obj, setObj] = useState([]);

    const [showPopupWarning, setShowPopupWarning] = useState(false);
    const [open, setOpen] = useState(false);


    const togglePopupWarning = () => {
        setShowPopupWarning(!showPopupWarning);

    };

    useEffect(() => {
        if (role === 'C') {
            set_URL_WARNING(URL_WARNING_C)
        } else set_URL_WARNING(URL_WARNING_R)
    }, [role])

    console.log('urrl: ' + URL_WARNING)

    useEffect(() => {
        const currentDate = new Date(Date.now());
        const formattedDate = currentDate.toISOString().substr(0, 10);
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        const id_User = username;
        const time = currentTime;
        const repobj = { id_User, time }
        console.log(repobj);

        if (role === 'C') {
            fetch(URL_WARNING_C, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": URL_WARNING,
                    Accept: "*/*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(repobj)
            })
                .then(res => res.text())
                .then(resp => {
                    console.log('tudeptrai: ' + resp)
                    setObj(resp)
    
                })
                .catch((err) => {
                    console.error(err);
                });
            
        } else {
            fetch(URL_WARNING_R, {
                method: "POST",
                headers: {
                    "Access-Control-Allow-Origin": URL_WARNING,
                    Accept: "*/*",
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(repobj)
            })
                .then(res => res.text())
                .then(resp => {
                    console.log('tudeptrai: ' + resp)
                    setObj(resp)
    
                })
                .catch((err) => {
                    console.error(err);
                });
        }


        


    }, [username]);






    useEffect(() => {
        if (obj === 'Have Expire')
            togglePopupWarning();

    }, [obj])


    useEffect(() => {
        setZone(zone);

    }, [zone]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        sessionStorage.setItem("zone", zone);

        // window.location.href = '/Reservation';
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>EParking</title>
            </Helmet>
            <Header data={username}></Header>
            <Slider></Slider>

            {/* -----------------------------zone-area-homepage----------------------- */}
            <form onSubmit={handleSubmit}>
                <div className="row zone-area-homepage" >
                    <Card className="card col-lg-4" style={{ marginLeft: '10%' }}>
                        <Card.Header className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>Low price</p>
                            </div>
                            <span>Zone A</span>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <span>Zone A is a new Zone, with have a lot slots for your vehicles.</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 1 month</b>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <form onSubmit={handleSubmit}>

                                <Link style={{ borderBottom: '0', textDecoration: 'none' }} to={'/ZoneDetail/A'}>

                                    <button className="button-home" style={{ color: "#fff", width: '30.8%' }}  ><span style={{ borderBottom: '0', textDecoration: 'none' }}>Details</span></button>
                                </Link>
                                <Link style={{ borderBottom: '0', textDecoration: 'none' }} to={'/Reservation'}>
                                    <Button className="button-home" style={{ color: "#fff", marginTop: '10px' }} onClick={e => setZone(e.target.value)} value='A'><span style={{ borderBottom: '0', textDecoration: 'none' }}>Make Reservation</span></Button>
                                </Link>
                            </form>
                        </Card.Footer>
                    </Card>


                    <Card className="card col-lg-4">
                        <Card.Header className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>Higher price</p>
                            </div>
                            <span>Zone B</span>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <span>Zone B is built with a larger capacity and many facilities </span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 1 months</b>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <form onSubmit={handleSubmit}>

                            </form>

                            <Link style={{ borderBottom: '0', textDecoration: 'none' }} to={'/ZoneDetail/B'}>

                                <Button style={{ color: "#fff", width: '30.8%' }} onClick={() => setZone('B')} value="B"><span style={{ borderBottom: '0', textDecoration: 'none' }}>Details</span></Button>
                            </Link>
                            <Link style={{ borderBottom: '0', textDecoration: 'none' }} to={'/Reservation'}>
                                <Button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='B'><span style={{ borderBottom: '0', textDecoration: 'none' }}>Make Reservation</span></Button>
                            </Link>
                        </Card.Footer>
                    </Card>


                    <Card className="card col-lg-4">
                        <Card.Header className="card-header">
                            <div>
                                <p style={{ display: 'block', margin: '0 auto', color: "#fff" }}>Highest price</p>
                            </div>
                            <span>Zone C</span>
                        </Card.Header>
                        <Card.Body className="card-body">
                            <span>Zone C provides a more spacious parking area and more facilities</span>
                            <div>
                                <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                <b style={{ marginLeft: '10px', fontSize: '12px' }}>Max, Duration: 1 month</b>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <form onSubmit={handleSubmit}>

                            </form>
                            <Link style={{ borderBottom: '0', textDecoration: 'none' }} to={'/ZoneDetail/C'}>

                                <Button style={{ color: "#fff", width: '30.8%' }} onClick={() => setZone('C')} value="C"><span style={{ borderBottom: '0', textDecoration: 'none' }}>Details</span></Button>
                            </Link>
                            <Link style={{ borderBottom: '0', textDecoration: 'none' }} to={'/Reservation'}>
                                <Button style={{ color: "#fff" }} onClick={e => setZone(e.target.value)} value='C'><span style={{ borderBottom: '0', textDecoration: 'none' }}>Make Reservation</span></Button>
                            </Link>
                        </Card.Footer>
                    </Card>

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >
                        <div class=" col-lg-6 msg" style={{ marginLeft: '10%' }}>
                            <h2>
                                Entry/barrier system & QR code
                            </h2>
                            <span>
                                <h5 style={{ display: 'block', marginBottom: '30px' }}>You can integrate planyo with any automated entry system. Check out our already existing integration with Spartime.</h5>
                                <h5>Your staff can use our mobile app and read the QR code upon entry for speeding up the arrivals.</h5>
                            </span>
                        </div>
                        <div class="col-lg-6 img-gate-homepage">
                            <button style={{ color: "#fff" }} type="submit"><span >Make Reservation</span></button>
                        </div>
                    </div>

                    {/* -----------------------------Entry/barrier system & QR code----------------------- */}

                    <div class=" row barrier-homepage" >
                        <div class="col-lg-6 img-gate-homepage" style={{ marginLeft: '10%' }}>
                            <button style={{ color: "#fff" }} type="submit"><span>Make Reservation</span></button>
                        </div>

                        <div class=" col-lg-6 msg" >
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


                {/* ------------------SLIDER-------------------------- */}
                <div>
                    <h1 className="text-center fw-bold my-3">
                        User Reviews ({reviews.length})
                    </h1>
                    <div className="bg-light container-fluid" style={{ backgroundColor: 'white' }}>
                        <Carousel style={{ height: 300 }}>
                            {reviews.map((review, index) => (
                                <Carousel.Item style={{ height: 300, color: 'black' }} className='recard'>
                                    <Stack
                                        direction="horizontal"
                                        className="h-100 justify-content-center align-items-center "

                                        gap={2}
                                    >
                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body >
                                                <Card.Title style={{ color: "black" }}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button style={{ width: '80%', height: '38px' }} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Title style={{ color: "black" }}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button style={{ width: '80%', height: '38px' }} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>

                                        <Card style={{ width: "18rem" }}>
                                            <Card.Body>
                                                <Card.Title style={{ color: "black" }}>Card Title</Card.Title>
                                                <Card.Text style={{ color: "black" }}>
                                                    Some quick example text to build on the card title and
                                                    make up the bulk of the card's content.
                                                </Card.Text>
                                                <Button style={{ width: '80%', height: '38px' }} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Stack>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </form>
            <Footer></Footer>
            <PopUpWarning handleClose={togglePopupWarning} show={showPopupWarning} role={role}>
            </PopUpWarning>
        </HelmetProvider>
    );
}

export default Home;



