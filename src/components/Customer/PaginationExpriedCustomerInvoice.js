import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { url_api } from "../../API/api";
import PopupExpiredInfor from "./PopUp/PopUpExpiredInfor";

const URL_Fee_C = url_api + '/expired/getFeeCutomer/'
const URL_PAYMENT_R = url_api + '/expired/payR/'
const URL_PAYMENT_C = url_api + '/expired/payC/'

function PaginationExpiredCustomerInvoice(props) {
    const user = props.user;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = props.pageSize || 10; // default to 10 if not provided
    const totalPages = Math.ceil(props.data.length / pageSize);
    const [invoiceId, setInvoiceId] = useState('');
    const [obj, setObj] = useState('');

    const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);
    const togglePopupCreateRes = () => {
        setShowPopupCreateRes(!showPopupCreateRes);
        // const now = new Date();
        // const hours = now.getHours();
        // const minutes = now.getMinutes();
        // const seconds = now.getSeconds();
        // const currentTime = `${hours}a${minutes}a${seconds}`;
        // console.log(URL_Fee_C + invoiceId + '?time=' + currentTime)
        // fetch(URL_Fee_C + invoiceId + '?time=' + currentTime, {
        //     method: "GET",
        //     headers: {
        //         "Access-Control-Allow-Origin": URL_Fee_C + invoiceId,
        //         Accept: "*/*",
        //         "Content-Type": "application/json",
        //         "X-Requested-With": "XMLHttpRequest",
        //         "Cache-Control": "no-cache",
        //     },

        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         setObj(data)
                
        //         console.log(data);
        //     })
        //     .catch((err) => {
        //         console.error(err);

        //     });
    };

    const getInvoiceId = (id) => {
        setInvoiceId(id);
        console.log('id:' + id)
    }

    const handleClick = (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <li key={i} className={currentPage === i ? "active" : null}>
                    <a href="#" onClick={(e) => handleClick(e, i)}>
                        {i}
                    </a>
                </li>
            );
        }
        return pageNumbers;
    };


    // useEffect(() => {
    //     const now = new Date();
    //     const hours = now.getHours();
    //     const minutes = now.getMinutes();
    //     const seconds = now.getSeconds();
    //     const currentTime = `${hours}a${minutes}a${seconds}`;
    //     console.log(URL_Fee_C + invoiceId + '?time=' + currentTime)
    //     fetch(URL_Fee_C + invoiceId + '?time=' + currentTime, {
    //         method: "GET",
    //         headers: {
    //             "Access-Control-Allow-Origin": URL_Fee_C + invoiceId,
    //             Accept: "*/*",
    //             "Content-Type": "application/json",
    //             "X-Requested-With": "XMLHttpRequest",
    //             "Cache-Control": "no-cache",
    //         },

    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setObj(data)
                
    //             console.log(data);
    //         })
    //         .catch((err) => {
    //             console.error(err);

    //         });

    // },[])
   
    const renderListItems = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return props.data.slice(start, end).map((item, index) => (
            <tr key={start + index}>
                <td>{start + index + 1}</td>
                <td>{item.id_invoice}</td>
                <td>{item.end_date} - {item.end_time}</td>
                <td>{ String(item.current_date).substring(0,10)} - {item.current_time}</td>
                <td>{item.expired} hours</td>
                <td>{Number(item.fine).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                <td style={!item.warning ? { color: '#259645', fontWeight: 'bold' } : { color: '#E74032', fontWeight: 'bold' }}
                ><button className="status-complete">{item.warning ? "Not Complete" : "Completed"}</button></td>
                <td>
                    <button className="save-edit" onClick={() => { getInvoiceId(item.id_invoice); togglePopupCreateRes() }}>Payment</button>
                </td>
                <PopupExpiredInfor idInvoice={invoiceId} handleClose={togglePopupCreateRes} show={showPopupCreateRes}  url={URL_Fee_C}></PopupExpiredInfor>
            </tr>
        ));
    };

    return (
        <>
            <tbody>{renderListItems()}</tbody>
            <tr className="pagination">{renderPageNumbers()}</tr>

        </>
    );
}

export default PaginationExpiredCustomerInvoice;
