import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { json, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BackgroundCommon from "./BackgroundCommon";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import axios from "../api/axios";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";
import { formToJSON } from "axios";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;
const REGISTER_URL = "https://parkingsystem.pagekite.me/ParkingManagement/api/user/addNewAccount";
// const REGISTER_URL = "https://1525-27-74-221-84.ap.ngrok.io/user/save"
// const REGISTER_URL = "http://localhost:5000/users"


const Register = () => {

    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [id, setId] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [fullName, setFullName] = useState('')
    const [fullNameFocus, setFullNameFocus] = useState(false)

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

    useEffect(() => {
        userRef.current.focus();
    }, [])

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
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);


    }, [pwd, matchPwd])

    useEffect(() => {
        setFullName(fullName)

    }, [fullName])


    useEffect(() => {

        setBirthDay(birthday)

    }, [birthday])

    useEffect(()=>{
        if(txtGender === 'female'){
            setGender(false)
        } else
        if(txtGender === 'male'){
            setGender(true)
        }
    },[txtGender])

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

    }, [id, pwd, matchPwd])

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

        if (!USER_REGEX.test(id)) {
            isproceed = false;
            errormessage = 'User name: must be 4 to 24 characters. Must begin with a letter. Letters, number, underscores, hyphen are allowed.'
        }
        if (fullName === null || fullName === '') {
            isproceed = false;

        }
        if (!PWD_REGEX.test(pwd)) {
            isproceed = false;
            errormessage = 'Password must be: 8 to 30 characters! Must include uppercase and lowercase letters, a number and a special character!';

        }

        if (!validMatch) {
            isproceed = false;
            errormessage = 'Must match the first password input field!';

        }


        if (!isproceed) {
            toast.warning(errormessage)
        } else
            return isproceed;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        //if button anabled with js hack
        const regObj = { id, pwd, fullName, birthday, gender, email, phone }
        const regObj1 = {
            "id": id,
            "pwd": pwd,
            "fullName": fullName,
            "birthday": birthday,
            "gender": gender,
            "email": email,
            "phone": phone
        }
        // if(IsValidate()){
        //     const response = await axios.post(REGISTER_URL,
        //             JSON.stringify(regObj),
        //             {
        //                 headers: {'Content-Type' : 'application/json'},
        //                 withCredentials: true
        //             }
        //         );
        //         console.log(response.data)
        //         setSuccess(true);

        // }

        // if (IsValidate()) {

        // axios.post(REGISTER_URL,
        //     {
        //         data:JSON.stringify(regObj),
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             withCredentials: false,
        //         }


        // axios({
        //     method: 'post',
        //     url: REGISTER_URL,
        //     data: JSON.stringify(regObj),

        //     config: {
        //         header: {
        //             'Accept': 'application/json, */*',
        //             'Content-Type': 'application/json-patch+json',
        //             'Connection': 'keep-alive',
        //             'Content-Encoding': 'gzip',
        //             'Content-Encoding': 'compress',
        //             'Content-Encoding': 'deflate',
        //             'Content-Encoding': 'br'

        //         }
        //     }
        // }).then((res) => {
        //     console.log(JSON.stringify(regObj))
        //     console.log(res);
        //     setSuccess(true);
        //     toast.success('Register successfully.');
        //     navigate('/Login');
        // }).catch((err) => {
        //     toast.error('Failed: ' + err.message);
        // });

        if (IsValidate()) {

            fetch(REGISTER_URL, {
                // mode: 'no-cors',
                // cache: 'no-cache',
                method: 'POST',
                header: {
                    // 'Accept': '*/*',   
                    // 'Accept': 'application/json', 
                    // 'Content-Type': 'application/json',
                    "Accept": "*/*",
                    "Content-Type": "application/text",
                    "X-Requested-With": "XMLHttpRequest",
                    // "Connection": "close",
                    "Cache-Control": "no-cache",
                    // withCredentials: true, 
                    // crossorigin: true,
                    // credentials: "same-origin",
                    
                    // 'Accept-Encoding': 'gzip, deflate, br',
                    // 'accept' : '/'
                },

                body: JSON.stringify(regObj)


            }).then((res) => {

                console.log(JSON.stringify(regObj))
                console.log(res);
                setSuccess(true);
                toast.success('Register successfully.');
                navigate('/Login');
            }).catch((err) => {
                toast.error('Failed: ' + err.message);
            });
    }

}

