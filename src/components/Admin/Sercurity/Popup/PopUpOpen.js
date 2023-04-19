
import React, { useState, useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { url_api } from "../../../../API/api";
import PopUpPaymentResident from "./PopUpPaymentResident";

const URL = url_api + "/present_slot/findAllSlot/";
const URL_Search_Res = url_api + "/user/findById?id=";
const URL_Book = url_api + "/residentslot/saveResidentSlot"
const URL_Infor_R_Slot = url_api + "/security/ResponseResidentInfoSlot?id_Building="
const URL_PAYMENT = url_api + "/paymentResident/save"
const URL_FIND_PAYMENT = url_api + "/paymentResident/findPayment";

const Popup = ({ handleClose, show }) => {
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';
  const [idSearch, setIdSearch] = useState('');
  const [fullname, setfullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [zone, setZone] = useState('')
  const [typeOfVehicle, setTypeOfVehicle] = useState('');
  const [slot, setSlot] = useState('');
  const [success, setSuccess] = useState(false);
  const [idSlot, setIdSlot] = useState('');
  const [inforResSlot, setInforResSlot] = useState([]);
  const [user, setUser] = useState([]);
  const [id, setId] = useState('');
  const [building, setBuilding] = useState('A')
  const [shells, setShells] = useState([]);
  const [flag, setFlag] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const [inforInvoice, setInforInvoice] = useState([]);

  const [showPopupCreateRes, setShowPopupCreateRes] = useState(false);


  const togglePopupCreateRes = () => {

      setShowPopupCreateRes(!showPopupCreateRes);
  };

  const massageSlot = () => {
    toast.error('Slot null!');
  }

  const handleClick = (item) => {
    setIdSlot(item)
  }


  useEffect(() => {
    setIdSlot(idSlot)
  }, [idSlot]);

  useEffect(() => {
    setIdSearch(idSearch);
  }, [idSearch])

  useEffect(() => {
    setPhone(phone)
  }, [phone]);

  useEffect(() => {
    setEmail(email)
  }, [email]);

  useEffect(() => {
    setfullname(fullname)
  }, [fullname]);

  useEffect(() => {
    setZone(zone);
    console.log(zone);
  }, [zone]);

  useEffect(() => {
    setTypeOfVehicle(typeOfVehicle);
    console.log(typeOfVehicle);
  }, [typeOfVehicle]);

  useEffect(() => {
    setSlot(slot);
    console.log(slot);
  }, [slot]);

  useEffect(() => {
    setBuilding(building)
  }, [building])


  useEffect(() => {
    setBuilding(building)
  }, [building])

  useEffect(() => {
    fetch(URL + building)
      .then(response => response.json())
      .then((data) => {
        setShells(data)
      })
      .catch(error => console.error(error));
  }, [building])

  const residentSlot = shells.filter(slot => slot.id_slot.startsWith('R'));
  const customerSlot = shells.filter(slot => slot.id_slot.startsWith('C'));


  const handleIdFilter = () => {
    console.log(URL_Search_Res + idSearch)
    fetch(URL_Search_Res + idSearch)
      .then(response => response.json())
      .then((data) => {
        setUser(data);
        setfullname(data.fullname)
        setEmail(data.email)
        setPhone(data.phone)
        setId(data.id)
      })
      .catch(error => console.error(error));

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idUser = idSearch;
    const id_Building = building;
    const type_Of_Vehicle = typeOfVehicle;
    const id_R_Slot = slot;
    const obj = { idUser, id_Building, type_Of_Vehicle, id_R_Slot, fullname, email, phone }

    fetch(URL_Book, {
      method: 'POST',
      header: {
        "Access-Control-Allow-Origin": URL_Book,
        "Accept": "*/*",
        "Content-Type": "application/text",
        "X-Requested-With": "XMLHttpRequest",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(obj)

    }).then((res) => {

      console.log(JSON.stringify(obj))
      console.log(res);
      setSuccess(true);
      toast.success('Register successfully.');
    }).catch((err) => {
      toast.error('Failed: ' + err.message);
    });
  }

  console.log(idSearch);
  console.log(building)

  const handleResidentPayment =  () => {
    
    const idUser = idSearch;
    const id_Building = building;
    const typeOfPayment = 'Banking';
    const dateOfPayment = Date.now();
    console.log(idUser);
    console.log(id_Building)

    const obj = { typeOfPayment, idUser, id_Building, dateOfPayment }

    fetch(URL_PAYMENT, {
      method: 'POST',
      header: {
        "Access-Control-Allow-Origin": URL_PAYMENT,
        "Accept": "*/*",
        "Content-Type": "application/text",
        "X-Requested-With": "XMLHttpRequest",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(obj)

    }).then((res) => {

      console.log(JSON.stringify(obj))
      console.log(res);
      setSuccess(true);
      toast.success('Payment successfully.');
    }).catch((err) => {
      if (err.response && err.response.status === 500)
        toast.error('Failed: ' + err.message);
    });
    fetch(url_api + "/paymentResident/findPayment")
      .then(response =>
        response.json()
      )
      .then((data) => {
        setInvoice(data);
        console.log(data)
        console.log('fetch first')
        setFlag(true)
      })
      .catch(error => console.error(error));

      
    

  }

  useEffect(() => {
    fetch(URL_FIND_PAYMENT)
        .then(response =>
            response.json()
        )
        .then((data) => {
            setInforInvoice(data);
            console.log('data: ' + data)
            console.log('fetch first')
            setFlag(true)
        })
        .catch(error => console.error(error));
}, [flag])

  


  return (
    <div className={showHideClassName}>
      <section className='popup-main'>
        <button className='close' onClick={handleClose}>
          &times;
        </button>
        <h2>Resiter resident slot</h2>
        <div>
          <form className='filter-id justify-content-start' style={{ marginLeft: '27%' }} onSubmit={handleIdFilter}>
            <label> Filter by ID: </label>
            <br />
            <input type="text" onChange={e => setIdSearch(e.target.value)} style={{ borderRadius: '0', width: '55%' }} />
            <button type='submit' style={{ borderRadius: '0', width: '14%' }}>Search</button>
          </form>
          <label style={{ marginLeft: '28%', width: '42%' }}>Fullname</label>
          <br />
          <input style={{ marginLeft: '28%', width: '42%', borderRadius: '0' }} onChange={(e) => setfullname(e.target.value)} value={fullname}></input>
          <br />
          <label style={{ marginLeft: '28%', width: '42%' }}>Phone</label>
          <br />
          <input style={{ marginLeft: '28%', width: '42%', borderRadius: '0' }} onChange={(e) => setPhone(e.target.value)} value={phone}></input>
          <br />
          <label style={{ marginLeft: '28%', width: '42%' }}>Email</label>
          <br />
          <input style={{ marginLeft: '28%', width: '42%', borderRadius: '0' }} onChange={(e) => setEmail(e.target.value)} value={email}></input>
          <br />
          <label style={{ marginLeft: '28%', width: '42%' }} >Zone</label>
          <select className="form-select" style={{ marginLeft: '28%', width: '42%', borderRadius: '0' }} onChange={(e) => setBuilding(e.target.value)} value={building} >
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <label style={{ marginLeft: '28%' }}>Type of vehicle</label>
          <select className="form-select" style={{ marginLeft: '28%', width: '42%', borderRadius: '0' }} onChange={(e) => setTypeOfVehicle(e.target.value)} value={typeOfVehicle}>
            <option>Car</option>
            <option>Motor</option>
            <option>Bike</option>
          </select>


          <label style={{ marginLeft: '28%' }}>Slot</label>

          <select className="form-select" style={{ marginLeft: '28%', width: '42%', borderRadius: '0' }} onChange={(e) => setSlot(e.target.value)} value={slot}>
            {typeOfVehicle === 'Car' && residentSlot.slice(0, 10).map((shell) => {
              if (shell.status_Slots === false) {
                return <option key={shell.id_slot}>{shell.id_slot}</option>;
              }
              return null;
            })}
            {typeOfVehicle === 'Motor' && residentSlot.slice(10, 20).map((shell) => {
              if (shell.status_Slots === false) {
                return <option key={shell.id_slot}>{shell.id_slot}</option>;
              }
              return null;
            })}
            {typeOfVehicle === 'Bike' && residentSlot.slice(20, 30).map((shell) => {
              if (shell.status_Slots === false) {
                return <option key={shell.id_slot}>{shell.id_slot}</option>;
              }
              return null;
            })}



          </select>
          <br />



        </div>
        <form onSubmit={handleSubmit} className="col-lg-6  class-input">
          <button style={{ color: "#fff", marginLeft: '48%', width: '60%' }} type="submit">Save Reservation</button>
        </form>
        <form onSubmit={() => {handleResidentPayment(); togglePopupCreateRes()}} className="col-lg-6  class-input">
          <button style={{ color: "#fff", marginLeft: '48%', width: '60%' }} type="submit">Payment</button>
        </form>
        <PopUpPaymentResident handleClose={togglePopupCreateRes} show={showPopupCreateRes} url={URL_FIND_PAYMENT} data={inforInvoice} idSearch={idSearch}></PopUpPaymentResident>
      </section>
    </div>
  );
};

export default Popup;
