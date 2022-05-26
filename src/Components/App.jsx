import React from "react";
import { Container } from "react-bootstrap";
import Signup from "./Signup.jsx";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";
import { AuthProvider } from '../Context/AuthContext.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import PrivateRoute from "./PrivateRoute.jsx"
import ForgotPassword from "./ForgotPassword.jsx"
import UpdateProfile from "./UpdateProfile.jsx";
import Deposit from "./Deposit.jsx";
import Withdraw from "./Withdraw.jsx"
import Navi from "./Navi.jsx";
import { useState } from "react";



function App() {

  return (
      <Container className="d-flex align-items-center justify-content-center">
        <Router>
          <AuthProvider>
          <div className="w-100">
          <Routes>
            <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
            <Route path="/update-profile" element={<PrivateRoute><UpdateProfile /></PrivateRoute>}></Route>
            <Route path="/deposit" element={<PrivateRoute><Deposit /></PrivateRoute>}></Route>
            <Route path="/withdraw" element={<PrivateRoute><Withdraw /></PrivateRoute>}></Route>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forgot-password" element={<ForgotPassword/>} />
          </Routes>
          </div>
          </AuthProvider>
        </Router>
      </Container>
  );
}

export default App;
