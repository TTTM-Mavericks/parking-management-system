import '../Admin.css'
import React, { useState, useEffect, useRef, useCallback } from "react";
import PaginationInvoice from './PaginationInvoice';
import './CommanDashBoard.css'
import AdminHeader from '../AdminPageHeader';
import {url_api} from "../../../API/api";

const URL_Find_C_ID = url_api+"/security/searchCustomerInvoiceId/";
const URL_Find_R_ID = url_api+"/security/searchResidentInvoiceId/";
const URL_R = url_api+"/security/findAllResidentInvoice"
const URL_C = url_api+"/security/findAllCustomerInvoice"


const InvoiceManagement = () => {
    const [obj, setObj] = useState([]);
    const [id, setId] = useState('');
    const [idNull, setIdNull] = useState(true);
    const [user, setUser] = useState('Resident');
    const [URL, setURL] = useState(URL_R);
    const [URLby, setURLby] = useState('');

    const handleSetBuilding = useCallback((item) => {
        setUser(item);
    }, []);



    useEffect(() => {
        if (user === 'Customer') {

            setURL(URL_C)
            setURLby(URL_Find_C_ID)
            console.log(URL_C)
            console.log(user);
        }
        else {
            setURL(URL_R)
            setURLby(URL_Find_R_ID)
            console.log(URL_R)
            console.log(user);
        }

    }, [user])



    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setObj(data);
                console.log(data);
            })
            .catch(error => console.error(error));
    }, [URL]);



    const handleIdFilter = async (e) => {

        e.preventDefault();
        if (id === null || id === '') {

            if (user === 'Customer') {

                setURL(URL_C)
                console.log(URL)
                console.log(user);
            }
            else {
                setURL(URL_R)
                console.log(URL)
                console.log(user);
            }
            fetch(URL)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(true);
                    setObj(data)
                    console.log(data)
                })
                .catch(error => console.error(error));
        }
        else {

            console.log(URLby + id)
            fetch(URLby + id)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(false);
                    setObj(data)
                    console.log(data)
                })
                .catch(error => console.error(error));

        }

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
        <AdminHeader></AdminHeader>
            <form className='filter-id justify-content-center' style={{ textAlign: 'left', marginTop: '30px', float: 'left', marginRight:'230px' }}  onSubmit={handleIdFilter}>
                Filter by ID:
                <input  type="text" onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
            <ul class="nav justify-content-center nav-custom nav-custom-sercurity  " >
                <li class="nav-item" onClick={() => handleSetBuilding('Resident')}>
                    <a class="nav-link" href="#">Resident</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('Customer')}>
                    <a class="nav-link" href="#">Customer</a>
                </li>

            </ul>
            

            <table className="table ">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Id Invoice</th>
                        <th>Id Payment</th>
                        <th>{user === 'Resident' ? 'Id_Resident' : 'Id_Customer'}</th>
                        <th>Type Of Payment</th>
                        
                        <th>Total Of Money</th>
                        <th style={{textAlign:'center'}}>Status</th>
                        
                    </tr>

                </thead>
                {idNull ?
                    (
                        <PaginationInvoice data={obj} user={user}></PaginationInvoice>
                    )
                    : (
                        <tbody>
                            <tr >
                                <td></td>
                                <td>{user === 'Customer' ? obj.id_C_Invoice : obj.id_R_Invoice}</td>
                                <td>{obj.id_Payment}</td>
                                <td>{user === 'Customer' ? obj.id_Customer : obj.id_Resident}</td>
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

export default InvoiceManagement;
