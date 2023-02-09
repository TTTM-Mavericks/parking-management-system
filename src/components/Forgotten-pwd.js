import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser, faMailBulk, faMailReply } from "@fortawesome/free-solid-svg-icons";
import BackgroundCommon from "./BackgroundCommon";
import Helmet from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

const ForgottenPwd = () => {
    const [resetEmail, setResetEmail] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    return (
        <HelmetProvider>
            <div className="container-login">
                <Helmet>
                    <title>Forgotten</title>
                </Helmet>
                <BackgroundCommon></BackgroundCommon>

                <div className="login-form" style={{ marginTop: "200px" }}>
                    <h2 style={{}}>Password reset</h2>
                    <span style={{ marginBottom: "40px", display: "block" }}>Please enter your email address below, and we will send you a link to reset your password.</span>

                    <div className="dash-or"></div>
                    <form >
                        <input placeholder="Enter Email address" style={{ marginTop: "30px" }} value={resetEmail} onChange={e => setResetEmail(e.target.value)} ></input>
                        <button style={{ color: "#fff" }} type="submit"><FontAwesomeIcon style={{ marginRight: "10px" }} icon={faMailBulk}></FontAwesomeIcon>Send reset link</button>
                        <Link to={'/login'}><FontAwesomeIcon icon={faMailReply}></FontAwesomeIcon> Go back</Link>
                        <br />
                        <div className="anyaccount" ><span>Don’t have any account?</span></div>
                        <Link to={'/register'}> <button className="btn-signup"> <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />Sign Up for free</button></Link>
                    </form>
                </div>
            </div>
        </HelmetProvider>
    );
}

export default ForgottenPwd;