import AdminFooter from "../AdminPageFooter";
import AdminHeader from "../AdminPageHeader";
import '../Admin.css'

import './HeadManager.css'

import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

import BuildingManagerManagement from "./BuildingManagerManagement";
import RevenueAllManagement from "./RevenueAllBuilding";

const HeadManagerHomePage = () => {

    const usenavigate = useNavigate();
    const [select, setSelect] = useState('Sercurity');

    const [logined, setLogined] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem('role'))
    useEffect(() => {
        if ((logined === null || logined === '') ||role != 1) {
            usenavigate('/AdminLogin')
        }
    }, [logined])

    const handleItemClick = (item) => {
        setSelect(item);
        if (select == 'building-manager') {
            console.log(item)
            return <BuildingManagerManagement></BuildingManagerManagement>
        }

    };
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="admin-role">
                <div><h3>Head Manager Dashboard</h3></div>
            </div>
            {/* ------------------------------------------------ */}

            {/* ------------------------------------------------ */}
            <div className="admin-homepage-body" style={{ marginBottom: '150px' }}>

                <ul class="nav admin-nav-custom flex-column " style={{ marginTop: '100px' }}>

                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('building-manager')}>
                        <a class="nav-link active" href="#">Building Manager</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Revenue')}>
                        <a class="nav-link active" href="#">Revenue</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                        <a class="nav-link active" href="#">Invoices</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                        <a class="nav-link active" href="#">Slots</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>

                </ul>


                {select == 'building-manager' ? <BuildingManagerManagement></BuildingManagerManagement>
                    : <RevenueAllManagement></RevenueAllManagement>}

            </div>
            <div style={{ width: '100%', marginTop: '50px' }}>
                <AdminFooter></AdminFooter>
            </div>

        </div>
    );
}

export default HeadManagerHomePage;