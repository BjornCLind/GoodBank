import React, { useRef, useState } from 'react'
import {Card, Form, Button, Alert} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext.js'
import Navi from './Navi.jsx'

export default function ForgotPassword() {

  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()


    try{
      setMessage('')
      setError('')
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage('Check your indox for further instructions')
    } catch {
      setError ('Failed to reset password')
    }
    setLoading(false)
  }

  return (
    <>
    <Navi/>
    <Card className='content'>
      <Card.Body>
        <h2 className="text-center mb-4">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group id="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" ref={emailRef} required></Form.Control>
          </Form.Group>
          <Button disabled ={loading}  className = "w-100 " type="submit">
          Reset Password
          </Button>
        </Form>
      </Card.Body>
    </Card>
    <div className='w-100 text-center mt-3'>
      <Link to="/login">Login</Link>
    </div>
    <div className= "w-100 text-center mt-2">
      Need an account? <Link to="/signup">Sign up</Link>
    </div>
    </>
  )
}