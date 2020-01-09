import React, { Component } from 'react'
import { 
    Container,
    Nav,
    Navbar,
    Dropdown,
    Button,
    FormControl,
    Form,
    NavDropdown,
    Carousel
 } from 'react-bootstrap';
import './search.css'

 class Search extends Component {
    render() {
        return (

            
            <Container>
            <Form className="justify-content-center" inline>
            <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
            <Button className="mr-sm-2" variant="outline-info">Search</Button>
            </Form>
            </Container>
        )
    }
}
export default Search;


