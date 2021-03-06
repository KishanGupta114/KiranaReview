import React from 'react'
import './userSignup.css'
import { Button, Form, Grid, Icon, Header, Message, Segment } from 'semantic-ui-react'

const userSignup = () => (
  <Grid textAlign='center' style={{ height: '85vh', userSelect: 'none' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
      <Icon name='user' /> User Signup
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
        Already have an account? <a href='/userLogin'>Login</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default userSignup

    
