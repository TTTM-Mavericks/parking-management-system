
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { url_api } from "../../../API/api";


const URL_PAYMENT = url_api + '/expired/payC/';


const PopupExpiredInfor = ({ handleClose, show, data, idInvoice, url }) => {
    const showHideClassName = show ? 'popup display-block' : 'popup display-none';
    const [obj, setObj] = useState('');
    console.log('id: ' + idInvoice)
    console.log('url: ' + url + idInvoice)

    const handlePaymentFee = () => {

        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        fetch(URL_PAYMENT + idInvoice + '?time=' + currentTime, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": url + url + idInvoice + '?time=' + currentTime,
                Accept: "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        })
            .then((res) => toast.success('Payment Successful'))
            .then((data) => {

                console.log(data);
            })
            .catch((err) => {
                console.error(err);

            });

    }

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const currentTime = `${hours}a${minutes}a${seconds}`;
        console.log(url + idInvoice + '?time=' + currentTime)
        fetch(url + idInvoice + '?time=' + currentTime, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": url + idInvoice + '?time=' + currentTime,
                Accept: "*/*",
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        })
            .then((res) => res.json())
            .then((data) => {
                setObj(data)

                console.log('data  ' + data);
            })
            .catch((err) => {
                console.error(err);

            });

    }, [idInvoice])




    return (
        <div className={showHideClassName}>
            <section className='popup-main'  >
                <button className='close' onClick={handleClose}>
                    &times;
                </button>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Slot information:</h3>
                    <div className="form-infor-slot" >
                        <span>Invoice ID:</span>
                        <i>{obj.id_invoice}</i>
                        <br />
                        <span>End date:</span>
                        <i>{obj.end_date}</i>
                        <br />
                        <span>End time:</span>
                        <i>{obj.end_time}</i>
                        <br />
                        <span>Current date :</span>
                        <i>{ String(obj.current_date).substring(0,10)}</i>
                        <br />
                        <span>Current time:</span>
                        <i>{obj.current_time}</i>
                        <br />
                        <span>Expired:</span>
                        <i>{obj.expired} hours</i>
                        <br />
                        <span>Based fee:</span>
                        <i>{Number(obj.based_fee).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                        <br />
                        <span>Fined fee:</span>
                        <i>{Number(obj.fined_fee).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                        <br />
                        <span>Total:</span>
                        <i>{Number(obj.sum).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                        <br />
                        <span>Has paid:</span>
                        <i>{Number(obj.has_paid).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                        <br />
                        <span>Total fee:</span>
                        <i>{Number(obj.total_fee).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</i>
                        <br />


                    </div>
                    <button style={{ width: '20%', marginLeft: '40%' }} onClick={handlePaymentFee}>Pay Expired</button>
                </div>
            </section>
        </div>
    );
};

export default PopupExpiredInfor;
