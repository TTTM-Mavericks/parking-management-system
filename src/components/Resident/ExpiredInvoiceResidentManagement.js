
import React, { useState, useEffect, useRef, useCallback } from "react";

import AdminHeader from '../Admin/AdminPageHeader';
import PaginationHistoryInvoice from "./PanationResidentHistoryInvoice";
import { url_api } from "../../API/api";
import PaginationExpiredInvoice from "./PaginationExpriedResidentInvoice";
import PaginationExpiredCustomerInvoice from "./PaginationExpriedResidentInvoice";




const URL_HISTORY = url_api + "/expired/checkExpiredR/"


const ExpiredInvoiceResidentManagement = () => {
    const [obj, setObj] = useState([]);
    const [id, setId] = useState('');
    const [idNull, setIdNull] = useState(true);
    const [user, setUser] = useState('Resident');
    const [URLby, setURLby] = useState('');
    const [role, setRole] = useState(sessionStorage.getItem('role'));
    const [idUser, setIdUser] = useState(sessionStorage.getItem('id'));

    const handleSetBuilding = useCallback((item) => {
        setUser(item);
    }, []);


    useEffect(() => {
        console.log(URL_HISTORY + idUser);
        const currentDate = new Date(Date.now());
        const formattedDate = currentDate.toISOString().substr(0, 10);
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        const regObj = { currentTime: currentTime };
        console.log(JSON.stringify(regObj));
        fetch(URL_HISTORY + idUser + "?time=" + currentTime, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": URL_HISTORY + idUser,
                Accept: "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        })
            .then((res) => res.json())
            .then((data) => {
                setObj(data);
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
                
            });
    }, []);


    useEffect(() => {
        const navItems = document.querySelectorAll('.nav-custom-sercurity li');

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
               
                navItems.forEach(item => {
                    item.classList.remove('active');
                });

                
                navItem.classList.add('active');
                handleSetBuilding(navItem.innerText.charAt(navItem.innerText.length - 1));
            });
        });
    }, [])

    return (
        <div className="admin-homepage-dashboard">



            <table className="table ">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Id Invoice</th>
                        <th>End time</th>
                        <th>Current time</th>
                        <th>Expired</th>
                        <th>Fine</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>

                </thead>
                {idNull ?
                    (
                        <PaginationExpiredCustomerInvoice data={obj}></PaginationExpiredCustomerInvoice>
                    )
                    : (
                        <tbody>
                            <tr >
                                <td></td>
                                <td>{obj.id_Payment}</td>
                                <td>{obj.id_R_Invoice}</td>
                                <td>{obj.typeOfPayment}</td>
                                <td>{obj.time}</td>
                                <td>{obj.total_Of_Money}</td>
                                <td>{obj.status ? "Complete" : "Not Complete"}</td>
                                <td>
                                    <form>
                                        <button style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Edit</button>
                                    </form>
                                </td>
                            </tr>
                        </tbody>


                    )}

            </table>
        </div>
    );
}

export default ExpiredInvoiceResidentManagement;
