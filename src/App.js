import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/Home/Home/Home';
import AdminRoute from './Pages/Login/Login/AdminRoute/AdminRoute';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Navigation from './Shared/Navigation/Navigation';

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <AuthProvider>
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route path='/home' element={<Home />}>
          </Route>
          <Route path='/appointment' element={<PrivateRoute><Appointment /></PrivateRoute>}>
          </Route>
          <Route path='/login' element={<Login />}>
          </Route>
          <Route path='/register' element={<Register />}>
          </Route>
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route exact path="/dashboard" element={<DashboardHome
              date={date} setDate={setDate}
            ></DashboardHome>}>
            </Route>
            <Route path={`/dashboard/payment/:appointmentId`} element={<Payment></Payment>}>
            </Route>
            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>
            </Route>
            <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>}>
            </Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
