import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//  import visa from "D:/WorkSpace/React_projects/SWP/ParkingManagement/public/assets/img/visa"
import { faCheck, faTriangleExclamation, faInfoCircle, faUser, faClock, faArrowRight, faCashRegister, } from "@fortawesome/free-solid-svg-icons";
import Slider from "../Complements/Slider"
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import ReservationDetail from "./ReservationDetail";
import './Payment.css'
import { url_api } from "../../API/api";


const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const PaymentInformation = () => {
    const reservation = JSON.parse(sessionStorage.getItem("reservation"));
    const obj = JSON.parse(sessionStorage.getItem("obj"));
    const [bookingInf, setBookingInf] = useState([]);
    const [type, setType] = useState('Banking');
    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [role, setRole] = useState(sessionStorage.getItem('role'));
    const [success, setSuccess] = useState(false);
    const usenavigate = useNavigate();
    const [logined, setLogined] = useState(sessionStorage.getItem("username"))
    const [msg, setMsg] = useState('');
    const [msgBan, setMsgBan] = useState('');
    const [flag, setFlag] = useState(false);

    useEffect(() => {

        fetch(url_api + "/bookingCustomer/messageCancelBookingCustomer")
            .then(res => res.text())
            .then(resp => {
                console.log('Ban: ' + resp)
                setMsgBan(resp)
            })

    }, [msgBan])


    useEffect(() => {
        fetch(url_api + "/bookingCustomer/messageBooking")
            .then(res => res.text())
            .then(resp => {
                console.log('tudeptrai: ' + resp)
                setMsg(resp)
            })
    }, [msg])

    useEffect(() => {
        setType(type);
    }, [type]);

    useEffect(() => {
        fetch(url_api + "/bookingCustomer/findBooking")
            .then(response => response.json())
            .then((data) => {
                setBookingInf(data);
                console.log(data);
            })
            .catch(error => console.error(error));

    }, []);

    const handleSubmit = async (e) => {
        if ((logined === null || logined === '')) {
            window.location.href = '/Login'
        } else

            if (logined != null || logined != '') {
                e.preventDefault();
                window.confirm('Do you want to choose \'' + type + '\' is type of payment?')
                console.log(bookingInf.id_Booking);
                console.log(type)
                sessionStorage.setItem("idbooking", bookingInf.id_Booking);
                sessionStorage.setItem("typePayment", type);
                sessionStorage.setItem("idbuilding", bookingInf.id_Building);

                setTimeout(function () {
                    window.location.href = '/Banking'
                }, 800);
            }
            else window.location.href = '/login';
    }



    const toComplete = async (e) => {
        if ((logined === null || logined === '')) {
            window.location.href = '/Login'
        } else

            if (logined != null || logined != '') {
                e.preventDefault();
                window.confirm('Do you want to choose \'' + type + '\' is type of payment?')
                const id_Booking = bookingInf.id_Booking;
                const type_Of_Payment = type;
                const id_Building = bookingInf.id_Building;

                const regObj = { id_Booking, type_Of_Payment, id_Building }
                fetch(url_api + "/paymentCustomer/save", {

                    method: 'POST',
                    header: {
                        "Accept": "*/*",
                        "Content-Type": "application/text",
                        "X-Requested-With": "XMLHttpRequest",
                        "Cache-Control": "no-cache",
                    },

                    body: JSON.stringify(regObj)


                }).then((res) => {
                    console.log(JSON.stringify(regObj));
                    console.log(JSON.stringify(regObj))
                    console.log(res);

                    const currentDate = new Date(Date.now());
                    const formattedDate = currentDate.toISOString().substr(0, 10);
                    const now = new Date();
                    const hours = now.getHours();
                    const minutes = now.getMinutes();
                    const seconds = now.getSeconds();
                    const currentTime = `${hours}:${minutes}:${seconds}`;
                    sessionStorage.setItem("datebook", formattedDate);
                    sessionStorage.setItem("timebook", currentTime)
                    window.location.href = '/ReservationComplete'

                }).catch((err) => {
                    toast.error('Failed: ' + err.message);
                });
                setTimeout(function () {
                    window.location.reload();
                }, 800);
            }
            else window.location.href = '/Login';
    }

    const handleCancel = async (e) => {
        e.preventDefault();

        alert('Do you want to Cancel your Reservation? You will be banned after canceling more 5 times')
        const id_booking = bookingInf.id_Booking;
        const id_Customer = username;
        const id_Building = obj.id_Building;
        const id_C_slot = obj.id_C_Slot;


        const regObj = { id_booking, id_Customer, id_Building, id_C_slot };

        console.log(regObj)

        fetch(url_api + "/bookingCustomer/cancelBooking", {

            method: 'POST',
            header: {
                "Accept": "*/*",
                "Content-Type": "application/text",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

            body: JSON.stringify(regObj)


        }).then((data) => {
            setSuccess(true);
            console.log(data);
            usenavigate('/Reservation');
            toast.success('Cancel complete');

        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });

    }


    return (
        <div className="body-reservation">
            <Header data={username}></Header>
            <Slider></Slider>

            <h2 style={{ textAlign: 'center', paddingTop: '30px', color: '#BA3925' }}>Processing...</h2>
            <div className="step-reservation container d-flex align-items-center justify-content-center">
                <Link style={{ textDecoration: 'none' }} to={'/Reservation'}>
                    <div className="circle">
                        <div className="col-lg-3 rounded-circle" ><span>1</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                    </div>
                </Link>

                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>

                <div className="circle">
                    <div className="col-lg-3 rounded-circle" style={{ backgroundColor: 'black' }}><span>2</span></div>
                    <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Payment Accuracy</h6>
                </div>

                <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>

                <Link style={{ textDecoration: 'none' }} to={'/ReservationComplete'}>
                    <div className="circle">
                        <div className="col-lg-3 rounded-circle" ><span>3</span></div>
                        <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Completed</h6>
                    </div>
                </Link>
            </div>

            {
                ((msgBan === 'Customer Booking Successfully') || (msgBan === 'You have an expired. Please payment before booking another slot') || (msgBan === 'You have to payment before booking another slot'))
                    ?
                    (msg === 'You have an expired. Please payment before booking another slot' || msg === 'You have to payment before booking another slot')
                        ?
                        (
                            <div style={{ width: '30%', color: 'black', textAlign: 'center' }} className="notice-infor">
                                <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#c31313", fontSize: '100px', paddingTop: '20px', paddingBottom: '20px' }} />
                                <br />
                                <p style={{ color: 'red', paddingLeft: '30px', paddingRight: '30px' }}> {msg}</p>
                                <br />
                                <p style={{ color: 'black', paddingBottom: '20px' }}>Go to: <Link to={role === 'C' ? '/CustomerPage' : '/ResidentPage'}>Check</Link> to check your invoice</p>

                            </div>
                        )
                        :
                        (
                            <div style={{ color: 'black' }} className="payment-infor">
                                <p style={{ width: '500px' }}>In order to complete your reservation, you will need to make an online payment. Click the button below to go to a secure payment site.</p>
                                <p style={{ fontWeight: 'bold' }}>YOUR RESERVATION WILL NOT BE VALID WITHOUT THE PAYMENT!</p>
                                <div className="col-lg-6 class-input" >

                                    <label className="bankingorcash" style={{ marginLeft: '-20%', marginTop: '20px', width: '700px' }}>Payment method *</label>
                                    <br />
                                    <div className="formchoose">
                                        <select className="form-select" style={{ width: '40%', marginLeft: '-20%', float: 'left' }} onChange={e => setType(e.target.value)} value={type} >
                                            <option> <FontAwesomeIcon icon={faCashRegister}></FontAwesomeIcon> Cash</option>
                                            <option>Banking</option>
                                        </select>

                                        {type === 'Banking' ?
                                            (
                                                <form onSubmit={handleSubmit}>
                                                    <button style={{ color: "#fff" }} type="submit" className="banking">Pay now</button>
                                                </form>
                                            )
                                            :
                                            (
                                                <form onSubmit={toComplete}>
                                                    <button style={{ color: "#fff" }} type="submit" className="banking">Go to invoice</button>
                                                </form>
                                            )
                                        }


                                    </div>

                                </div>
                                <img src={'../assets/img/visa.png'} />
                                <div className="payment-infor-detail" >
                                    <span>Reservation ID</span>
                                    <i>{bookingInf.id_Booking}</i>
                                    <br />
                                    <span>Full name</span>
                                    <i>{bookingInf.fullname}</i>
                                    <br />
                                    <span>Email</span>
                                    <i>{bookingInf.email}</i>
                                    <br />
                                    <span>Phone</span>
                                    <i>{bookingInf.phone}</i>
                                    <br />
                                    <span>Type of vehicle</span>
                                    <i>{bookingInf.type_Of_Vehicle}</i>
                                    <br />
                                    <span>Parking zone</span>
                                    <i>{bookingInf.id_Building}</i>
                                    <br />
                                    <span>Slot</span>
                                    <i>{bookingInf.id_C_Slot}</i>
                                    <br />
                                    <span>Start date</span>
                                    <i>{String(bookingInf.startDate).substring(0, 10)}</i>
                                    <br />
                                    <span>Start time</span>
                                    <i>{bookingInf.startTime}</i>
                                    <br />
                                    <span>End date</span>
                                    <i>{String(bookingInf.endDate).substring(0, 10)}</i>
                                    <br />
                                    <span>End time</span>
                                    <i>{bookingInf.endTime}</i>
                                    <br />
                                    <span>Created</span>
                                    <i>{sessionStorage.getItem("datebook")}, {sessionStorage.getItem("timebook")}</i>
                                    <br />
                                    <span>Price</span>
                                    <i>{Number(bookingInf.total_Of_Money).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                                    <br />
                                    <span>Status</span>
                                    <i style={{ color: '#C30000' }}>Not completed</i>


                                </div>

                                <button onClick={handleCancel} style={{ backgroundColor: '#E63E31', border: '0px', marginTop: '20px', width: '50%' }} className="cancel-payment">Cancel Reservation</button>

                            </div>
                        )


                    :
                    (
                        <div style={{ width: '30%', color: 'black', textAlign: 'center' }} className="notice-infor">
                            <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#c31313", fontSize: '100px', paddingTop: '20px', paddingBottom: '20px' }} />
                            <br />
                            <p style={{ color: 'red', paddingLeft: '30px', paddingRight: '30px' }}>Your account has been banned! Because of your canceling more than 5 times. Please contact with SECURITY to payment to unban.</p>
                            <br />
                            <p style={{ color: 'black', paddingBottom: '20px' }}>Go to: <Link to={role === 'C' ? '/CustomerPage' : '/ResidentPage'}>Check</Link> to check your invoice</p>
                        </div>
                    )
            }



            {/* {

                msg != 'Customer Booking Successfully' ? (
                    <div style={{ width: '30%', color: 'black', textAlign: 'center' }} className="notice-infor">
                        <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#c31313", fontSize: '100px', paddingTop: '20px', paddingBottom: '20px' }} />
                        <br />
                        <p style={{ color: 'red', paddingLeft: '30px', paddingRight: '30px' }}> {msg}</p>
                        <br />
                        <p style={{ color: 'black', paddingBottom: '20px' }}>Go to: <Link to={role === 'C' ? '/CustomerPage' : '/ResidentPage'}>Check</Link> to check your invoice</p>

                    </div>
                )
                    :
                    (
                        <div style={{ color: 'black' }} className="payment-infor">
                            <p style={{ width: '500px' }}>In order to complete your reservation, you will need to make an online payment. Click the button below to go to a secure payment site.</p>
                            <p style={{ fontWeight: 'bold' }}>YOUR RESERVATION WILL NOT BE VALID WITHOUT THE PAYMENT!</p>
                            <div className="col-lg-6 class-input" >

                                <label className="bankingorcash" style={{ marginLeft: '-20%', marginTop: '20px', width: '700px' }}>Payment method *</label>
                                <br />
                                <div className="formchoose">
                                    <select className="form-select" style={{ width: '40%', marginLeft: '-20%', float: 'left' }} onChange={e => setType(e.target.value)} value={type} >
                                        <option> <FontAwesomeIcon icon={faCashRegister}></FontAwesomeIcon> Cash</option>
                                        <option>Banking</option>
                                    </select>

                                    {type === 'Banking' ?
                                        (
                                            <form onSubmit={handleSubmit}>
                                                <button style={{ color: "#fff" }} type="submit" className="banking">Pay now</button>
                                            </form>
                                        )
                                        :
                                        (
                                            <form onSubmit={toComplete}>
                                                <button style={{ color: "#fff" }} type="submit" className="banking">Go to invoice</button>
                                            </form>
                                        )
                                    }


                                </div>

                            </div>
                            <img src={'../assets/img/visa.png'} />
                            <div className="payment-infor-detail" >
                                <span>Reservation ID</span>
                                <i>{bookingInf.id_Booking}</i>
                                <br />
                                <span>Full name</span>
                                <i>{bookingInf.fullname}</i>
                                <br />
                                <span>Email</span>
                                <i>{bookingInf.email}</i>
                                <br />
                                <span>Phone</span>
                                <i>{bookingInf.phone}</i>
                                <br />
                                <span>Type of vehicle</span>
                                <i>{bookingInf.type_Of_Vehicle}</i>
                                <br />
                                <span>Parking zone</span>
                                <i>{bookingInf.id_Building}</i>
                                <br />
                                <span>Slot</span>
                                <i>{bookingInf.id_C_Slot}</i>
                                <br />
                                <span>Start date</span>
                                <i>{String(bookingInf.startDate).substring(0, 10)}</i>
                                <br />
                                <span>Start time</span>
                                <i>{bookingInf.startTime}</i>
                                <br />
                                <span>End date</span>
                                <i>{String(bookingInf.endDate).substring(0, 10)}</i>
                                <br />
                                <span>End time</span>
                                <i>{bookingInf.endTime}</i>
                                <br />
                                <span>Created</span>
                                <i>{sessionStorage.getItem("datebook")}, {sessionStorage.getItem("timebook")}</i>
                                <br />
                                <span>Price</span>
                                <i>{Number(bookingInf.total_Of_Money).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                                <br />
                                <span>Status</span>
                                <i style={{ color: '#C30000' }}>Not completed</i>


                            </div>

                            <button onClick={handleCancel} style={{ backgroundColor: '#E63E31', border: '0px', marginTop: '20px', width: '50%' }} className="cancel-payment">Cancel Reservation</button>

                        </div>
                    )} */}



            <Footer></Footer>
        </div>
    )

}
export default PaymentInformation;