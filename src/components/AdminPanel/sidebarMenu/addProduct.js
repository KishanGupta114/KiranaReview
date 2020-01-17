import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {
   Rating,
   Form,
   Dropdown, 
   Image, 
   Segment, 
   Button, 
   Icon,
   Table, 
   Grid, 
   Header, 
   TextArea 
} from 'semantic-ui-react'
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


             <Grid textAlign='center' verticalAlign='middle' stackable columns={3}>
             <Grid.Column style={{ maxWidth: 450 }}>
               
               <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
               <ImageUploader
               
                 withIcon={true}
                 buttonText='Upload image'
                 onChange={this.onDrop}
                 imgExtension={['.jpg', '.png', '.gif']}
                 maxFileSize={5242880}
                 />
               
             </Grid.Column>
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
                             placeholder='Choose Or Add Product Brand'
                         />
                         
                       </Form.Input>
                       <Form.Input fluid icon='list' iconPosition='left' placeholder='Category' >
                       <Dropdown
                             search
                             selection
                             wrapSelection={false}
                             options={options}
                             placeholder='Choose Or Add Product Category'
                         />
                         
                       </Form.Input>
                       <Form.Input fluid icon='inr' iconPosition='left' placeholder='Price / Unit' />
                       <Button animated color='teal'>
                       <Button.Content visible>Add more</Button.Content>
                       <Button.Content hidden>
                         <Icon name='plus' />
                       </Button.Content>
                     </Button>
                     <br /><br />
                       <p>Give your rating here </p>
                       <Rating icon='star' defaultRating={3} maxRating={5} />
                       <br /><br />
                       <Form.Input>
                         <TextArea placeholder='Description'></TextArea></Form.Input>
                       
                        
 
                       <Button animated='vertical' color='teal' fluid size='large'>
                           <Button.Content visible>Upload Product</Button.Content>
                           <Button.Content hidden>
                             <Icon name='upload' />
                           </Button.Content>
                         </Button>
                       <br />
                       
                      
                           <Button animated color='teal'>
                           <Button.Content visible>Edit</Button.Content>
                           <Button.Content hidden>
                             <Icon name='edit' />
                           </Button.Content>
                         </Button>
                        
                         <Button animated color='teal'>
                           <Button.Content visible>Save</Button.Content>
                           <Button.Content hidden>
                             <Icon name='save' />
                           </Button.Content>
                         </Button>
                        
                     </Segment>
                   </Form>  
               
             </Grid.Column>
           </Grid>
           <Grid style={{ height: '10vh' }} />     
            </Container>
        );
    }
}
export default addProduct;