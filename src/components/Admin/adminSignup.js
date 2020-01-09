import React, { Component } from 'react'
import {
    Container,
    Form,
    Col,
    Row,
    InputGroup,
    Button,
} from 'react-bootstrap'
import './adminSignup.css'

class adminSignup extends Component {
    render() {
        return (
            <Container>
            <Form>
            <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
        
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
          
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form.Row>
          
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Continue" />
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Signup
            </Button>
          </Form>
                
            </Container>
        );
    }
}
export default adminSignup