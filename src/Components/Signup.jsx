import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext.js'
import { createAccount } from '../Dal.js'
import Navi from './Navi.jsx'

export default function Signup() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup }= useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }

    try{
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)

      navigate('/')

      console.log('email ref curr value' , emailRef.current.value)

      createAccount(emailRef.current.value);

    } catch {
      setError ('Failed to create an account')
    }
    setLoading(false)


  }

  return (
    <>
    <Navi/>
    <Card className='content'>
      <Card.Body>
        <h2 className="text-center mb-4"> Sign Up</h2>

        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required></Form.Control>
          </Form.Group>
          <Form.Group id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={passwordRef} required></Form.Control>
          </Form.Group>
          <Form.Group id="password-confirm">
          <Form.Label>Password Confirm</Form.Label>
          <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
          </Form.Group>
          <Button disabled ={loading}  className = "w-100" type="submit">
          Sign Up
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className= "w-100 text-center mt-2">
      Already have an account? <Link to="/login">Log In</Link>
    </div>
    </>
  )
}
