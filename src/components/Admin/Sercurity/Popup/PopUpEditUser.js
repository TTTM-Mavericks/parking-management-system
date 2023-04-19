import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import {url_api} from "../../../../API/api";
import '../../Admin.css'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,30}/;
const EMAIL_REGEX = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
const PHONE_REGEX = /^[0-9]{10,12}$/;

const URL = url_api+"/security/updateCustomer_Resident?idUser=";
const URL_USER = url_api+"/user/findById?id=";
const URL_SERCURITY = url_api+"/buildingManager/updateSecurity?idUser=";

const PopUpEditUser = ({ handleClose, show, idUser, role, url }) => {
  
  console.log('url: '+url)
  console.log('show: '+show)
  console.log('role: '+role)
  console.log('idUser: '+idUser)
  const showHideClassName = show ? 'popup display-block' : 'popup display-none';
  const [mainURL, setMainURL] = useState('');

  const userRef = useRef();
  const errRef = useRef();

  const [id, setId] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);


  const [fullName, setFullName] = useState('');
  const [fullNameFocus, setFullNameFocus] = useState(false);

  const [birthday, setBirthDay] = useState(new Date());

  const [txtGender, setTxtGender] = useState('female')
  const [gender, setGender] = useState(false);

  const [email, setEmail] = useState('')
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false)

  const [phone, setPhone] = useState('')
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [checked, setChecked] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [obj, setObj] = useState([]);



  useEffect(() => {

    fetch(URL_USER + idUser)
      .then(response => response.json())
      .then((data) => {
        setObj(data)
      })
      .catch(error => console.error(error));
  }, [idUser])



  useEffect(() => {
    const result = USER_REGEX.test(id);
    setValidName(result);

  }, [id])

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email])

  useEffect(() => {
    const result = PHONE_REGEX.test(phone);
    setValidPhone(result);
  })


  useEffect(() => {
    setFullName(fullName)

  }, [fullName])


  useEffect(() => {

    setBirthDay(birthday)

  }, [birthday])

  useEffect(() => {
    if (txtGender === 'female') {
      setGender(false)
    } else
      if (txtGender === 'male') {
        setGender(true)
      }
  }, [txtGender])

  useEffect(() => {
    setPhone(phone)

  }, [phone])

  useEffect(() => {
    if (checked != false) {

      setChecked(true);

    } else {
      setChecked(false);

    }
  }, [checked])


  useEffect(() => {
    setErrMsg('');

  }, [id, pwd])

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the valid value!';

    if (checked == null || checked === '') {
      isproceed = false;
      errormessage = 'You must agree to YourParkingSpace\'s terms of service & privacy policy';
    }

    if (!PHONE_REGEX.test(phone)) {
      isproceed = false;
      errormessage = 'Phone must be 10-12 numbers.';
    }

    if (!EMAIL_REGEX.test(email)) {
      isproceed = false;
      errormessage = 'Please enter the valid email!';

    }

    if (fullName === null || fullName === '') {
      isproceed = false;

    }
    if (!PWD_REGEX.test(pwd)) {
      isproceed = false;
      errormessage = 'Password must be: 8 to 30 characters! Must include uppercase and lowercase letters, a number and a special character!';

    }

    if (!isproceed) {
      toast.warning(errormessage)
    } else
      return isproceed;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = pwd;
    const fullname = fullName;
    const dateofbirth = birthday;

    const regObj = { password, fullname, dateofbirth, gender, email, phone }



    if (IsValidate()) {
      console.log(regObj)
      console.log(idUser)
      console.log(role)
    
      fetch(url + idUser, {
        method: 'PUT',
        header: {
          "Access-Control-Allow-Origin": URL,
          "Accept": "*/*",
          "Content-Type": "application/text",
          "X-Requested-With": "XMLHttpRequest",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(regObj)
      }).then((res) => {
        console.log(JSON.stringify(regObj))
        console.log(res);
        setSuccess(true);
        toast.success('Edit successfully.');

      }).catch((err) => {
        toast.error('Failed: ' + err.message);
      });
    }
  }

  return (
    <div className={showHideClassName}>
      <section className='popup-main'>
        <button className='close' onClick={handleClose}>
          &times;
        </button>
        <form onSubmit={handleSubmit} className="row popup-edit-user">
          <h2>Edit User</h2>

          <h6>User name: ' {idUser} '</h6>

          {/* -------------------FULL-NAME-------------------- */}
          <div style={{ textAlign: 'center' }}>
            <input

              type="text"
              id="fullname"
              className="col-sm-4"
              autoComplete="off"
              onChange={(e) => setFullName(e.target.value)}
              placeHolder={obj.fullname}

            />
          </div>
          {/* -------------------PASSWORD-------------------- */}

          <div >
            <input

              type="password"
              onChange={(e) => setPwd(e.target.value)}
              placeHolder={obj.password}
            />
          </div>

          {/* -------------------BIRTHDAY-------------------- */}
          <div>
            <input

              type="date"
              autoComplete="off"
              onChange={(e) => setBirthDay(e.target.value)}
              placeHolder={obj.dateofbirth}
            />

          </div>
          {/* -------------------GENDER-------------------- */}
          <div className=" ">
            <select type="select" onChange={e => setTxtGender(e.target.value)} >
              <option value="female" className="gender">Female</option>
              <option value="male" className="gender">Male</option>
            </select>

          </div>
          {/* -------------------EMAIL-------------------- */}
          <div>
            <input

              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={validEmail ? "false" : "true"}
              placeHolder={obj.email}

            />

          </div>


          {/* -------------------PHONE-------------------- */}
          <div>
            <input
              type="text"
              id="phone"
              className="col-sm-4"
              autoComplete="off"
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={validPhone ? "false" : "true"}
              aria-describedby="emailnote"
              placeHolder={obj.phone}

            />


          </div>

          <button className="save-edit" style={{ border: 'none', backgroundColor: '#2DC98A', color: 'white', borderRadius: '2px' }}>Save edition</button>


        </form>

      </section>
    </div>
  );
};

export default PopUpEditUser;
