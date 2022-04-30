import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link, useLocation } from 'react-router-dom'

export default function SigninScreen() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <title>Sign In</title>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb=3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New Customer?{' '}
          <Link to={'/signup?redirect=${redirect}'}>Create account</Link>
        </div>
      </Form>
    </Container>

  )
}
