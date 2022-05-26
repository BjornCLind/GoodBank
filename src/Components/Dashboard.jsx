import React from "react";
import { Card, Button, Alert , Nav, Navbar, Container} from 'react-bootstrap';
import bankImage from "./banklogo.png";
import { useState } from 'react';
import { useAuth } from "../Context/AuthContext.js";
import { Link, useNavigate } from 'react-router-dom'
import Navi from "./Navi.jsx";
import axios from "axios";
import { useEffect } from "react";

export default function Dashboard() {

  const [error, setError] = useState("")
  const {currentUser, logout} = useAuth()
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null);


  // const changeData = () => {
  //   axios.get(`/get-data/${currentUser.email}`)
  //   .then(result => {
  //     setUserInfo(result.data[0])
  //   })
  //   .catch(err => {
  //     console.log('err', err)
  //   })
  // }



  async function handleLogout() {
    setError('')

    try {
        await logout()
        navigate('/login')
    } catch {
        setError('Failed to log out')
    }
  }

  return (
    <>
    <Navi/>
  <div className="content">
 <Card>
    <Card.Header>Welcome <strong>{currentUser.email}</strong> to Last Hawaiian Bank</Card.Header>
  <Card.Img variant="top" src={bankImage} />
  <Card.Body>
    {/* <h2 className="text-left mb-4"> Checkings Balance: {userInfo ? userInfo.checking : null}</h2>
    <h2 className="text-left mb-4"> Savings Balance: { userInfo ? userInfo.savings : null }</h2> */}
    {error && <Alert variant="danger">{error}</Alert>}
    <Card.Text>
      Withdraw, Deposit, and modify your profile in one convenient location.
    </Card.Text>
  </Card.Body>
</Card>
</div>
    <div className= "w-100 text-center mt-2">
      <Button variant="link" onClick={handleLogout}>Log out</Button>
    </div>
    </>

  )
}