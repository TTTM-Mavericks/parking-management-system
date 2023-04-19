
import React, { useState, useEffect, useRef, useCallback } from "react";

import { url_api } from "../../API/api";
import PanationResidentHistoryInvoice from "./PanationResidentHistoryInvoice";
import PaginationCustomerHistoryInvoice from "./PanationResidentHistoryInvoice";



const URL_HISTORY = url_api + "/expired/findAllInvoiceR/"


const HistoryResidentInvoiceManagement = () => {
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
        fetch(URL_HISTORY + idUser)
            .then(response => response.json())
            .then((data) => {
                setObj(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, []);



    const handleIdFilter = async (e) => {

        e.preventDefault();


    }

    useEffect(() => {
        const navItems = document.querySelectorAll('.nav-custom-sercurity li');

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                // Remove the active class from all li elements
                navItems.forEach(item => {
                    item.classList.remove('active');
                });

                // Add the active class to the clicked li element
                navItem.classList.add('active');

                // Call the handleSetBuilding function with the appropriate argument
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
                        <th>Id Payment</th>
                        <th>Start Date</th>
                        <th>Type Of Payment</th>
                        <th>Total Of Money</th>
                        <th>Status</th>
                    </tr>

                </thead>
                {idNull ?
                    (
                        <PanationResidentHistoryInvoice data={obj}></PanationResidentHistoryInvoice>
                    )
                    : (
                        <tbody>
                            <tr >
                                <td></td>
                                <td>{obj.id_R_Invoice}</td>
                                <td>{obj.id_Payment}</td>
                                <td>{obj.time}</td>
                                <td>{obj.typeOfPayment}</td>
                                <td>{obj.total_Of_Money} VND</td>
                                <td>{obj.status}</td>
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

export default HistoryResidentInvoiceManagement;
