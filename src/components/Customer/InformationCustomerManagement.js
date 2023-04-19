import React, { Component, useEffect, useState } from 'react';
import { url_api } from '../../API/api';
import AdminHeader from '../Admin/AdminPageHeader';
import { toast } from "react-toastify";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faInfoCircle, faCircleUser, faPen } from "@fortawesome/free-solid-svg-icons";
import Calendar from 'react-calendar'

const URL = url_api + "/user/findById?id="
const URL_UPDATE = url_api + "/security/updateCustomer_Resident?idUser=";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;

const InformationCustomerManagement = () => {

    const [obj, setObj] = useState([]);
    const [id, setId] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    const [fullName, setFullName] = useState('');
    const [fullNameFocus, setFullNameFocus] = useState(false);

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

    const [idUser, setIdUser] = useState(sessionStorage.getItem('id'));
    const [nameUser, setNameUser] = useState('');


    const [show, setShow] = useState(false)



    useEffect(() => {
        fetch(URL + idUser)
            .then(response => response.json())
            .then((data) => {
                setObj(data)
                console.log(data);
            })
            .catch(error => console.error(error));
    }, []);





    useEffect(() => {
        const result = USER_REGEX.test(id);
        setValidName(result);

    }, [id])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        const result = PHONE_REGEX.test(phone);
        setValidPhone(result);
    })


    useEffect(() => {
        setFullName(fullName)

    }, [fullName])


    useEffect(() => {

        setBirthDay(birthday)

    }, [birthday])

    useEffect(() => {
        if (txtGender === 'female') {
            setGender(false)
        } else
            if (txtGender === 'male') {
                setGender(true)
            }
    }, [txtGender])

    useEffect(() => {
        setPhone(phone)

    }, [phone])

    useEffect(() => {
        if (checked != false) {

            setChecked(true);

        } else {
            setChecked(false);

        }
    }, [checked])


    useEffect(() => {
        setErrMsg('');

    }, [id, pwd])

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the valid value!';

        if (checked == null || checked === '') {
            isproceed = false;
            errormessage = 'You must agree to YourParkingSpace\'s terms of service & privacy policy';
        }

        if (!PHONE_REGEX.test(phone)) {
            isproceed = false;
            errormessage = 'Phone must be 10-12 numbers.';
        }

        if (!EMAIL_REGEX.test(email)) {
            isproceed = false;
            errormessage = 'Please enter the valid email!';

        }

        if (fullName === null || fullName === '') {
            isproceed = false;

        }
        if (!PWD_REGEX.test(pwd)) {
            isproceed = false;
            errormessage = 'Password must be: 8 to 30 characters! Must include uppercase and lowercase letters, a number and a special character!';

        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const password = pwd;
        const fullname = fullName;
        const dateofbirth = birthday;

        const regObj = { password, fullname, dateofbirth, gender, email, phone }



        if (IsValidate()) {
            console.log(regObj)


            fetch(URL_UPDATE + obj.id, {
                method: 'PUT',
                header: {
                    "Access-Control-Allow-Origin": URL_UPDATE,
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
                toast.success('Edit successfully.');

            }).catch((err) => {
                toast.error('Failed: ' + err.message);
            });
            setTimeout(function () {
                window.location.reload()
            }, 800);
        }
    }

    const showEdit = () => {
        setShow(!show)
    }




    return (
        <div className="admin-homepage-dashboard">
            <div>
                <FontAwesomeIcon style={{ fontSize: '150px', float: 'left', marginRight: '30px' }} icon={faCircleUser}></FontAwesomeIcon>
                <div>
                    <p style={{ fontSize: '50px', color: 'black', paddingTop: '10px' }}>
                        {obj.fullname}
                    </p>
                    <div style={{ fontSize: '15px', color: 'black', width: '800px' }}>
                        As a user, you can perform website functions such as booking, payment, and you can also register to become a resident or a VIP customer.
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', }}>
                <table className="table " style={{ width: '50%', marginLeft: '00%', marginTop: '80px' }}>
                    <thead>
                        <tr>
                            <th>Information</th>
                            <th>Detail</th>
                            <th style={{ cursor: 'pointer', width: '100px' }} > <button style={{ width: '160px' }} onClick={showEdit}> <FontAwesomeIcon icon={faPen}></FontAwesomeIcon> Edit Here</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Username</th>
                            <td>{obj.id} </td>
                            <th>

                            </th>
                        </tr>
                        <tr>
                            <th>Full name</th>
                            <td>{obj.fullname} </td>
                            {show === true && (
                                <th>
                                    <input style={{ width: '100%', borderRadius: '0px' }} onChange={(e) => setFullName(e.target.value)} type={'text'} />
                                </th>
                            )}

                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>********** </td>
                            {show === true && (

                                <th>
                                    <input style={{ width: '100%', borderRadius: '0px' }} type={'password'} onChange={(e) => setPwd(e.target.value)} />
                                </th>
                            )}
                        </tr>
                        <tr>
                            <th>Gender</th>
                            <td>{obj.gender ? "Female" : "Male"} </td>
                            {show === true && (
                                <th>
                                    <select style={{width:'100%'}} type="select" onChange={e => setTxtGender(e.target.value)} >
                                        <option value="female" className="gender">Female</option>
                                        <option value="male" className="gender">Male</option>
                                    </select>
                                </th>
                            )}
                        </tr>
                        <tr>
                            <th>Date of birth</th>
                            <td>{obj.dateofbirth} </td>
                            {show === true && (
                                <th>
                                    <input style={{ width: '100%', borderRadius: '0px' }} type={'date'} onChange={(e) => setBirthDay(e.target.value)} />
                                </th>
                            )}
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{obj.email} </td>
                            {show === true && (
                                <th>
                                    <input style={{ width: '100%', borderRadius: '0px' }} type={'text'} onChange={(e) => setEmail(e.target.value)} />
                                </th>
                            )}
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{obj.phone} </td>
                            {show === true && (
                                <th>
                                    <input style={{ width: '100%', borderRadius: '0px' }} type={'text'} onChange={(e) => setPhone(e.target.value)} />
                                </th>
                            )}
                        </tr>

                    </tbody>

                </table>
               
            </div>
            {show === true && (
                <button style={{ marginTop: '20px', width: '160px', marginLeft: '35%' }} onClick={ handleSubmit }>Save edit</button>
            )}
        </div>
    );

}

export default InformationCustomerManagement;