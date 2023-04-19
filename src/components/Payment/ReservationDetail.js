import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRoad, faExit } from "@fortawesome/free-solid-svg-icons";
import { faCarRear, faBicycle, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import './Payment.css';
import { url_api } from "../../API/api";

const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const ReservationDetail = () => {
    const [startDate, setStartDate] = useState(sessionStorage.getItem("startDate"));
    const [endDate, setEndDate] = useState(sessionStorage.getItem("endDate"));
    const [startTime, setStartTime] = useState(sessionStorage.getItem("startTime"));
    const [endTime, setEndTime] = useState(sessionStorage.getItem("endTime"));
    const [zone, setZone] = useState('A')
    const [fullName, setFullName] = useState(sessionStorage.getItem("fullname"));
    const [email, setEmail] = useState(sessionStorage.getItem("email"))
    const [validEmail, setValidEmail] = useState(false);
    const [phone, setPhone] = useState(sessionStorage.getItem("phone"))
    const [validPhone, setValidPhone] = useState(false);
    const [typeOfVehicle, setTypeOfVehicle] = useState('Motor');
    const [slot, setSlot] = useState('');
    const [shells, setShells] = useState([]);
    const [logined, setLogined] = useState(sessionStorage.getItem("username"))
    const [role, setRole] = useState(sessionStorage.getItem("role"))
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [success, setSuccess] = useState(false)
    useEffect(() => {
            // Check if the StartDate is after the EndDate
            if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
                console.log('Start date cannot be after end date.');
                toast.error('Start date cannot be after end date.')
                setSuccess(false)
                setDisabled(true);
            } else {
                setError('');
                setDisabled(false);
                setSuccess(true)
            }
        }, [startDate, endDate]);


        useEffect(() => {
            // Check if the StartDate and EndDate are the same date
            if (startDate && endDate && startDate === endDate) {
                // Check if the StartTime is after the EndTime
                if (startTime > endTime) {
                    console.log('Start time cannot be after end time.');
                    toast.error('Start time cannot be after end time.')
                    setDisabled(true);
                    setSuccess(false)
                } else {
                    setError('');
                    setDisabled(false);
                    setSuccess(true)
                }
            } else {
                setError('');
                setDisabled(false);
            }
        }, [startDate, endDate, startTime, endTime]);

        useEffect(() => {
            // Check if the StartTime and EndTime are the same time
            if (startTime && endTime && startTime === endTime) {
                console.log('Start time and end time cannot be the same.');
                toast.error('Start time and end time cannot be the same in one day.')
                setDisabled(true);
                setSuccess(false)
            } else {
                setError('');
                setDisabled(false);
                setSuccess(true)
            }
        }, [startTime, endTime]);






    useEffect(() => {
        setStartDate(startDate);

    }, [startDate]);

    useEffect(() => {
        setEndDate(endDate);
    }, [endDate]);

    useEffect(() => {
        setStartTime(startTime);
    }, [startTime]);

    useEffect(() => {
        setEndTime(endTime);
    }, [endTime]);

    useEffect(() => {
        setZone(zone);
        console.log(zone)
    }, [zone]);

    useEffect(() => {
        setFullName(fullName)

    }, [fullName]);


    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email]);

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result);
    })

    useEffect(() => {
        setTypeOfVehicle(typeOfVehicle)
    }, [typeOfVehicle])

    useEffect(() => {
        setSlot(slot)

    }, [slot])

    // -----------------------------------------------------------------------------------------------------
    useEffect(() => {
        const repObj = { startDate, startTime, endDate, endTime }

        console.log(startDate + ',' + startTime + ',' + endDate + ',' + endTime + ',')

        // fetch('', {
        //     method: "POST",
        //     headers: {
        //         "Access-Control-Allow-Origin": '',
        //         Accept: "*/*",
        //         "Content-Type": "application/json",
        //         "X-Requested-With": "XMLHttpRequest",
        //         "Cache-Control": "no-cache",
        //     },
        //     body: JSON.stringify(repObj)
        // })
        //     .then(res => res.text())
        //     .then(resp => {
        //         console.log('tudeptrai: ' + resp)
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //     });

    }, [startDate, startTime, endDate, endTime])



    // -----------------------------------------------------------------------------------------------------


    // fetch('', {
    //     method: "POST",
    //     headers: {
    //         "Access-Control-Allow-Origin": '',
    //         Accept: "*/*",
    //         "Content-Type": "application/json",
    //         "X-Requested-With": "XMLHttpRequest",
    //         "Cache-Control": "no-cache",
    //     },
    //     body: JSON.stringify(repObj)
    // })



    useEffect(() => {
        // if (zone === 'A') {
        if (role === 'C') {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const time = `${hours}a${minutes}a${seconds}`;
            const repObj = { startDate, startTime, endDate, endTime, time }

            console.log(startDate + ',' + startTime + ',' + endDate + ',' + endTime + ',')
            console.log(zone)
            fetch(url_api + "/present_slot/findAll/" + zone,
                {
                    method: "POST",
                    headers: {
                        "Access-Control-Allow-Origin": '',
                        Accept: "*/*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "Cache-Control": "no-cache",
                    },
                    body: JSON.stringify(repObj)
                }
            )
                .then(response => response.json())
                .then((data) => {
                    setShells(data)
                    console.log(data)
                })
                .catch(error => console.error(error));

        } return;

    }, [zone, startDate, startTime, endDate, endTime]);

    const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
    const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));
    console.log(customerSlot);

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the valid value!';

        if (!PHONE_REGEX.test(phone)) {
            isproceed = false;
            errormessage = 'Phone must be 10-12 numbers.';
        }
        if (!EMAIL_REGEX.test(email)) {
            isproceed = false;
            errormessage = 'Please enter the valid email!';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }

    const handleSubmit = async (e) => {


        if ((logined === null || logined === '')) {
            window.location.href = '/Login'
        } else

            if (logined != null || logined != '') {
                e.preventDefault();
                const id_Building = zone;
                const type_Of_Vehicle = typeOfVehicle;
                const id_C_Slot = slot;
                const fullname = fullName;
                const idUser = sessionStorage.getItem("id");
                const obj = { idUser, startDate, endDate, startTime, endTime, id_Building, type_Of_Vehicle, id_C_Slot, fullname, email, phone }
                console.log(obj)
                const now = new Date();
                const hours = now.getHours();
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();
                const currentTime = `${hours}a${minutes}a${seconds}`;
                fetch(url_api + "/bookingCustomer/save?time=" + currentTime, {
                    method: 'POST',
                    header: {

                        "Accept": "*/*",
                        "Content-Type": "application/json",
                        "X-Requested-With": "XMLHttpRequest",
                        "Cache-Control": "no-cache",

                    },
                    body: JSON.stringify(obj)
                }).then((res) => {

                    console.log(obj)
                    sessionStorage.setItem("obj", JSON.stringify(obj));
                    const currentDate = new Date(Date.now());
                    const formattedDate = currentDate.toISOString().substr(0, 10);
                    const now = new Date();
                    const hours = now.getHours();
                    const minutes = now.getMinutes();
                    const seconds = now.getSeconds();
                    const currentTime = `${hours}:${minutes}:${seconds}`;
                    sessionStorage.setItem("datebook", formattedDate);
                    sessionStorage.setItem("timebook", currentTime);
                    console.log(res);
                    toast.success('Booking Success');
                    setTimeout(function () {
                        window.location.href = '/PaymentInformation'
                    }, 800);

                }).catch((err) => {
                    console.log(err.massage())
                });


            }
            else window.location.href = '/login';
    }





    return (

        <div className="body-reservation">
            {role === 'C' ? (
                <>
                    <h2 style={{ textAlign: 'center', paddingTop: '30px', color: '#BA3925' }}>Processing...</h2>
                    <div className="step-reservation container d-flex align-items-center justify-content-center">

                        <div className="circle">
                            <div className="col-lg-3 rounded-circle" style={{ backgroundColor: 'black' }}><span>1</span></div>
                            <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Details</h6>
                        </div>

                        <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                        <Link style={{ textDecoration: 'none' }} to={'/PaymentInformation'}>
                            <div className="circle">
                                <div className="col-lg-3 rounded-circle"><span>2</span></div>
                                <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Payment Accuracy</h6>
                            </div>
                        </Link>
                        <FontAwesomeIcon style={{ fontSize: '25px', marginTop: '-30px' }} icon={faArrowRight}></FontAwesomeIcon>
                        <Link style={{ textDecoration: 'none' }} to={'/ReservationComplete'}>
                            <div className="circle">
                                <div className="col-lg-3 rounded-circle" ><span>3</span></div>
                                <h6 style={{ display: 'block', width: '80px', textAlign: 'center', marginLeft: '10px' }}>Reservation Completed</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="reservation-details">
                        <h3 style={{ paddingBottom: '30px' }}>Reservation details</h3>
                        <div className="row col-lg-6">
                            <div className="col-lg-6  class-input">
                                <label>Start date *</label>
                                <br />
                                <div>
                                    <input type={'date'} min={new Date().toISOString().split('T')[0]} placeholder="User Name" style={{ width: '100%', position: 'relative' }} onChange={(e) => setStartDate(e.target.value)} value={startDate} ></input>

                                </div>
                            </div>
                            <div className=" col-lg-6 class-input">
                                <label>End date *</label>
                                <br />
                                <div>
                                    <input type={'date'} min={new Date().toISOString().split('T')[0]} placeholder="User Name" style={{ width: '100%', position: 'relative' }} onChange={(e) => setEndDate(e.target.value)} value={endDate}  ></input>

                                </div>
                            </div>
                            <div className="col-lg-6 class-input">
                                <label>Start time *</label>
                                <br />
                                <select className="form-select" onChange={(e) => setStartTime(e.target.value)} value={startTime}>
                                    <option>00:00</option>
                                    <option>01:00</option>
                                    <option>02:00</option>
                                    <option>03:00</option>
                                    <option>04:00</option>
                                    <option>05:00</option>
                                    <option>06:00</option>
                                    <option>07:00</option>
                                    <option>08:00</option>
                                    <option>09:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                    <option>23:00</option>
                                </select>
                            </div>

                            <div className=" col-lg-6 class-input">
                                <label>End time *</label>
                                <br />
                                <select className="form-select" onChange={(e) => setEndTime(e.target.value)} value={endTime}>
                                    <option>00:00</option>
                                    <option>01:00</option>
                                    <option>02:00</option>
                                    <option>03:00</option>
                                    <option>04:00</option>
                                    <option>05:00</option>
                                    <option>06:00</option>
                                    <option>07:00</option>
                                    <option>08:00</option>
                                    <option>09:00</option>
                                    <option>10:00</option>
                                    <option>11:00</option>
                                    <option>12:00</option>
                                    <option>13:00</option>
                                    <option>14:00</option>
                                    <option>15:00</option>
                                    <option>16:00</option>
                                    <option>17:00</option>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                    <option>22:00</option>
                                    <option>23:00</option>
                                </select>
                            </div>

                            <div className=" col-lg-6 class-input">
                                <label>Zone *</label>
                                <br />
                                <select className="form-select" onChange={(e) => setZone(e.target.value)} value={zone}  >
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>
                            </div>
                            <div className="col-lg-6 class-input">
                                <label>Type of vehicle *</label>
                                <br />
                                <select className="form-select" onChange={(e) => setTypeOfVehicle(e.target.value)}>
                                    <option>Car</option>
                                    <option>Motor</option>
                                    <option>Bike</option>
                                </select>
                            </div>
                            <div className=" col-lg-6 class-input">
                                <label>Slot *</label>
                                <br />
                                <select className="form-select" onChange={(e) => setSlot(e.target.value)}>
                                    {typeOfVehicle === 'Car' && customerSlot.slice(0, 10).map((shell) => {
                                        if (shell.status_Slots === false) {
                                            return <option key={shell.id_slot}>{shell.id_slot}</option>;
                                        }
                                        return null;
                                    })}
                                    {typeOfVehicle === 'Motor' && customerSlot.slice(10, 20).map((shell) => {
                                        if (shell.status_Slots === false) {
                                            return <option key={shell.id_slot}>{shell.id_slot}</option>;
                                        }
                                        return null;
                                    })}
                                    {typeOfVehicle === 'Bike' && customerSlot.slice(20, 30).map((shell) => {
                                        if (shell.status_Slots === false) {
                                            return <option key={shell.id_slot}>{shell.id_slot}</option>;
                                        }
                                        return null;
                                    })}
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className="personal-details" style={{ marginTop: '20px' }}>
                        <h3 style={{ paddingBottom: '30px' }}>Personal details</h3>
                        <div className="row col-lg-6">
                            <div className="col-lg-6  class-input">
                                <label>Full name *</label>
                                <br />
                                <div>
                                    <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setFullName(e.target.value)} value={fullName}  ></input>

                                </div>
                            </div>

                            <div className="col-lg-6  class-input">
                                <label>Email *</label>
                                <br />
                                <div>
                                    <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setEmail(e.target.value)} value={email} ></input>

                                </div>
                            </div>
                            <div className="col-lg-6  class-input">
                                <label>Phone *</label>
                                <br />
                                <div>
                                    <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }} onChange={(e) => setPhone(e.target.value)} value={phone}></input>

                                </div>
                            </div>
                            <div className="col-lg-6  class-input">
                                <label>Note</label>
                                <br />
                                <div>
                                    <input type={'text'} placeholder="" style={{ width: '100%', position: 'relative' }}  ></input>

                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="col-lg-6  class-input">
                                <button style={{ color: "#fff" }} type="submit">Save Reservation</button>
                            </form>

                        </div>
                    </div>

                    <div className="table-responsive  align-items-center justify-content-center zone-reservation" style={{ width: '30%' }}>
                        <h5>AVAILABILITY</h5>
                        <div style={{ marginTop: '50px', fontWeight: 'bold' }}>Resident Area</div>
                        <table className="table border" >
                            <tbody>
                                <tr class="border" style={{}}>
                                    {residentSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ fontSize: '15px', width: '10px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: '10px' }} icon={faCarRear}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ fontSize: '15px', width: '10px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: '0px' }} icon={faBicycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {residentSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ fontSize: '15px', width: '10px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: '0px' }} icon={faMotorcycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>

                            </tbody>

                        </table>
                        <div style={{ backgroundColor: 'white', textAlign: 'left' }}>
                            <FontAwesomeIcon style={{ rotate: '180px', marginRight: '20px' }} icon={faRoad}></FontAwesomeIcon>
                            <span>Road</span>
                        </div>

                        <div style={{ marginTop: '10px', fontWeight: 'bold' }}>Customer Area</div>
                        <table class="table border">
                            <tbody>
                                <tr class="border">

                                    {customerSlot.slice(0, 10).map(shell => (
                                        <td className="border" key={shell.id} style={{ fontSize: '15px', width: '10px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: '10px' }} icon={faCarRear}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {customerSlot.slice(10, 20).map(shell => (
                                        <td className="border" key={shell.id} style={{ fontSize: '15px', width: '10px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: '0px' }} icon={faBicycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                                <tr class="border">

                                    {customerSlot.slice(20, 30).map(shell => (
                                        <td className="border" key={shell.id} style={{ fontSize: '15px', width: '10px', backgroundColor: shell.status_Slots === true ? 'rgba(250, 104, 104, 0.874)' : 'white' }}>
                                            <FontAwesomeIcon style={{ fontSize: '13px', paddingRight: '0px' }} icon={faMotorcycle}></FontAwesomeIcon>

                                            {shell.id_slot}
                                        </td>
                                    ))}
                                </tr>
                            </tbody>

                        </table>

                        <table class="table" style={{ marginTop: '60px', boxShadow: 'none' }}>
                            <tr className="">
                                <td style={{ width: '40px', height: '40px', backgroundColor: 'rgba(250, 104, 104, 0.874)', marginRight: '10px' }}>
                                    <span>Slot</span>
                                </td>
                                <td style={{ paddingLeft: '10px' }}>   Booked</td>

                                <td style={{ width: '40px', height: '40px', border: '1px solid black', marginRight: '10px' }}>
                                    <span>   Slot</span>
                                </td>
                                <td style={{ paddingLeft: '10px' }}>Null</td>
                            </tr>
                        </table>
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <span style={{ color: 'red' }}>You are not a customer of system! Please <Link to='/login'>Log in</Link> with 'Customer account' to booking a slot.</span>
                </div>
            )
            }



        </div>
    )

}
export default ReservationDetail;