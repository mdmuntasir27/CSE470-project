import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DeleteDoctor from './pages/DeleteDoctor.jsx';
import ShowDoctors from './pages/ShowDoctors.jsx';
import AddDoctors from './pages/AddDoctors.jsx';
import Home from './pages/home.jsx';
import PatientSignup from './pages/PatientSignup.jsx';
import PatientLogin1 from './pages/PatientLogin1.jsx';
import PatientLogin2 from './pages/PatientLogin2.jsx';
import PatientDashboard from './pages/PatientLoginView.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import DoctorLogin from './pages/DoctorLogin.jsx';
import DoctorDashboard from './pages/DoctorLoginView.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import AppointmentBooking from './pages/AppointmentBooking.jsx';
import ShowPatientAppointment from './pages/ShowPatientAppointment.jsx';
import ShowDoctorAppointment from './pages/ShowDoctorAppointment.jsx';
import UpdatePatientInfo from './pages/UpdatePatientInfo.jsx';
import RescheduleAppointmentTiming from './pages/DoctorRescheduleTiming.jsx';
import CancelAppointment from './pages/DoctorCancelTiming.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/doctorAppointments' element={<ShowDoctors />} />
      <Route path='/deleteDoc/:id' element={<DeleteDoctor />} />
      <Route path='/doctor/dashboard' element={<DoctorDashboard />} />
      <Route path='/doctor/showAppointments' element={<ShowDoctorAppointment />} />
      <Route path='/doctor/rescheduleAppointment' element={<RescheduleAppointmentTiming />} />
      <Route path='/doctor/cancelAppointment' element={<CancelAppointment />} />
      <Route path='/doctor/login' element={<DoctorLogin />} />
      <Route path='/admin/addDoctor' element={<AddDoctors />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/' element={<Home />} />
      <Route path='/patient/signup' element={<PatientSignup />} />
      <Route path='/patient/login' element={<PatientLogin1 />} />
      <Route path='/patient/loginWelcome' element={<PatientLogin2 />} />
      <Route path='/patient/dashboard' element={<PatientDashboard />} />
      <Route path='/patient/appointmentBooking' element={<AppointmentBooking />} />
      <Route path='/patient/showAppointments' element={<ShowPatientAppointment />} />
      <Route path='/patient/updateInfo' element={<UpdatePatientInfo />} />
    </Routes>
  );
};

export default App