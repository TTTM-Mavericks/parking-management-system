import AdminFooter from "../AdminPageFooter";
import AdminHeader from "../AdminPageHeader";
import '../Admin.css'
import CustomerManagement from "./CustomerManagement";
import { Link,useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import ResidentManagement from "./ResidentManagement";
import BookingManagement from "./InvoiceManagement";
import InvoiceManagement from "./InvoiceManagement";
import SlotManagement from "./SlotManagement";

const SerHomePage = () => {
    const [logined, setLogined] = useState(localStorage.getItem("username"));
    const [role, setRole] = useState(localStorage.getItem('role'))
    const usenavigate = useNavigate();
    

    useEffect(()=>{
        if ((logined === null || logined === '') || role != 3 ){
            usenavigate('/AdminLogin')
        }
    },[logined])

    const [select, setSelect] = useState('Customer');

    const handleItemClick = (item) => {
        setSelect(item);
        if (select == 'Customer') {
            console.log(item)
            return  <CustomerManagement></CustomerManagement>
        }
        else if (select == 'Residents') {
            console.log(item)
            return <ResidentManagement></ResidentManagement>
        }
        else if (select == 'Booking') {
            console.log(item)
            return <BookingManagement></BookingManagement>
        }
        else if (select == 'Invoice') {
            console.log(item)
            return <BookingManagement></BookingManagement>
        }



    };
    return (
        <div>
            <AdminHeader></AdminHeader>
            <div className="admin-role">
                <div><h3>Sercurity Dashboard</h3></div>
            </div>
            <div className="admin-homepage-body" style={{marginBottom:'150px'}}>

                <ul class="nav admin-nav-custom flex-column " style={{marginTop:'100px'}}>

                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Customer')}>
                        <a class="nav-link active" href="#">Customers</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Residents</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Invoices')}>
                        <a class="nav-link active" href="#">Invoices</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Slots')}>
                        <a class="nav-link active" href="#">Slots</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>
                    <li tabindex="0" class="nav-item" onClick={() => handleItemClick('Residents')}>
                        <a class="nav-link active" href="#">Location</a>
                    </li>

                </ul>
                
                {select == 'Customer' ? <CustomerManagement></CustomerManagement> 
                    : select == 'Residents' ? <ResidentManagement></ResidentManagement>
                    : select == 'Invoices' ? <InvoiceManagement></InvoiceManagement>
                    : <SlotManagement></SlotManagement>
                }
                
                
            
            </div>
             <div style={{width:'100%', marginTop:'50px'}}>
             <AdminFooter></AdminFooter>
             </div>   
            
        </div>
    );
}

export default SerHomePage;