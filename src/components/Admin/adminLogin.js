import React from 'react'
import './adminLogin.css'
import { Button, Form, Grid, Icon, Header, Image, Message, Segment } from 'semantic-ui-react'

const adminLogin = () => (
  <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      <Icon name='user' /> Admin Login
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/adminSignup'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default adminLogin

    
