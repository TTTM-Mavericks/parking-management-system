import React, { useState, useEffect, useRef, useCallback } from "react";
import Slider from "../Complements/Slider"
import Header from "../Complements/Header";
import Footer from "../Complements/Footer";
import { url_api } from "../../API/api";



const URL = url_api + "/updatemoney/findAllMoney";

const Price = () => {
    const [username, setUsername] = useState(sessionStorage.getItem('username'));
    const [obj, setObj] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setObj(data)
            })
            .catch(error => console.error(error));
    }, [])
    return (
        <div className="body-reservation">
            <Header data={username}></Header>
            <Slider></Slider>
            <table className="table" style={{ width: '60%', margin: '0 auto', marginTop: '50px', marginLeft: '10%' }}>
                <tr>
                    <th style={{color:'#D82206'}}>
                        The price can be changed, but it should not be increased by more than 10% on weekends and holidays.
                    </th>
                </tr>
            </table>

            <table className="table" style={{ width: '30%', marginLeft:'12%', marginTop: '48px', boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px', float:'left' }}>
                <thead style={{ width: '30%' }}>
                    <tr>
                        <th>Type of money</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                    <tr style={{ marginTop: '15px' }}>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>car_MONEY_BY_HOUR</th>
                        <td>{obj.car_MONEY_BY_HOUR} VND / Hour</td>

                    </tr>

                    <tr>
                        <th>moto_MONEY_BY_HOUR</th>
                        <td>{obj.moto_MONEY_BY_HOUR} VND / Hour</td>

                    </tr>

                    <tr>
                        <th>bike_MONEY_BY_HOUR</th>
                        <td>{obj.bike_MONEY_BY_HOUR} VND / Hour</td>

                    </tr>

                    <tr style={{ marginTop: '15px' }}>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>car_MONEY_BY_DAY</th>
                        <td>{obj.car_MONEY_BY_DAY} VND / Day</td>

                    </tr>

                    <tr>
                        <th>moto_MONEY_BY_DAY</th>
                        <td>{obj.moto_MONEY_BY_DAY} VND / Day</td>

                    </tr>

                    <tr>
                        <th>bike_MONEY_BY_DAY</th>
                        <td>{obj.bike_MONEY_BY_DAY} VND / Day</td>

                    </tr>

                    <tr style={{ marginTop: '15px' }}>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>car_MONEY_BY_MONTH</th>
                        <td>{obj.car_MONEY_BY_MONTH} VND / Month</td>

                    </tr>

                    <tr>
                        <th>moto_MONEY_BY_MONTH</th>
                        <td>{obj.moto_MONEY_BY_MONTH} VND / Month</td>

                    </tr>

                    <tr>
                        <th>bike_MONEY_BY_MONTH</th>
                        <td>{obj.bike_MONEY_BY_MONTH} VND / Month</td>

                    </tr>


                </tbody>


            </table>

            <table className="table" style={{ width: '30%', margin: '0 auto', marginTop: '50px', boxShadow: 'rgba(0, 0, 0, 0.14) 0px 3px 8px',  }}>
                <thead style={{ width: '30%' }}>
                    <tr>
                        <th>Type of Fee</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody >
                    <tr style={{ marginTop: '15px' }}>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>car_MONEY_BY_HOUR</th>
                        <td>{obj.car_MONEY_BY_HOUR*1.5} VND / Hour</td>

                    </tr>

                    <tr>
                        <th>moto_MONEY_BY_HOUR</th>
                        <td>{obj.moto_MONEY_BY_HOUR*1.5} VND / Hour</td>

                    </tr>

                    <tr>
                        <th>bike_MONEY_BY_HOUR</th>
                        <td>{obj.bike_MONEY_BY_HOUR*1.5} VND / Hour</td>

                    </tr>

                    <tr style={{ marginTop: '15px' }}>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>car_MONEY_BY_DAY</th>
                        <td>{obj.car_MONEY_BY_DAY*1.5} VND / Hour</td>

                    </tr>

                    <tr>
                        <th>moto_MONEY_BY_DAY</th>
                        <td>{obj.moto_MONEY_BY_DAY*1.5} VND / Hour</td>

                    </tr>

                    <tr>
                        <th>bike_MONEY_BY_DAY</th>
                        <td>{obj.bike_MONEY_BY_DAY*1.5} VND / Hour</td>

                    </tr>

                    <tr style={{ marginTop: '15px' }}>
                        <td></td>
                        <td></td>
                    </tr>

                    <tr>
                        <th>car_MONEY_BY_MONTH</th>
                        <td>{obj.car_MONEY_BY_MONTH*1.5} VND / Day</td>

                    </tr>

                    <tr>
                        <th>moto_MONEY_BY_MONTH</th>
                        <td>{obj.moto_MONEY_BY_MONTH*1.5} VND / Day</td>

                    </tr>

                    <tr>
                        <th>bike_MONEY_BY_MONTH</th>
                        <td>{obj.bike_MONEY_BY_MONTH*1.5} VND / Day</td>

                    </tr>


                </tbody>


            </table>

            <Footer></Footer>
        </div>
    )
}

export default Price;