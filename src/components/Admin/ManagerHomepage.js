import AdminFooter from "./AdminPageFooter";
import AdminHeader from "./AdminPageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpaceShuttle, faUserShield, faSquareParking, faFileInvoiceDollar, faUsers, faPersonShelter, faMoneyBill1Wave, faBuildingUser, faMoneyBillWave, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import './Admin.css'
import CustomerManagement from "./Sercurity/CustomerManagement";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ResidentManagement from "./Sercurity/ResidentManagement";
import BookingManagement from "./Sercurity/InvoiceManagement";
import InvoiceManagement from "./Sercurity/InvoiceManagement";
import SlotManagement from "./Sercurity/SlotManagement";
import SercurityManagement from "./BuildingManager/SercurityManagement";
import RevenueManagement from "./BuildingManager/RevenueManagement";
import BuildingManagerManagement from "./HeadManager/BuildingManagerManagement";
import RevenueAllManagement from "./HeadManager/RevenueAllBuilding";
import MoneyManagement from "./Sercurity/MoneyManagement";
import { url_api } from "../../API/api";

const ManagerHomePage = () => {
    const [logined, setLogined] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem('role'))
    const usenavigate = useNavigate();


    useEffect(() => {
        if ((logined === null || logined === '')) {
            usenavigate('/AdminLogin')
        }
    }, [logined])

    const [select, setSelect] = useState('Customers');

    const handleItemClick = (item) => {
        setSelect(item);
    };

    useEffect(() => {
        const navItems = document.querySelectorAll('.navbar-nav li');

        navItems.forEach(navItem => {
            navItem.addEventListener('click', () => {
                // Remove the active class from all li elements
                navItems.forEach(item => {
                    item.classList.remove('active');
                });

                // Add the active class to the clicked li element
                navItem.classList.add('active');

                // Call the handleItemClick function with the appropriate argument
                handleItemClick(navItem.innerText);
            });
        });

    })

    const exportFile =() =>{
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        window.open('https://tttm.up.railway.app/excel/export?time=' + currentTime)

        window.location.reload()
    }
    return (
        <div>

            <div className="admin-homepage-body" style={{ marginBottom: '150px' }}>

                <div class="nav admin-nav-custom flex-column ">
                    <div className="admin-nav-custom-title">
                        <p className='nav-link' style={{ fontSize: '25px', paddingTop: '20px', color: 'white' }} href="#"><FontAwesomeIcon style={{ paddingRight: '10px', paddingLeft: '6%' }} icon={faSpaceShuttle}></FontAwesomeIcon>Admin Page</p>
                    </div>
                    <label>Sercurity</label>
                    <ul className="navbar-nav" >

                        <li tabindex="0" class="nav-item " onClick={() => handleItemClick('Customers')}>
                            <a className="nav-link active " href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faUsers} />Customers</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faPersonShelter} />Residents</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faFileInvoiceDollar} />Invoices</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                            <a className="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faSquareParking}></FontAwesomeIcon>Slots</a>
                        </li>



                    </ul>
                    <label>Building Manager</label>
                    <ul className="navbar-nav" >

                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Sercurity')}>
                            <a class="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faUserShield} />Sercurity</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Revenue-building')}>
                            <a class="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faMoneyBill1Wave}></FontAwesomeIcon>Revenue</a>
                        </li>

                    </ul>
                    <label>Head Manager</label>
                    <ul className="navbar-nav" >

                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Building-manager')}>
                            <a class="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faBuildingUser}></FontAwesomeIcon>Building Manager</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Revenue-all')}>
                            <a class="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faMoneyBill1Wave}></FontAwesomeIcon>Revenue All</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Set-money')}>
                            <a class="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faMoneyBillWave}></FontAwesomeIcon>Set Money</a>
                        </li>
                        <li tabindex="0" class="nav-item" onClick={() => exportFile()}>
                            <a class="nav-link active" href="#"><FontAwesomeIcon style={{ paddingRight: '30px' }} icon={faFileArrowDown}></FontAwesomeIcon>Export Statistical</a>
                        </li>
                    </ul>
                </div>

                {select === 'Customers' ? <CustomerManagement></CustomerManagement>
                    : select === 'Residents' ? <ResidentManagement></ResidentManagement>
                        : select === 'Invoices' ? <InvoiceManagement></InvoiceManagement>
                            : select === 'Slots' ? <SlotManagement></SlotManagement>
                                : select === 'Sercurity' ? <SercurityManagement ></SercurityManagement>
                                    : select === 'Revenue-building' ? <RevenueManagement></RevenueManagement>
                                        : select === 'Building-manager' ? <BuildingManagerManagement></BuildingManagerManagement>
                                            : select === 'Revenue-all' ? <RevenueAllManagement></RevenueAllManagement>
                                                : select === 'Set-money' && <MoneyManagement></MoneyManagement>
                }



            </div>

        </div>
    );
}

export default ManagerHomePage;