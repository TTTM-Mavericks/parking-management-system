import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import BackgroundCommon from "../Complements/BackgroundCommon";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import './AdminLogin.css'
import { url_api } from "../../API/api";



const LOGIN_URL = url_api + "/headManager/findByIdManager/"
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const AdminLogin = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    useEffect(() => {

        usernameupdate(username)
    }, [username]);

    useEffect(() => {

        passwordupdate(password)
    }, [password]);



    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            console.log(username)
            fetch(LOGIN_URL + username, {
                headers: {
                    method: 'GET',
                    "X-Requested-With": "XMLHttpRequest",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin,X-Requested-With, Content-Type, Accept",
                    "Cache-Control": "no-cache",
                    mode: 'cors'
                }

            }).then((res) => {
                console.log(res.json)
                return res.json();

            }).then((resp) => {
                console.log(resp.password)
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        console.log(resp);

                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('fullname', resp.fullname);
                        sessionStorage.setItem('email', resp.email);
                        sessionStorage.setItem('phone', resp.phone);
                        sessionStorage.setItem('id', username);

                        if (resp.role == 3) {
                            console.log(resp.role)
                            toast.success('Success', resp.role);
                            localStorage.setItem('username', username);
                            localStorage.setItem('role', resp.role);
                            usenavigate('/ManagerHomepage')
                        } else if (resp.role == 2) {
                            console.log(resp.role)
                            toast.success('Success', resp.role);
                            localStorage.setItem('username', username);
                            localStorage.setItem('role', resp.role);
                            usenavigate('/ManagerHomepage')
                        } else if (resp.role == 1) {
                            console.log(resp.role)
                            toast.success('Success', resp.role);
                            localStorage.setItem('username', username);
                            localStorage.setItem('role', resp.role);
                            usenavigate('/ManagerHomepage')
                        } else {
                            toast.error('You are not a admin');
                        }

                    } else {
                        toast.error('Please Enter Correct Password');
                    }
                }
            })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    }

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            let inputobj = {
                "username": username,
                "password": password
            };
            fetch(LOGIN_URL, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                } else {
                    toast.success('Success');
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('jwttoken', resp.jwtToken);
                    usenavigate('/')
                }
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        if (resp.role === 3) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            usenavigate('/SercurityHomePage')
                        } else if (resp.role === 2) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            usenavigate('/BuildingManagerHomePage')
                        }
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <div className="container-login">
                    <div className="container-background" style={{ marginTop: '-80px', height: '720px', marginLeft:'300px' }}>
                        <img style={{ position: "absolute", zIndex: "10", marginTop: "110px" }} src="./assets/img/man.png"></img>
                    </div>

                    <div className="login-form">
                        <h2 style={{}}>Admin Log in</h2>
                        <form onSubmit={ProceedLogin}>
                            <input placeholder="User Name" style={{ marginTop: "30px" }} value={username} onChange={e => usernameupdate(e.target.value)} ></input>
                            <input placeholder="Password" type="password" value={password} onChange={e => passwordupdate(e.target.value)} ></input>
                            <button style={{ color: "#fff" }} type="submit">Log In</button>

                            <Link to={'/Forgotten-pwd'}>Forgotten your password?</Link>

                            <br />
                            <div className="anyaccount" ><span>Don’t have any account?</span></div>
                            <Link to={'/register'}> <button className="btn-signup"> <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />Sign Up for free</button></Link>

                        </form>

                    </div>


                </div>

            </div>
        </HelmetProvider>

    );
}

export default AdminLogin;