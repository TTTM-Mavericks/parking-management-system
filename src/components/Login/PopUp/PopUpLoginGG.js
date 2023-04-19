
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { url_api } from "../../../API/api";




const PopUpLoginGG = ({ handleClose, show, data, role }) => {
    const showHideClassName = show ? 'popup display-block' : 'popup display-none';

    return (
        <div className={showHideClassName}>
        <section class="popup-main"><button class="close">×</button><div><div>

            <div class="container">
                <h2 class="form-signin-heading">Login with OAuth 2.0</h2><table class="table ">
                    <tbody><tr><td><a href={"https://parking-management-system-deploy-production-d240.up.railway.app/oauth2/authorization/google"}>Google</a></td></tr>
                    </tbody></table>
            </div>
        </div></div></section></div>
    );
};

export default PopUpLoginGG;
