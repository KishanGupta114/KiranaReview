import React, { Component } from 'react'
import { 
    Container,   
    Button,
    FormControl,
    Form
 } from 'react-bootstrap';
import './search.css'

 class Search extends Component {
    render() {
        return (

            
            <Container>
            <Form className="justify-content-center" inline style={{ userSelect: 'none' }}>
            <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
            <Button className="mr-sm-2" variant="outline-info">Search</Button>
            </Form>
            </Container>
        )
    }
}
export default Search;


