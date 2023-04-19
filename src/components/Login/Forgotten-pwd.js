import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faMailBulk, faMailReply } from "@fortawesome/free-solid-svg-icons";
import BackgroundCommon from "../Complements/BackgroundCommon";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import './Login.css'
import { url_api } from "../../API/api";
const ForgottenPwd = () => {
    const [resetUserName, setResetUserName] = useState('');
    const [password, passwordupdate] = useState('');
    const [obj, setObj] = useState(null);
    const [flag, setFlag] = useState(100);
    const [email, setEmail] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    useEffect(() => {
        setResetUserName(resetUserName)
    }, [resetUserName])

    useEffect(() => {
        console.log(url_api + "/user/findById?id=" + resetUserName)
        fetch(url_api + "/user/findById?id=" + resetUserName)
            .then(response => {
                response.json();
            }
            )
            .then((data) => {
                setObj(data);
                console.log('data: ' + data.email)
                console.log('fetch first')
                flag === 200 && setEmail(data.email)


            })
            .catch(error => console.error(error));

    }, [resetUserName]);
    console.log('falg: ' + flag)

    const handleSubmit = () => {
        const id_User = resetUserName;
        const regObj2 = { id_User };
        console.log('obj: ' + JSON.stringify(regObj2));
        fetch(url_api + "/mail/forgotPassword", {
            method: 'POST',
            header: {
                "Accept": "*/*",
                "Content-Type": "application/text",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },
            body: JSON.stringify(regObj2)
        })
            .then((res) => {

                toast.success('New password is sent to: ' + obj.email)
                console.log(res);
                setTimeout(function () {
                    window.location.href = '/login';
                }, 1800);
            }).then((data) => {

            })
            .catch((err) => {
                toast.error('Failed: ' + err.message);
            });
        toast.success('New password is sent to: ' + obj.email)
    
        setTimeout(function () {
            window.location.href = '/login';
        }, 1800);

    }




    return (
        <HelmetProvider>
            <div className="container-login">
                <Helmet>
                    <title>Forgotten </title>
                </Helmet>
                <div className="container-background" style={{ marginTop: '-80px', marginLeft: '310px' }}>
                    <img style={{ position: "absolute", zIndex: "10", marginTop: "185px" }} src="./assets/img/man.png"></img>
                </div>
                <div className="login-form" style={{ marginTop: "200px" }}>

                    <h2 style={{}}>Password reset {email} </h2>
                    <span style={{ marginBottom: "40px", display: "block" }}>Please enter your user name below, and we will send you a link to your email to reset your password.</span>

                    <div className="dash-or"></div>
                    <form onSubmit={handleSubmit}>
                        <input placeholder="Enter User name address" style={{ marginTop: "30px" }} value={resetUserName} onChange={e => setResetUserName(e.target.value)} ></input>
                        <button style={{ color: "#fff" }} type="submit"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faMailBulk}></FontAwesomeIcon>Send reset link</button>
                        <Link to={'/login'}><FontAwesomeIcon icon={faMailReply}></FontAwesomeIcon> Go back</Link>
                        <br />
                        <div className="anyaccount" ><span>Don’t have any account?</span></div>
                        <Link to={'/register'}> <button className="btn-signup"> <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />Sign Up for free</button></Link>
                    </form>
                </div>
            </div>
            {/* res */}
            {/* <div className="res-container-login">
                <Helmet>
                    <title>Forgotten</title>
                </Helmet>
                <div className="reslogin-form" style={{ marginTop: "200px" }}>
                    <BackgroundCommon></BackgroundCommon>
                    <h2 style={{}}>Password reset</h2>
                    <span style={{ marginBottom: "40px", display: "block" }}>Please enter your email address below, and we will send you a link to reset your password.</span>

                    <div className="dash-or"></div>
                    <form >
                        <input placeholder="Enter Email address" style={{ marginTop: "30px" }} value={resetUserName} onChange={e => setResetUserName(e.target.value)} ></input>
                        <button style={{ color: "#fff" }} type="submit"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faMailBulk}></FontAwesomeIcon>Send reset link</button>
                        <Link to={'/login'}><FontAwesomeIcon icon={faMailReply}></FontAwesomeIcon> Go back</Link>
                        <br />
                        <div className="anyaccount" ><span>Don’t have any account?</span></div>
                        <Link to={'/register'}> <button className="btn-signup"> <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />Sign Up for free</button></Link>
                    </form>
                </div>
            </div> */}
        </HelmetProvider>
    );
}

export default ForgottenPwd;