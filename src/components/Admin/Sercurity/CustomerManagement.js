
import './CommanDashBoard.css'
import React, { useState, useEffect, useRef } from "react";
import Pagination from '../../Complements/Pagination';
import PaginationUser from './PaginationUser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminHeader from '../AdminPageHeader';
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { url_api } from "../../../API/api";
import PopUpEditUser from './Popup/PopUpEditUser';

const URL_Find_All = url_api + "/MoreFeatureGet/findByIdCustomer?idCustomer=";
const URL = url_api + "/security/ListAllCustomerFromBuilding/";

const REGISTER_URL = url_api + "/security/createCustomer";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const ROLE = 'C'
const URL_CUSTOMER = url_api + "/security/updateCustomer_Resident?idUser=";

const CustomerManagement = () => {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [idSearch, setIdSearch] = useState('');
    const [idNull, setIdNull] = useState(true);
    const [building, setBuilding] = useState('A');

    const [id, setId] = useState('');
    const [validName, setValidName] = useState(false);


    const [pwd, setPwd] = useState('Aa@123456');
    const [validPwd, setValidPwd] = useState(true);


    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);


    const [fullName, setFullName] = useState('');


    const [birthday, setBirthDay] = useState(new Date());

    const [txtGender, setTxtGender] = useState('female')
    const [gender, setGender] = useState(false);

    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false)

    const [phone, setPhone] = useState('')
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [checked, setChecked] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [typeSearch, setTypeSearch] = useState('iduser')
    const [valueSearch, setValueSearch] = useState('');


    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);

    const togglePopupCreateRes = () => {

        setShowPopupCreateRes(!showPopupCreateRes);
    };

    useEffect(() => {
        setTypeSearch(typeSearch)
        setId(id)
        console.log("type: " + typeSearch + ", value: " + id)

        console.log('----------------------------------------------------------------------')
        console.log(url_api + "/security/searchUser?typeOfSearch=" + typeSearch + "&value=" + id)
    }, [typeSearch, id])


    useEffect(() => {
        const result = USER_REGEX.test(id);
        setValidName(result);
        // console.log(id)
    }, [id])

    useEffect(() => {
        setFullName(fullName)
        console.log(fullName)
    }, [fullName])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
        console.log(email)
    }, [email])

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result);
        // console.log(phone)
    })

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);


    }, [pwd, matchPwd])



    useEffect(() => {

        setBirthDay(birthday)
        // console.log(birthday)
    }, [birthday])

    useEffect(() => {
        if (txtGender === 'female') {
            setGender(false)
        } else
            if (txtGender === 'male') {
                setGender(true)
            }
        console.log(txtGender)
        // console.log(gender)  
    }, [txtGender])

    useEffect(() => {
        setPhone(phone)

    }, [phone])





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

        if (!USER_REGEX.test(id)) {
            isproceed = false;
            errormessage = 'User name: must be 4 to 24 characters. Must begin with a letter. Letters, number, underscores, hyphen are allowed.'
        }
        if (fullName === null || fullName === '') {
            isproceed = false;

        }


        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        const password = pwd;
        const fullname = fullName;
        const dateofbirth = birthday;

        const regObj = { id, password, fullname, dateofbirth, gender, email, phone }
        console.log(regObj)


        if (IsValidate()) {

            fetch(REGISTER_URL, {
                method: 'POST',
                header: {
                    "Access-Control-Allow-Origin": REGISTER_URL,
                    "Accept": "*/*",
                    "Content-Type": "application/text",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },

                body: JSON.stringify(regObj)


            }).then((res) => {

                console.log(JSON.stringify(regObj))
                console.log(res);
                setSuccess(true);
                toast.success('Register successfully.');
            }).catch((err) => {
                toast.error('Failed: ' + err.message);
            });
        }

    }

    useEffect(() => {
        setIdSearch(idSearch);
    }, [idSearch])

    useEffect(() => {
        setBuilding(building)
    }, [building])

    useEffect(() => {
        fetch(URL + building)
            .then(response => response.json())
            .then((data) => {
                setCustomers(data)
            })
            .catch((err) => {
                console.log(toast);
                toast.error('Failed: ' + err.message);
                localStorage.setItem("msg", 'Failed: ' + err.message)
                window.location.href = '/AdminHomePage'
            });
    }, [building])

    const handleSetBuilding = (item) => {
        setBuilding(item)
    }

    const handleIdFilter = async (e) => {
        e.preventDefault();
        // if (id === null || id === '') {
        //     fetch(URL + building)
        //         .then(response => response.json())
        //         .then((data) => {
        //             setIdNull(true);
        //             setCustomers(data)
        //         })
        //         .catch((err) => {
        //             console.log(toast);
        //             toast.error('Failed: ' + err.message);
        //             localStorage.setItem("msg", 'Failed: ' + err.message)
        //         });

        // }
        // else {
        //     console.log('----------------------------------------------------------------------')
        //     console.log(url_api + "/security/searchUser?typeOfSearch=" + typeSearch + "email&value=" + id)
        //     fetch(url_api + "/security/searchUser?typeOfSearch=" + typeSearch + "email&value=" + id)
        //         .then(response => response.json())
        //         .then((data) => {
        //             setIdNull(false);
        //             setCustomers(data)
        //         })
        //         .catch((err) => {
        //             console.log(toast);
        //             toast.error('Failed: ' + err.message);
        //             localStorage.setItem("msg", 'Failed: ' + err.message)
        //             window.location.href = '/AdminHomePage'
        //         });
        // }

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
            <AdminHeader ></AdminHeader>

            <form className='filter-id justify-content-center' style={{ textAlign: 'left', marginTop: '30px', float: 'left' }} onSubmit={handleIdFilter}>
                Filter by ID:
                <select type="select" style={{ fontSize: '8px', height: '31px', width: '80px' }} >
                    <option value="female" className="gender">iduser</option>
                    <option value="male" className="gender">email</option>
                    <option value="male" className="gender">phone</option>
                </select>
                <input style={{ width: '40%' }} type="text" onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>
            <ul class="nav justify-content-center nav-custom nav-custom-sercurity">
                <li class="nav-item" onClick={() => handleSetBuilding('A')}>
                    <a class="nav-link" href="#"><FontAwesomeIcon style={{ paddingRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Zone A</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('B')}>
                    <a class="nav-link" href="#"><FontAwesomeIcon style={{ paddingRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Zone B</a>
                </li>
                <li class="nav-item" onClick={() => handleSetBuilding('C')}>
                    <a class="nav-link" href="#"><FontAwesomeIcon style={{ paddingRight: '10px' }} icon={faBuilding}></FontAwesomeIcon>Zone C</a>
                </li>
            </ul>





            <table className="table" >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Id</th>
                        <th>Full name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tr className='security-add-new'>
                    <th></th>
                    <th><input onChange={(e) => setId(e.target.value)}></input></th>
                    <th><input onChange={(e) => setFullName(e.target.value)}></input></th>
                    <th><input type="date" onChange={(e) => setBirthDay(e.target.value)}></input></th>
                    <th>
                        <select type="select" onChange={e => setTxtGender(e.target.value)} >
                            <option value="female" className="gender">Female</option>
                            <option value="male" className="gender">Male</option>
                        </select>
                    </th>
                    <th><input onChange={(e) => setPhone(e.target.value)}></input></th>
                    <th><input onChange={(e) => setEmail(e.target.value)}></input></th>

                    <th></th>
                    <th>
                        <form onSubmit={handleCreate}>
                            <button style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Create</button>
                        </form>
                    </th>
                </tr>

                {idNull ? (<PaginationUser data={customers} role={'C'}></PaginationUser>)

                    : (
                        <tbody><tr >
                            <td>1</td>
                            <td>{customers.id}</td>
                            <td>{customers.fullname}</td>
                            <td>{customers.dateofbirth}</td>
                            <td>{customers.gender ? "Male" : "Female"}</td>
                            <td>{customers.phone}</td>
                            <td>{customers.email}</td>

                            <td style={{ color: customers.status_Account === false ? '#118408' : '#E23F31', fontWeight: 'bold' }}>{customers.status_Account === false ? 'Active' : 'Ban'}</td>
                            <td>
                                <form>
                                    <button onClick={togglePopupCreateRes} style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Edit</button>
                                </form>
                            </td>
                        </tr>
                            <PopUpEditUser handleClose={togglePopupCreateRes} show={showPopupCreateRes} url={URL_CUSTOMER}></PopUpEditUser>
                        </tbody>
                    )
                }
            </table>









        </div>
    );
}

export default CustomerManagement;
