
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import {url_api} from "../../../../API/api";



const PopupInforSlot = ({ handleClose, show, data, role }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';

  return (
    <div className={showHideClassName}>
      <section className='popup-main'  >
        <button className='close' onClick={handleClose}>
          &times;
        </button>
        <div>
          <h3 style={{ textAlign: 'center' }}>Slot information:</h3>
          <div className="form-infor-slot" >
            <span>Resident ID:</span>
            <i>{role === 'R' ? data.id_Resident : data.id_Customer}</i>
            <br />
            <span>Payment ID:</span>
            <i>{data.id_Payment}</i>
            <br />
            <span>Invoice ID:</span>
            <i>{data.id_Invoice}</i>
            <br />
            <span>Type of payment:</span>
            <i>{data.typeOfPayment}</i>
            <br />
            <span>Type of vehicle:</span>
            <i>{data.typeOfVehicle}</i>
            <br />
            {role === 'R' ? (
              <>
                <span>Date:</span>
                <i>{data.dateOfPayment}</i>
              </>

            ) : <>
                <span>Start date:</span>
                <i>{data.startDate}</i>
                <br />
                <span>Start time:</span>
                <i>{data.startTime}</i>
                <br />
                <span>End date:</span>
                <i>{data.endDate}</i>
                <br />
                <span>End time:</span>
                <i>{data.endTime}</i>
              </>}




          </div>

        </div>
      </section>
    </div>
  );
};

export default PopupInforSlot;
