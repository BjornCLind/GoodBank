import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert, Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext.js'
import Navi from './Navi.jsx'

export default function Login() {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()


    try{
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError ('Failed to Log In')
    }
    setLoading(false)
  }

  return (

    <>
    <Navi/>
    <Card className='content'>
      <Card.Body>
        <h2 className="text-center mb-4"> Log In</h2>
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
          <Button disabled ={loading}  className = "w-100 " type="submit">
          Log In
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className='w-100 text-center mt-3'>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    <div className= "w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign up</Link>
    </div>
    </>
  )
}