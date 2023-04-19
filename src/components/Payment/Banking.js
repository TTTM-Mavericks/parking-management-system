import { Component, version } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import React, { useState, useEffect, useRef } from "react";

import { json, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import './Payment.css';
import { url_api } from "../../API/api";

const Banking = () => {
    const [name, setName] = useState('');
    const [cardNum, setcardNum] = useState('');
    const [expiry, setExpiry] = useState('');
    const [verification, setVerification] = useState('');
    const [id, setId] = useState(sessionStorage.getItem("username"))
    const [invoice, setInvoice] = useState([]);
    const [flag, setFlag] = useState(false);
    console.log('username: ' + id)



    useEffect(() => {
        setName(name);
    }, [name]);

    useEffect(() => {
        setcardNum(cardNum);
    }, [cardNum]);

    useEffect(() => {
        setExpiry(expiry);
    }, [expiry]);

    useEffect(() => {
        setVerification(verification);
    }, [verification]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        //type of payment vs idbooking
        const id_Booking = sessionStorage.getItem("idbooking");
        const type_Of_Payment = sessionStorage.getItem("typePayment");
        const id_Building = sessionStorage.getItem("idbuilding");
        const regObj = { id_Booking, type_Of_Payment, id_Building }
        fetch(url_api + "/paymentCustomer/save", {

            method: 'POST',
            header: {
                "Accept": "*/*",
                "Content-Type": "application/text",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

            body: JSON.stringify(regObj)


        }).then((res) => {
            console.log(JSON.stringify(regObj));
            console.log(JSON.stringify(regObj))
            console.log(res);
            sessionStorage.setItem("banking_name", name);
            sessionStorage.setItem("banking_cardnum", cardNum);
            sessionStorage.setItem("banking_expiry", expiry);
            sessionStorage.setItem("banking_verification", verification);
            const currentDate = new Date(Date.now());
            const formattedDate = currentDate.toISOString().substr(0, 10);
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const currentTime = `${hours}:${minutes}:${seconds}`;
            sessionStorage.setItem("datebook", formattedDate);
            sessionStorage.setItem("timebook", currentTime)
            toast.success('Pay successfully.');
            setTimeout(function () {
                window.location.href = '/ReservationComplete'
            }, 800);



        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });






    }



    return (
        <HelmetProvider>
            <Helmet>
                <title>Banking Gate</title>
            </Helmet>

            <div className="header-banking-gate">
                <div>
                    Test GateWay
                </div>
                <p style={{ paddingTop: '110px', fontSize: '30px' }}>
                    Enter Credit Card Details
                </p>
            </div>

            <div style={{ position: 'absolute', left: 150, top: '350px' }}>
                <p style={{ fontSize: '50px', color: 'black' }}>EParking Payment - Zone A </p>
            </div>

            <div className=" col-lg-6 input-creadit-card">
                <div className="col-lg-6  class-input">
                    <label>Your Name *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="Nguyen Van A" style={{ width: '100%', position: 'relative' }} onChange={e => setName(e.target.value)} ></input>

                    </div>
                </div>

                <div className="col-lg-6  class-input">
                    <label>Card number *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="0000 2222 3333 4444" style={{ width: '100%', position: 'relative' }} onChange={e => setcardNum(e.target.value)} ></input>

                    </div>
                </div>

                <div className="col-lg-6  class-input">
                    <label>Expiry *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="05/17" style={{ width: '100%', position: 'relative' }} onChange={e => setExpiry(e.target.value)} ></input>

                    </div>
                </div>

                <div className="col-lg-6  class-input">
                    <label>Card verification number *</label>
                    <br />
                    <div>
                        <input type={'text'} placeholder="425" style={{ width: '100%', position: 'relative' }} onChange={e => setVerification(e.target.value)} ></input>

                    </div>
                </div>

                <form onSubmit={handleSubmit} className="col-lg-6  class-input">

                    <div>

                        <button type={'submit'} style={{ width: '100%', height: '50px', borderRadius: '5px', backgroundColor: '#2DC98A', border: '#2DC98A' }} >Submit</button>


                    </div>
                </form>

            </div>

        </HelmetProvider>
    );
};

export default Banking;
