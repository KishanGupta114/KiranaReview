import React, { Component } from 'react'
import { 
    Container,
    Nav,
    Navbar,
    NavDropdown,
 } from 'react-bootstrap';
import './navbar.css'

class navbar extends Component {
    render() {
        return (
            
            <Container>
              
                <Navbar bg="none" expand="lg" style={{ userSelect: 'none' }}>
                    <Navbar.Brand href="/home">KIRANA REVIEW</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        
                            <NavDropdown title="Categories " id="basic-nav-dropdown" >
                            <NavDropdown.Item href="#detergent">Detergent</NavDropdown.Item>
                            <NavDropdown.Item href="#oil">Oil</NavDropdown.Item>
                            <NavDropdown.Item href="#soap">Soap</NavDropdown.Item>
                            <NavDropdown.Item href="#biscuit">Biscuit</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#seemore">See More..</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="My Account " id="basic-nav-dropdown">
                            <NavDropdown.Item href="userLogin">Login</NavDropdown.Item>
                            <NavDropdown.Item href="userSignup">SignUp</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/adminLogin">Admin</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                            
                    </Navbar.Collapse>
                </Navbar>
               
                
               
          </Container>
        ) 
    }

}
export default navbar;
