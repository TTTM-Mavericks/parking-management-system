import React from "react";
import { useEffect, useState } from "react";
import './BuildingManager.css'
import { toast } from "react-toastify";
import AdminHeader from "../AdminPageHeader";
import { url_api } from "../../../API/api";

const URL = url_api + "/buildingManager/RevenueFromEachBuilding";

const RevenueManagement = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then((data) => {
                setItem(data)
            })
            .catch((err) => {
                console.log(toast);
                toast.error('Failed: ' + err.message);
            });
    }, [])


    return (
        <div className="admin-homepage-dashboard">
            <AdminHeader></AdminHeader>

            <table className="table " style={{ marginTop: '50px' }}>
                <thead>
                    <tr>
                        <th>Building ID</th>
                        <th>Manager ID</th>
                        <th>Income</th>
                        <th>Num of Customers</th>
                        <th>Num of Residents</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((item) => (
                        <tr key={Number(item.id_Building).toLocaleString(undefined, { minimumFractionDigits: 2 })}>
                            <td>{item.id_Building}</td>
                            
                            <td>{item.id_manager}</td>
                            <td>{Number(item.income).toLocaleString(undefined, { minimumFractionDigits: 2 })} VND</td>
                            <td>{item.countCustomer}</td>
                            <td>{item.countResident}</td>
                        </tr>
                    ))}
                </tbody>

            </table>










        </div>
    );
};

export default RevenueManagement;
