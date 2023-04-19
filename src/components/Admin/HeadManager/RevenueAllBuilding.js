import React from "react";
import { useEffect, useState } from "react";
import './HeadManager.css'
import { toast } from "react-toastify";
import AdminHeader from "../AdminPageHeader";
import {url_api} from "../../../API/api";

const URL = url_api+"/headManager/RevenueFromAllBuilding";

const RevenueAllManagement = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setItems(data)
                console.log(data);
            })
            .catch((err) => {
                console.log(toast);
                toast.error('Failed: ' + err.message);
            });
    }, [])

    return (
        <div className="admin-homepage-dashboard">
            <AdminHeader></AdminHeader>

            <table className="table "  style={{marginTop:'50px'}}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>{items.idUser}</td>
                        <td>{ Number(items.income).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                    </tr>

                </tbody>

            </table>










        </div>
    );
};

export default RevenueAllManagement;
