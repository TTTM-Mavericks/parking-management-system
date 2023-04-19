import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { url_api } from '../../API/api';

const Welcome = () => {
    


    const handleClick = () => {
        fetch(url_api + "/loadUser")
            .then(res => res.json())
            .then(resp => {
                        sessionStorage.setItem('username', resp.id);
                        sessionStorage.setItem('fullname', resp.fullname);
                        sessionStorage.setItem('email', resp.email);
                        sessionStorage.setItem('phone', resp.phone);
                        sessionStorage.setItem('id', resp.id);
                        localStorage.setItem('id', resp.id);
                        console.log(resp);
                        window.location.href = '/'
                    

            })


    }
    
        return (
            <div>
                <button onClick={handleClick}>Home</button>
            </div>
        );
    
}



export default Welcome;