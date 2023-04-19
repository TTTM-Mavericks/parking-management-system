import './Complement.css'
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';


const Slider = () => {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [error, setError] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [success, setSuccess] = useState(false)
    const [role, setRole] = useState(sessionStorage.getItem("role"));

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


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (role === 'C') {
            if (success === true) {
                const regObj = { startDate, endDate, startTime, endTime }
                sessionStorage.setItem("startDate", startDate);

                sessionStorage.setItem("endDate", endDate);

                sessionStorage.setItem("startTime", startTime);
                sessionStorage.setItem("endTime", endTime);

                console.log(JSON.stringify(regObj));
                window.location.href = '/Reservation'
            }
            else toast.error('Invalid date or time, please check again!')

        } else toast.error('You must Login with \'Customer\' role to book!');


    }

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

    return (
        <div className="background" style={{ marginTop: '65px' }}>
            <div className="booking-in-homepage">
                <h2>BOOKING NOW</h2>
                <form onSubmit={handleSubmit}>
                    <div className="class-input">
                        <label>Start date *</label>
                        <br />
                        <div>
                            <input type={'date'} min={new Date().toISOString().split('T')[0]} style={{ width: '100%', position: 'relative' }} onChange={(e) => setStartDate(e.target.value)} ></input>

                        </div>
                    </div>
                    <div className="class-input">
                        <label>Start time *</label>
                        <br />
                        <select class="form-select" autoComplete="" onChange={(e) => setStartTime(e.target.value)}>
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
                    <div className="class-input">
                        <label>End date *</label>
                        <br />
                        <div>
                            <input type={'date'} min={new Date().toISOString().split('T')[0]} style={{ width: '100%', position: 'relative' }} onChange={(e) => setEndDate(e.target.value)}  ></input>

                        </div>
                    </div>
                    <div className="class-input">
                        <label>End time *</label>
                        <br />
                        <select class="form-select" autoComplete="off" onChange={(e) => setEndTime(e.target.value)}>
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


                    <button className='booknow-btn' style={{ color: "#fff" }} type="submit">Book now</button>

                </form>


            </div>
            <div className="describe-system" >
                <h1 style={{ color: 'white' }}>Booking Vehicle Parking Area</h1>
                <p style={{ color: 'white', fontSize: '20px' }}>The system provide the easily service to book a slot for your vehicle in my parking area
                    and pay the monthly invoice if you is a resident.</p>
            </div>
        </div>
    )
}

export default Slider;   