import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Main/Home';
import Login from './components/Login/Login';
import Register from './components/Registration/Register';
import { ToastContainer } from 'react-toastify';
import ForgottenPwd from './components/Login/Forgotten-pwd';
import Reservation from './components/Payment/Reservation';
import PaymentInformation from './components/Payment/PaymentInformation';
import Banking from './components/Payment/Banking';
import ReservationComplete from './components/Payment/ReservationComplete';
import ZoneDetail from './components/Zone/ZoneDetail';

import ManagerHomePage from './components/Admin/ManagerHomepage';
import ResidentManagement from './components/Admin/Sercurity/ResidentManagement';
import CustomerManagement from './components/Admin/Sercurity/CustomerManagement';
import InvoiceManagement from './components/Admin/Sercurity/InvoiceManagement';
import Price from './components/Screen/Price';
import SlotManagement from './components/Admin/Sercurity/SlotManagement';
import BuildingManagerHomePage from './components/Admin/BuildingManager/BuildingManagerHomePage';
import SercurityManagement from './components/Admin/BuildingManager/SercurityManagement';
import AdminLogin from './components/Admin/AdminLogin';
import RevenueManagement from './components/Admin/BuildingManager/RevenueManagement';
import HeadManagerHomePage from './components/Admin/HeadManager/HeadManagerHomePage';

import AccountInformation from './components/Account/AccountInformation';
import AllBooking from './components/Account/AllBooking';
import CancelledBooking from './components/Account/CancelledBooking';
import CompletedBooking from './components/Account/CompletedBooking';
import HistoryBooking from './components/Account/HistoryBooking';
import ProfileSetting from './components/Account/ProfileSetting';

import SerHomePage from './components/Admin/Sercurity/SerHomePage';
import MoneyManagement from './components/Admin/Sercurity/MoneyManagement';
import ResidentPage from './components/Resident/ResidentPage';
import CustomerPage from './components/Customer/CustomerPage';
import News from './components/Screen/News';
import Service from './components/Screen/Service';
import ErrorPage from './components/Error/ErrorPage';





import About from './components/Complements/About';
import AdminHub from './components/Admin/AdminHub';
import TestDate from './components/Error/test';





function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-right'></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/Forgotten-pwd' element={<ForgottenPwd />}></Route>
          <Route path='/Reservation' element={<Reservation />}></Route>
          <Route path='/PaymentInformation' element={<PaymentInformation />}></Route>
          <Route path='/Banking' element={<Banking></Banking>}></Route>
          <Route path='/ReservationComplete' element={<ReservationComplete />}></Route>
          <Route path='/ZoneDetail/:index' element={<ZoneDetail />}></Route>
          <Route path='/ManagerHomepage' element={<ManagerHomePage></ManagerHomePage>}></Route>
          <Route path='/SerHomePage' element={<SerHomePage></SerHomePage>}></Route>
          <Route path='/ResidentManagement' element={<ResidentManagement></ResidentManagement>}></Route>
          <Route path='/CustomerManagement' element={<CustomerManagement></CustomerManagement>}></Route>
          <Route path='/InvoiceManagement' element={<InvoiceManagement></InvoiceManagement>}></Route>
          <Route path='/SlotManagement' element={<SlotManagement></SlotManagement>}></Route>
          <Route path='/BuildingManagerHomePage' element={<BuildingManagerHomePage></BuildingManagerHomePage>}></Route>
          <Route path='/SercurityManagement' element={<SercurityManagement></SercurityManagement>}></Route>
          <Route path='/Price' element={<Price></Price>}></Route>
          <Route path='/AdminLogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path='/RevenueManagement' element={<RevenueManagement></RevenueManagement>}></Route>
          <Route path='/MoneyManagement' element={<MoneyManagement></MoneyManagement>}></Route>
          <Route path='/HeadManagerHomePage' element={<HeadManagerHomePage></HeadManagerHomePage>}></Route>
          <Route path='/about' element={<About></About>}></Route>


          <Route path='/allbooking' element={<AllBooking />}></Route>
          <Route path='/pastbooking' element={<HistoryBooking />}></Route>
          <Route path='/completedbooking' element={<CompletedBooking />}></Route>
          <Route path='/cancelledbooking' element={<CancelledBooking />}></Route>
          <Route path='/profilesetting' element={<ProfileSetting />}></Route>
          <Route path='/account' element={<AccountInformation />}></Route>

          <Route path='/ResidentPage' element={<ResidentPage></ResidentPage>}></Route>
          <Route path='/CustomerPage' element={<CustomerPage></CustomerPage>}></Route>


          <Route path='/News' element={<News></News>}></Route>
          <Route path='/Service' element={<Service></Service>}></Route>
          <Route path='*' element=<ErrorPage></ErrorPage> />


          <Route path='/AdminHub' element={<AdminHub></AdminHub>}></Route>

          <Route path='/testDemo' element={<TestDate></TestDate>}></Route>
      
          


        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
