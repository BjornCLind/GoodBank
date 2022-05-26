import React, {useContext, useState, useEffect} from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useAuth } from '../Context/AuthContext.js'
import Navi from "./Navi.jsx";
import axios from "axios";

export default function Withdraw() {

  const [cValue, setCValue] = useState('');
  const [sValue, setSValue] = useState('');
  const {currentUser} = useAuth();
  const [checking, setChecking] = useState(0);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    axios.get(`/get-data/${currentUser.email}`)
      .then(result => {
        console.log()
        setChecking(result.data[0].checking)
        setSavings(result.data[0].savings)
      })
      .catch(err => console.log(err));
  }, [])


  function handleSubmitChecking(e){

    e.preventDefault();

    if (cValue > checking) {
      alert("Not enough funds");
    } else {
      axios.put('/withdraw-checking', {
        email: currentUser.email,
        amount: cValue
      })
      .then(result => {
        setChecking(result.data.checking)
      })
      .catch(err => {
        console.log('err', err)
      })
    }


  }

   function handleSubmitSavings(e){
    e.preventDefault();

    if (sValue > savings) {
      alert("Not enough funds");
    } else {
      axios.put('/withdraw-savings', {
        email: currentUser.email,
        amount: sValue
      })
      .then(result => {
        setSavings(result.data.savings);
      })
      .catch(err => {
        console.log('err', err)
      })
    }
  }

  return (
    <>
    <Navi/>
    <div className="content">
    <Card>
  <Card.Body>
    <Form className="p-5" onSubmit={handleSubmitChecking}>
  <Form.Group className="mb-3" controlId="formDepAmount">
    <Form.Label column sm={6}>
      Withdraw:
    </Form.Label>
    <p>Your Checkings Balance is ${checking}</p>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Amount"
      onChange={(e) => setCValue(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 0 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
</Card.Body>
</Card>
<Card>
  <Card.Body>
    <Form className="p-5" onSubmit={handleSubmitSavings}>
  <Form.Group className="mb-3" controlId="formDepAmount">
    <Form.Label column sm={6}>
      Withdraw:
    </Form.Label>
    <p>Your Savings Balance is ${savings}</p>
    <Col sm={10}>
      <Form.Control type="text" placeholder="Amount"
      onChange={(e) => setSValue(e.target.value)}/>
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3">
    <Col sm={{ span: 10, offset: 0 }}>
      <Button type="submit">Submit</Button>
    </Col>
  </Form.Group>
</Form>
</Card.Body>
</Card>
</div>
</>
  )
}
