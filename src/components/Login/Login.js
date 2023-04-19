import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import BackgroundCommon from "../Complements/BackgroundCommon";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { url_api } from "../../API/api"
import PopUpLoginGG from "./PopUp/PopUpLoginGG";
import './Login.css'

// const LOGIN_URL = "https://0c1a-42-118-112-251.ap.ngrok.io/ParkingManagement/api/user/getUser/";
const LOGIN_URL_GG = url_api + "/loginGoogle"

const LOGIN_URL = url_api + "/loginAccount?"
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;


const Login = () => {


    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const [role, setRole] = useState('');
    const [htmlContent, setHtmlContent] = useState('');
    const usenavigate = useNavigate();
    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);
    const [flag, setFlag] = useState(false);
    const [obj, setObj] = useState([]);


    const togglePopupCreateRes = () => {

        setShowPopupCreateRes(!showPopupCreateRes);
    };


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
            fetch(LOGIN_URL + "username=" + username + "&password=" + password, {
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
                        sessionStorage.setItem('username', username);
                        sessionStorage.setItem('fullname', resp.fullname);
                        sessionStorage.setItem('email', resp.email);
                        sessionStorage.setItem('phone', resp.phone);
                        sessionStorage.setItem('id', username);
                        localStorage.setItem('id', username);
                        console.log(resp);
                        window.location.href = '/'
                        if (resp.message === 'Login Customer Successfully') {
                            sessionStorage.setItem('role', 'C');
                            toast.success(resp.message);
                            window.location.href = '/'
                        } else
                            if (resp.message === 'Login Resident Successfully') {
                                console.log(resp);
                                toast.success(resp.message);
                                sessionStorage.setItem('role', 'R');
                                window.location.href = '/'
                            }
                        usenavigate('/');
                    }
                    else {
                        toast.error('Please Enter Correct Password');
                    }
                }
            })
                .catch((err) => {
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

                    {/* <div className="container-background">
                <img style={{position:"absolute",zIndex:"10", marginLeft:"-200px", marginTop:"110px"}} src="man.png"></img>
            </div> */}

                    <div className="login-form">
                        <div className="container-background" style={{marginTop:'-80px', height:'720px'}}>
                            <img style={{ position: "absolute", zIndex: "10", marginTop: "110px" }} src="./assets/img/man.png"></img>
                        </div>
                        <h2>User Log in</h2>
                        <span style={{ marginBottom: "40px", display: "block" }}>Log in to your Eparking account.</span>
                        {/* <button className="google" style={{ marginBottom: "10px", backgroundColor: 'white' }} type="submit"> <img style={{ width: "30px", position: "absolute", left: "20px", marginRight: "30px" }} src='./assets/img/Google_Logo.png' /> Login with Google</button>
                        <button className="google" style={{ marginTop: "0px" }} type="submit"> <img style={{ width: "30px", position: "absolute", left: "20px", marginRight: "30px" }} src='./assets/img/facebook.png' /> Login with Facebook</button> */}
                        <br />
                        <div className="dash-or"><span></span></div>
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

                    {/* responsive  */}
                    <div className="res-form">
                        <h2>User Log in</h2>
                        <span style={{ marginBottom: "40px", display: "block" }}>Log in to your YourParkingSpace account.</span>
                        <button className="google" style={{ marginBottom: "10px" }} type="submit"> <img style={{ width: "30px", position: "absolute", left: "20px", marginLeft: "-40px" }} src='./assets/img/Google_Logo.png' /> Login with Google</button>
                        <button className="google" style={{ marginTop: "0px" }} type="submit"> <img style={{ width: "30px", position: "absolute", left: "20px", marginLeft: "-40px" }} src='./assets/img/facebook.png' /> Login with Facebook</button>
                        <br />
                        <div className="dash-or"><span>Or</span></div>
                        <form onSubmit={ProceedLogin}>
                            <input placeholder="User Name" style={{ marginTop: "30px" }} value={username} onChange={e => usernameupdate(e.target.value)} ></input>
                            <input placeholder="Password" type="password" value={password} onChange={e => passwordupdate(e.target.value)} ></input>
                            <button className="loginbtn" style={{ color: "#fff" }} type="submit">Log In</button>
                            <Link to={'/Forgotten-pwd'} style={{ marginLeft: "-30px", color: "#2DC98A" }}>Forgotten your password?</Link>
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

export default Login;