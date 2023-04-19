import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { url_api } from '../../API/api';
import { toast } from 'react-toastify';

const ChangePwdCustomer = () => {
    const [username, setUsername] = useState(sessionStorage.getItem("username"))
    const [newpwd, setNewPwd] = useState('')

    const HandleChangePwd = () => {
        console.log(url_api + "/user/changePassword?id=" + username + "&newPassword=" + newpwd)

        fetch(url_api + "/user/changePassword?id=" + username + "&newPassword=" + newpwd, { method: "PUT" })
            .then(rep => {
                console.log(rep)
                toast.success('Change Password Successfully!')
                setTimeout(function () {
                    window.location.reload();
                }, 800);
            }


            )
            .catch(err => console.log(err))
    }

    return (
        <div className="admin-homepage-dashboard">

            <div style={{ width: '40%', color: 'black', textAlign: '' }} className="notice-infor">
                <div style={{ padding: '10%' }}>
                    <h3 style={{ color: 'red' }}>Change Password</h3>
                    {/* <label style={{ textAlign: 'left' }}>Old Password</label>
                    <br />
                    <input style={{ width: '100%', borderRadius: '5px' }} type={'password'}></input>
                    <br /> */}
                    <label>New Password</label>
                    <br />
                    <input style={{ width: '100%', borderRadius: '5px' }} type={'password'} onChange={(e) => setNewPwd(e.target.value)}></input>
                    <br></br>
                    <form onSubmit={HandleChangePwd}>
                        <button style={{ marginTop: '10px', width: '40%' }} >Change Password</button>
                    </form>

                </div>
            </div>

        </div>
    );

}



export default ChangePwdCustomer;