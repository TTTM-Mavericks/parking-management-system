import React, { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMemory } from "@fortawesome/free-solid-svg-icons";
import '../Admin/Admin.css'

const AdminHub = () => {

    const [allSideMenu, setAllSideMenu] = useState([]);
    const [menuBar, setMenuBar] = useState(null);
    const [sidebar, setSidebar] = useState(null);
    const [searchButton, setSearchButton] = useState(null);
    const [searchButtonIcon, setSearchButtonIcon] = useState(null);
    const [searchForm, setSearchForm] = useState(null);
    const [switchMode, setSwitchMode] = useState(false);

    useEffect(() => {
        const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
        setAllSideMenu(allSideMenu);

        const menuBar = document.querySelector('#content nav .bx.bx-menu');
        setMenuBar(menuBar);

        const sidebar = document.getElementById('sidebar');
        setSidebar(sidebar);

        const searchButton = document.querySelector('#content nav form .form-input button');
        setSearchButton(searchButton);

        const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
        setSearchButtonIcon(searchButtonIcon);

        const searchForm = document.querySelector('#content nav form');
        setSearchForm(searchForm);

        const switchMode = document.getElementById('switch-mode');
        setSwitchMode(switchMode);

        if (window.innerWidth < 768) {
            sidebar.classList.add('hide');
        } else if (window.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }

        return () => {
            allSideMenu.forEach((item) => {
                item.removeEventListener('click', handleClick);
            });
            // menuBar.removeEventListener('click', handleMenuClick);
            // searchButton.removeEventListener('click', handleSearchClick);
            // switchMode.removeEventListener('change', handleSwitchModeChange);
            // window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        allSideMenu.forEach((item) => {
            item.addEventListener('click', handleClick);
        });
        // menuBar.addEventListener('click', handleMenuClick);
        // searchButton.addEventListener('click', handleSearchClick);
        // switchMode.addEventListener('change', handleSwitchModeChange);
        // window.addEventListener('resize', handleWindowResize);
    }, [allSideMenu, menuBar, searchButton, switchMode]);

    const handleClick = (e) => {
        const li = e.target.parentElement;
        allSideMenu.forEach((i) => {
            i.parentElement.classList.remove('active');
        });
        li.classList.add('active');
    };

    const handleMenuClick = () => {
        sidebar.classList.toggle('hide');
    };

    const handleSearchClick = (e) => {
        if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if (searchForm.classList.contains('show')) {
                searchButtonIcon.classList.replace('bx-search', 'bx-x');
            } else {
                searchButtonIcon.classList.replace('bx-x', 'bx-search');
            }
        }
    };

    const handleWindowResize = () => {
        if (window.innerWidth > 576) {
            searchButtonIcon.classList.replace('bx-x', 'bx-search');
            searchForm.classList.remove('show');
        }
    };

    const handleSwitchModeChange = () => {
        if (switchMode.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    };

    return (
        <div>
            <section id="sidebar">
                <a href="#" class="brand">
                    <i class='bx bxs-smile'></i>
                    <span class="text">AdminHub</span>
                </a>
                <ul class="side-menu top">
                    <li class="active" onClick={handleClick}>
                        <a href="#" >
                            <i class='bx bxs-dashboard' ></i>
                            <span class="text">Dashboard</span>
                        </a>
                    </li>
                    <li onClick={handleClick}>
                        <a href="#"  >
                            <i class='bx bxs-shopping-bag-alt' ></i>
                            <span class="text">My Store</span>
                        </a>
                    </li>
                    <li onClick={handleClick}>
                        <a href="#" >
                            <i class='bx bxs-doughnut-chart' ></i>
                            <span class="text">Analytics</span>
                        </a>
                    </li>
                    <li onClick={handleClick}>
                        <a href="#" >
                            <i class='bx bxs-message-dots' ></i>
                            <span class="text">Message</span>
                        </a>
                    </li>
                    <li onClick={handleClick}>
                        <a href="#" >
                            <i class='bx bxs-group' ></i>
                            <span class="text">Team</span>
                        </a>
                    </li>
                </ul>
                <ul class="side-menu">
                    <li>
                        <a href="#" onClick={handleClick}>
                            <i class='bx bxs-cog' ></i>
                            <span class="text">Settings</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="logout" onClick={handleClick}>
                            <i class='bx bxs-log-out-circle' ></i>
                            <span class="text">Logout</span>
                        </a>
                    </li>
                </ul>
            </section>





            <section id="content">

                <nav>
                    <a onClick={handleMenuClick}>
                    <FontAwesomeIcon  style={{fontSize:'15px'}} icon={faMemory} ></FontAwesomeIcon>
                    </a>
                    
                    <a href="#" class="nav-link">Categories</a>
                    <form action="#">
                        <div class="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden />
                    <label onClick={handleSwitchModeChange} for="switch-mode" class="switch-mode"></label>
                    <a href="#" class="notification">
                        <i class='bx bxs-bell' ></i>
                        <span class="num">8</span>
                    </a>
                    <a href="#" class="profile">
                        <img src=" " />
                    </a>
                </nav>

                <main>
                    <div class="head-title">
                        <div class="left">
                            <h1>Dashboard</h1>
                            <ul class="breadcrumb">
                                <li>
                                    <a href="#">Dashboard</a>
                                </li>
                                <li><i class='bx bx-chevron-right' ></i></li>
                                <li>
                                    <a class="active" href="#">Home</a>
                                </li>
                            </ul>
                        </div>
                        <a href="#" class="btn-download">
                            <i class='bx bxs-cloud-download' ></i>
                            <span class="text">Download PDF</span>
                        </a>
                    </div>

                    <ul class="box-info">
                        <li>
                            <i class='bx bxs-calendar-check' ></i>
                            <span class="text">
                                <h3>1020</h3>
                                <p>New Order</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-group' ></i>
                            <span class="text">
                                <h3>2834</h3>
                                <p>Visitors</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bxs-dollar-circle' ></i>
                            <span class="text">
                                <h3>$2543</h3>
                                <p>Total Sales</p>
                            </span>
                        </li>
                    </ul>


                    <div class="table-data">
                        <div class="order">
                            <div class="head">
                                <h3>Recent Orders</h3>
                                <i class='bx bx-search' ></i>
                                <i class='bx bx-filter' ></i>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date Order</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src=" " />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src=" " />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src=" " />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status process">Process</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src=" " />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status pending">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src=" " />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td><span class="status completed">Completed</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        
                    </div>
                </main>

            </section>
        </div>
    );
}




export default AdminHub;