return (
    <HelmetProvider>
        <> 
            <Helmet>
                <title>Register</title>
            </Helmet>
            <div className="container-register">
                <BackgroundCommon className="background-register"></BackgroundCommon>
                <div className="register-form">
                    {success ? (
                        <section>
                            <h1>Success!</h1>
                            <p>
                                <a href="#">Sign In</a>
                            </p>
                        </section>
                    ) : (
                        <section >
                            <p ref={errRef} className={errMsg ? "errMsg"
                                : "offScreen"} aria-live="assertive">{errMsg}</p>
                            <form onSubmit={handleSubmit} className="row">
                                <h2 style={{}}>Sign Up</h2>
                                <span style={{ marginBottom: "40px", display: "block" }}>Join over 1 million other drivers throughout the UK. Over 350,000 spaces and counting.</span>
                                {/* -------------------USER-NAME-------------------- */}
                                <div>
                                    <input
                                        placeholder="User Name *"
                                        type="text"
                                        id="username"
                                        className="col-sm-4"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setId(e.target.value)}
                                        required
                                        aria-invalid={validName ? "false" : "true"}
                                        aria-describedby="unidnote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />

                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !id ? "hide" : "invalid"} />

                                </div>
                                {/* -------------------FULL-NAME-------------------- */}
                                <div>
                                    <input
                                        placeholder="Full Name *"
                                        type="text"
                                        id="fullname"
                                        className="col-sm-4"
                                        autoComplete="off"
                                        onChange={(e) => setFullName(e.target.value)}
                                        required

                                    />
                                </div>
                                {/* -------------------PASSWORD-------------------- */}
                                <div className="row">
                                    <div className="col-sm-4 valid-pwd" id="password" style={{ marginRight: "20px" }}>
                                        <input
                                            placeholder="Password *"
                                            type="password"
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            required
                                            aria-invalid={validPwd ? "false" : "true"}
                                            aria-describedby="pwdnode"
                                            onFocus={() => setPwdFocus(true)}
                                            onBlur={() => setPwdFocus(false)}
                                        />
                                        <i><FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} /></i>
                                        <i><FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /></i>

                                    </div>

                                    {/* -------------------CONFIRM-PASSWORD-------------------- */}
                                    <div className="col-sm-4 valid-pwd">
                                        <input
                                            placeholder="Confirm Password *"
                                            type="password"
                                            id="confirm_password"

                                            onChange={(e) => setMatchPwd(e.target.value)}
                                            required
                                            aria-invalid={validMatch ? "false" : "true"}
                                            aria-describedby="confirmnode"
                                            onFocus={() => setMatchFocus(true)}
                                            onBlur={() => setMatchFocus(false)}
                                        />

                                        <i><FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} /></i>
                                        <i><FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /></i>
                                    </div>

                                </div>

                                {/* -------------------BIRTHDAY-------------------- */}
                                <div className="col-sm-4" style={{ marginRight: "80px", color: "#8AA4B3" }}>
                                    <input
                                        placeholder="Birth Day"
                                        type="date"
                                        id="birthday"

                                        autoComplete="off"
                                        onChange={(e) => setBirthDay(e.target.value)}
                                    />

                                </div>
                                {/* -------------------GENDER-------------------- */}
                                <div className="input-gender col-sm-4 ">

                                    <input style={{ float: "left", marginLeft: "-10px" }} type="radio" checked={txtGender === 'female'} onChange={e => setTxtGender(e.target.value)} name="gender" value="female" ></input>
                                    <label className="gender"><span>Female</span></label>


                                    <input style={{ float: "left" }} type="radio" checked={txtGender === 'male'} onChange={e => setTxtGender(e.target.value)} name="gender" value="male" ></input>
                                    <label className="gender"><span>Male</span></label>



                                </div>
                                {/* -------------------EMAIL-------------------- */}
                                <div>
                                    <input
                                        placeholder="Email *"
                                        type="text"
                                        id="email"
                                        className="col-sm-4"
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        aria-invalid={validEmail ? "false" : "true"}
                                        aria-describedby="emailnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}

                                    />

                                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />

                                </div>


                                {/* -------------------PHONE-------------------- */}
                                <div>
                                    <input
                                        placeholder="Phone *"
                                        type="text"
                                        id="phone"
                                        className="col-sm-4"
                                        autoComplete="off"
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                        aria-invalid={validPhone ? "false" : "true"}
                                        aria-describedby="emailnote"
                                        onFocus={() => setPhoneFocus(true)}
                                        onBlur={() => setPhoneFocus(false)}

                                    />

                                    <FontAwesomeIcon className={validPhone ? "valid" : "hide"} icon={faCheck} />


                                    <FontAwesomeIcon className={validPhone || !phone ? "hide" : "invalid"} icon={faTimes} />

                                </div>


                                {/* -------------------PROMOTIONS-------------------- */}
                                <div className="col-sm-4 checkbox">
                                    <input type="checkbox" onChange={e => setChecked(e.target.value)} name="checked" value="checked"></input>
                                    <p > <a href="#" style={{ color: "black", textDecoration: "none" }}>Opt-in here if you would like to be one of the first to hear about our new discounts & promotions</a></p>
                                </div>
                                {/* -------------------SIGNUP-BTN-------------------- */}
                                <div>
                                    <button className="btn-res col-sm-4" type="submit" >
                                        Sign Up
                                    </button>
                                </div>
                                {/* -------------------OTHER-------------------- */}
                                <div className="anyaccount" style={{ marginLeft: "60px", float: "left", textAlign: "center" }} ><span style={{ color: "black" }}>Already Registered?</span></div>
                                <Link to={'/login'}> <button className="btn-already-res"> <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />Log In</button></Link>

                                {/* <p>
                                Already Registered? <br />
                                <span className="line">

                                    <a style={{ color: "black" }} href="/Login">Sign In</a>
                                </span>
                            </p> */}

                            </form>

                        </section>
                    )}
                </div>

            </div>
        </>
    </HelmetProvider>

)

}

export default Register;