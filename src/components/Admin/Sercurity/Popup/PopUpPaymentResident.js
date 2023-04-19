
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { url_api } from "../../../../API/api";



const PopUpPaymentResident = ({ handleClose, show, data, idSearch, url }) => {
    console.log('url: '+url)
    const showHideClassName = show ? 'popup display-block' : 'popup display-none';
    const [success, setSuccess] = useState(false);
    const [flag, setFlag] = useState(false);
    const [invoice, setInvoice] = useState([]);
    console.log('--------------------------------------------------')
    // useEffect(() => {
    //     fetch(url)
    //         .then(response =>
    //             response.json()
    //         )
    //         .then((data) => {
    //             setInvoice(data);
    //             console.log('data: ' + data)
    //             console.log('fetch first')
    //             setFlag(true)
    //         })
    //         .catch(error => console.error(error));
    // }, [])

    useEffect(() => {
        const id_User = idSearch;
        const regObj2 = {...invoice};
        console.log('obj: ' + JSON.stringify(regObj2));

        const delay = setTimeout(() => {
            fetch(url_api + "/mail/invoiceResident", {
                method: 'POST',
                headers: {
                    "Accept": "*/*",
                    "Content-Type": "application/text",
                    "X-Requested-With": "XMLHttpRequest",
                    "Cache-Control": "no-cache",
                },
                body: JSON.stringify(regObj2)
            })

                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    console.log('fetch second')
                })
                .catch((err) => {
                    console.log('Failed: ' + err.message);
                });
        }, 1000);

        return () => clearTimeout(delay);
    }, [flag]);

    return (
        <div className={showHideClassName}>
            <section className='popup-main'  >
                <button className='close' onClick={handleClose}>
                    &times;
                </button>
                <div>
                    <h3 style={{ textAlign: 'center' }}>Invoice information:</h3>
                    <div className="form-infor-slot" >
                        <span>Resident ID:</span>
                        <i>{data.idUser}</i>
                        <br />
                        <span>Payment ID:</span>
                        <i>{data.id_Payment}</i>
                        <br />
                        <span>Invoice ID:</span>
                        <i>{data.id_R_Invoice}</i>
                        <br />
                        <span>Type of payment:</span>
                        <i>{data.typeOfPayment}</i>
                        <br />
                        <span>Date:</span>
                        <i>{data.dateOfPayment}</i>
                        <br />
                        <span>Total of money:</span>
                        <i>{data.total_Of_Money}</i>
                        <br />
                        
                        <br />
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PopUpPaymentResident;
