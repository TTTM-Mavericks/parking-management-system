import React, { useState } from "react";
import { url_api } from "../../../API/api";
import { toast } from "react-toastify";
import '../Admin.css'

function PaginationInvoice(props) {
    const user = props.user;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = props.pageSize || 10; // default to 10 if not provided
    const totalPages = Math.ceil(props.data.length / pageSize);

    const handleClick = (event, page) => {
        event.preventDefault();
        setCurrentPage(page);
    };

    // console.log(user)

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

    const handleChangeStatus = (id, role) => {
        const url_change = '';
        // if (role === 'C') {
        //     url_change = url_api + '/security/changeStatusInvoiceCustomer/' + id;
        //     console.log(url_change)
        // }
        // else {
        //     url_change = url_api + '/security/changeStatusInvoiceResident/' + id;
        //     console.log(url_change)
        // }
        fetch(url_api + "/security/changeStatusInvoiceCustomer/" + id, {
            method: 'PUT',
            header: {
                "Access-Control-Allow-Origin": url_change,
                "Accept": "*/*",
                "Content-Type": "application/text",
                "X-Requested-With": "XMLHttpRequest",
                "Cache-Control": "no-cache",
            },

        }).then((res) => {

            console.log(res);

            toast.success('Register successfully.');

        }).catch((err) => {
            toast.error('Failed: ' + err.message);
        });
        setTimeout(function () {
            window.location.reload();
        }, 800);
    }

    const renderListItems = () => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return props.data.slice(start, end).map((item, index) => (
            <tr key={start + index}>
                <td>{start + index + 1}</td>
                <td>{user === 'Customer' ? item.id_C_Invoice : item.id_R_Invoice}</td>
                <td>{item.id_Payment}</td>
                <td>{user === 'Customer' ? item.id_Customer : item.id_Resident}</td>
                <td>{item.typeOfPayment}</td>

                <td>{item.total_Of_Money.toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                <td style={{ textAlign: 'center' }}>


                    {item.status ? (<a style={{ color: '#128207', fontWeight: 'bold' }}>Complete</a>)
                        :
                        (<button className="status-complete" style={{ width: '150px', fontWeight: 'bold', backgroundColor: '#CE1103', border: '0' }} onClick={() => { user === 'Customer' ? handleChangeStatus(item.id_C_Invoice, 'C') : handleChangeStatus(item.id_R_Invoice, 'R') }}> Not Complete</button>)}


                </td>
                
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

export default PaginationInvoice;
