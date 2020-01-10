import React from 'react'
import './adminLogin.css'
import { Button, Form, Grid, Icon, Header, Image, Message, Segment } from 'semantic-ui-react'

const adminSignup = () => (
  <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      <Icon name='user' /> Admin Signup
      </Header>
      <Form size='large'>
        <Segment stacked>
        <Form.Input fluid icon='user' iconPosition='left' placeholder='Full Name' />
          <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail address' />
          <Form.Input fluid icon='phone volume' iconPosition='left' placeholder='Phone' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <a href='/adminLogin'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default adminSignup

    
