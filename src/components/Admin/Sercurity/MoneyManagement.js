import '../Admin.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import PaginationInvoice from './PaginationInvoice';
import './CommanDashBoard.css'
import Popup from './Popup/PopUpOpen';
import { toast } from "react-toastify";
import PopupInforSlot from './Popup/PopUpInforSlot';
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AdminHeader from '../AdminPageHeader';
import {url_api} from "../../../API/api";



const URL = url_api+"/updatemoney/findAllMoney";
const SAVE_URL = url_api+"/updatemoney/save";
const NUMBER_REGEX = /^[0-9]{10,12}$/;

const MoneyManagement = () => {

    const [obj, setObj] = useState([]);
    const [car_MONEY_BY_HOUR, set_Car_MONEY_BY_HOUR] = useState('');
    const [bike_MONEY_BY_HOUR, set_bike_MONEY_BY_HOUR] = useState('');
    const [moto_MONEY_BY_HOUR, set_moto_MONEY_BY_HOUR] = useState('');
    const [car_MONEY_BY_DAY, set_car_MONEY_BY_DAY] = useState('');
    const [bike_MONEY_BY_DAY, set_bike_MONEY_BY_DAY] = useState('');
    const [moto_MONEY_BY_DAY, set_moto_MONEY_BY_DAY] = useState('');
    const [car_MONEY_BY_MONTH, set_car_MONEY_BY_MONTH] = useState('');
    const [bike_MONEY_BY_MONTH, set_bike_MONEY_BY_MONTH] = useState('');
    const [moto_MONEY_BY_MONTH, set_moto_MONEY_BY_MONTH] = useState('');

    useEffect(() => {
        set_Car_MONEY_BY_HOUR(car_MONEY_BY_HOUR)
    }, [car_MONEY_BY_HOUR])

    useEffect(() => {
        set_bike_MONEY_BY_HOUR(bike_MONEY_BY_HOUR)
    }, [bike_MONEY_BY_HOUR])

    useEffect(() => {
        set_moto_MONEY_BY_HOUR(moto_MONEY_BY_HOUR)
    }, [moto_MONEY_BY_HOUR])

    useEffect(() => {
        set_car_MONEY_BY_DAY(car_MONEY_BY_DAY)
    }, [car_MONEY_BY_DAY])

    useEffect(() => {
        set_bike_MONEY_BY_DAY(bike_MONEY_BY_DAY)
    }, [bike_MONEY_BY_DAY])

    useEffect(() => {
        set_moto_MONEY_BY_DAY(moto_MONEY_BY_DAY)
    }, [moto_MONEY_BY_DAY])

    useEffect(() => {
        set_car_MONEY_BY_MONTH(car_MONEY_BY_MONTH)
    }, [car_MONEY_BY_MONTH])

    useEffect(() => {
        set_bike_MONEY_BY_MONTH(bike_MONEY_BY_MONTH)
    }, [bike_MONEY_BY_MONTH])

    useEffect(() => {
        set_moto_MONEY_BY_MONTH(moto_MONEY_BY_MONTH)
    }, [moto_MONEY_BY_MONTH])

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setObj(data)
            })
            .catch(error => console.error(error));
    }, [])

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the valid value!';


        if (!NUMBER_REGEX.test(car_MONEY_BY_HOUR)) {
            isproceed = false;
            errormessage = 'Money must be number';
        }

        if (!NUMBER_REGEX.test(bike_MONEY_BY_HOUR)) {
            isproceed = false;
            errormessage = 'Money must be number';
        }

        if (!NUMBER_REGEX.test(moto_MONEY_BY_HOUR)) {
            isproceed = false;
            errormessage = 'Money must be number';
        }



        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const car_money_per_hour = car_MONEY_BY_HOUR;
        const moto_money_per_hour = moto_MONEY_BY_HOUR;
        const bike_money_per_hour = bike_MONEY_BY_HOUR

        const regObj = { car_money_per_hour, moto_money_per_hour, bike_money_per_hour }

        if(IsValidate){
            fetch(SAVE_URL, {
                method: 'POST',
                header: {
                    "Access-Control-Allow-Origin": SAVE_URL,
                    "Accept": "*/*",
                    "Content-Type": "application/text",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(regObj)
            }).then((res) => {
                console.log(JSON.stringify(regObj))
                console.log(res);
                toast.success('Register successfully.');
            }).catch((err) => {
                toast.error('Failed: ' + err.message);
            });
            setTimeout(function () {
                window.location.reload();
            }, 800);
        }

    }






    return (
        <div className="admin-homepage-dashboard">
            <AdminHeader>/</AdminHeader>
            <table className="table " style={{ width: '60%', margin: '0 auto', marginTop: '50px' }}>
                <thead>
                    <tr>
                        <th>Type of money</th>
                        <th>Cost</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>car_MONEY_BY_HOUR</th>
                        <td>{ Number(obj.car_MONEY_BY_HOUR).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'text'} onChange={(e) => set_Car_MONEY_BY_HOUR(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>bike_MONEY_BY_HOUR</th>
                        <td>{ Number(obj.bike_MONEY_BY_HOUR).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'text'} onChange={(e) => set_bike_MONEY_BY_HOUR(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>moto_MONEY_BY_HOUR</th>
                        <td>{ Number(obj.moto_MONEY_BY_HOUR).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'text'} onChange={(e) => set_moto_MONEY_BY_HOUR(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>car_MONEY_BY_DAY</th>
                        <td>{ Number(obj.car_MONEY_BY_DAY).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'hidden'} onChange={(e) => set_car_MONEY_BY_DAY(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>bike_MONEY_BY_DAY</th>
                        <td>{ Number(obj.bike_MONEY_BY_DAY).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'hidden'} onChange={(e) => set_bike_MONEY_BY_DAY(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>moto_MONEY_BY_DAY</th>
                        <td>{ Number(obj.moto_MONEY_BY_DAY).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'hidden'} onChange={(e) => set_moto_MONEY_BY_DAY(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>car_MONEY_BY_MONTH</th>
                        <td>{ Number(obj.car_MONEY_BY_MONTH).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'hidden'} onChange={(e) => set_car_MONEY_BY_MONTH(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>bike_MONEY_BY_MONTH</th>
                        <td>{ Number(obj.bike_MONEY_BY_MONTH).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'hidden'} onChange={(e) => set_bike_MONEY_BY_MONTH(e.target.value)} />
                        </th>
                    </tr>
                    <tr>
                        <th>moto_MONEY_BY_MONTH</th> 
                        <td>{ Number(obj.moto_MONEY_BY_MONTH).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                        <th>
                            <input style={{ width: '40%', borderRadius: '0px' }} type={'hidden'} onChange={(e) => set_moto_MONEY_BY_MONTH(e.target.value)} />
                        </th>
                    </tr>
                </tbody>

            </table>
            <button style={{marginLeft:'70%', marginTop:'20px' ,width:'128px'}} onClick={handleSubmit}>Save Money</button>

        </div>
    );
}

export default MoneyManagement;
