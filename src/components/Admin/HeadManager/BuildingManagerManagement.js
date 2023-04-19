import '../Admin.css'
import React, { useState, useEffect, useRef } from "react";

import PaginationUser from '../Sercurity/PaginationUser';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PopUpEditUser from '../Sercurity/Popup/PopUpEditUser';
import AdminHeader from '../AdminPageHeader';
import {url_api} from "../../../API/api";


const URL_Find_All = url_api+"/MoreFeatureGet/findByIdCustomer?idCustomer=";
const URL = url_api+"/headManager/findAllBuildingManager";
const URL_PUT = url_api+"/buildingManager/BanOrUnbanSecurity?idUser=";

const REGISTER_URL = url_api+"/headManager/createBuildingManager";
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;

const BuildingManagerManagement = () => {
    const [resident, setResident] = useState([]);
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

    const [idUser, setIdUser] = useState('');

    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);
    const togglePopupCreateRes = () => {
        setShowPopupCreateRes(!showPopupCreateRes);
    };

    const set = (item) => {
        setIdUser(item)
    }


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
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setResident(data)
            })
            .catch((err) => {
                console.log(toast);
                toast.error('Failed: ' + err.message);
                localStorage.setItem("msg", 'Failed: ' + err.message)

            });
    }, [])

    const handleSetBuilding = (item) => {
        setBuilding(item)
    }

    const handleIdFilter = async (e) => {
        e.preventDefault();
        if (id === null || id === '') {
            fetch(URL + building)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(true);
                    setResident(data)
                })
                .catch((err) => {
                    console.log(toast);
                    toast.error('Failed: ' + err.message);
                    localStorage.setItem("msg", 'Failed: ' + err.message)
                });

        }
        else {
            fetch(URL_Find_All + id)
                .then(response => response.json())
                .then((data) => {
                    setIdNull(false);
                    setResident(data)
                })
                .catch((err) => {
                    console.log(toast);
                    toast.error('Failed: ' + err.message);
                    localStorage.setItem("msg", 'Failed: ' + err.message)
                    window.location.href = '/AdminHomePage'
                });
        }

    }

    const handleChangeStatus = (id, status) => {
        console.log(URL_PUT + id + '&status=' + !status)
        fetch(URL_PUT + id + '&status=' + status, {
            method: 'PUT'
        }).then((res) => {
            setSuccess(true);
            toast.success('Change successfully.');
        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });
    }

    return (
        <div className="admin-homepage-dashboard">
            <AdminHeader></AdminHeader>
            <form className='filter-id justify-content-center' onSubmit={handleIdFilter}>
                Filter by ID:
                <input type="text" onChange={e => setId(e.target.value)} />
                <button type='submit'>Search</button>
            </form>

            <table className="table ">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Id</th>
                        <th>Full name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>Email</th>
                        
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

                    
                    <th>
                        <form onSubmit={handleCreate}>
                            <button style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Create</button>
                        </form>
                    </th>
                </tr>
                {idNull ?
                    resident.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.fullname}</td>
                            <td>{item.dateofbirth}</td>
                            <td>{item.gender ? "Male" : "Female"}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                           
                            <td>
                                <form onSubmit={''}>
                                    <button className='save-edit' onClick={() => { togglePopupCreateRes(); set(item.id) }} style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Edit</button>
                                </form>
                                <PopUpEditUser idUser={idUser} handleClose={togglePopupCreateRes} show={showPopupCreateRes} role='Customer'></PopUpEditUser>
                            </td>


                        </tr>
                    ))

                    : (
                        <tbody><tr >
                            <td>1</td>
                            <td>{resident.id}</td>
                            <td>{resident.fullname}</td>
                            <td>{resident.dateofbirth}</td>
                            <td>{resident.gender ? "Male" : "Female"}</td>
                            <td>{resident.phone}</td>
                            <td>{resident.email}</td>

                            <td style={{ color: resident.status_Account === true ? '#118408' : '#E23F31', fontWeight: 'bold' }}>{resident.status_Account === true ? 'Active' : 'Ban'}</td>
                            <td>
                                <form>
                                    <button onClick={togglePopupCreateRes} style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', width: '55px', borderRadius: '2px' }}>Edit</button>
                                </form>
                            </td>
                        </tr>
                        </tbody>
                    )
                }
            </table>

        </div>
    );
}

export default BuildingManagerManagement;
