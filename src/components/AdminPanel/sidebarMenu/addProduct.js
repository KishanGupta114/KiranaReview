import React, { Component } from 'react'
import { Container, Text } from 'react-bootstrap'
import { Rating, Form, Dropdown, Dimmer, Message, Image, Segment, Button, Icon, Grid, List, Header, TextArea } from 'semantic-ui-react'
import ImageUploader from 'react-images-upload';
import './addProduct.css'

const options = [
    { key: 1, text: 'One', value: 1 },
    { key: 2, text: 'Two', value: 2 },
    { key: 3, text: 'Three', value: 3 },
  ]
class addProduct extends Component {

    
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        console.log(picture)
    }

    render() {

        return (
            <Container>
            <Header as='h2' color='teal' textAlign='center'>
           Add Product
            </Header>
                <Grid centered columns={2}>
                <Grid.Row centered columns={4}>  
                <Grid.Column>
                    <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                </Grid.Column>
                </Grid.Row>
                </Grid>

                <ImageUploader
              
                withIcon={true}
                buttonText='Upload image'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png', '.gif']}
                maxFileSize={5242880}
                />


                <Grid textAlign='center' style={{ height: '50vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                  
                  <Form size='large'>
                    <Segment stacked>
                      <Form.Input fluid icon='box' iconPosition='left' placeholder='Product Name' />
                      <Form.Input fluid icon='' iconPosition='left' placeholder='Product Brand' >
                      <Dropdown
                            search
                            selection
                            wrapSelection={false}
                            options={options}
                            placeholder='Choose Product Brand'
                        />
                      </Form.Input>
                      <Form.Input fluid icon='list' iconPosition='left' placeholder='Category' >
                      <Dropdown
                            search
                            selection
                            wrapSelection={false}
                            options={options}
                            placeholder='Choose Product Category'
                        />
                        
                      </Form.Input>
                      <Form.Input fluid icon='inr' iconPosition='left' placeholder='Price / Unit' />
                      <Rating icon='star' defaultRating={3} maxRating={5}
                       />
                      <Form.Input fluid icon='info' iconPosition='left' placeholder='Description' >
                        <TextArea placeholder='Description'></TextArea></Form.Input>
                      <Button color='teal' fluid size='large'>
                        Upload
                      </Button>
                    </Segment>
                  </Form>
                  
                </Grid.Column>
              </Grid>
             
            </Container>
        );
    }
}
export default addProduct;