import React, { Component } from 'react'
import { Grid, Header, Image, Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import dashBoard from './sidebarMenu/dashBoard'
import { Container } from 'react-bootstrap'
import reviewRating from './sidebarMenu/reviewRating'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './adminPanel.css'

 class adminPanel extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return ( 
      <Container-Fluid style={{ userSelect: 'none' }}>
     
                <Header as='h2' color='teal' textAlign='center'>
                         Admin Panel
                </Header>
              <Menu vertical>
                  <Menu.Item>
                    <Input placeholder='Search...' />
                  </Menu.Item>     

                  <Menu.Item>
                    Dashboard Home
                    <Icon name='dashboard' />
                  <Menu.Menu>
            
                  <Menu.Item
                  name='dailyvisit'
                  active={activeItem === 'dailyvisit'}
                  onClick={this.handleItemClick}>
                  Daily Visit
                  <Icon name='phabricator' />
                  </Menu.Item>

                  <a href="/reviewRating"><Menu.Item
                    name='review'
                    active={activeItem === 'review'}
                    onClick={this.handleItemClick}
                  >
                  
                    Reviews & Rating
                    <Icon name='star outline' />
                  </Menu.Item></a>

                  <Menu.Item
                    
                    name='comment'
                    active={activeItem === 'comment'}
                    onClick={this.handleItemClick}
                  >
                    Comments
                  <Icon name='comment alternate outline' />
                  </Menu.Item>
            <Menu.Item
              name='mail'
              active={activeItem === 'mail'}
              onClick={this.handleItemClick}
            >
              E-Mail Notification
              <Icon name='mail' />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={this.handleItemClick}
        >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='coupon'
          active={activeItem === 'coupon'}
          onClick={this.handleItemClick}
        >
          Generate Coupon
          <Icon name='ticket alternate' />
        </Menu.Item>

        <a href="/addProduct"><Menu.Item
          name='addproduct'
          active={activeItem === 'addproduct'}
          onClick={this.handleItemClick}
        >
          Add Product
          <Icon name='shopping basket' />
        </Menu.Item></a>

        <Menu.Item
        name='manageproduct'
        active={activeItem === 'manageproduct'}
        onClick={this.handleItemClick}
      >
        Manage Product
        <Icon name='warehouse' />
      </Menu.Item>

        <a href="/productDetails"> <Menu.Item
          name='productdetail'
          active={activeItem === 'productdetail'}
          onClick={this.handleItemClick}
        >
          Product Details
          <Icon name='list' />
        </Menu.Item></a>
       
        <Menu.Item>
        Manage Users
        <Icon name='users' />
        <Menu.Menu>
          
          <Menu.Item
            name='adduser'
            active={activeItem === 'adduser'}
            onClick={this.handleItemClick}
          >
            Add User
            <Icon name='add user' />
          </Menu.Item>

          <Menu.Item
            name='usersetting'
            active={activeItem === 'usersetting'}
            onClick={this.handleItemClick}
          >
            User Setting
            <Icon name='setting' />
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item
      name='adminlogout'
      active={activeItem === 'adminlogout'}
      onClick={this.handleItemClick}
    >
      Admin Logout
      <Icon name='sign out' />
    </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
   
          <BrowserRouter>
          
          <Switch>
            <Route path='/reviewRating' component={reviewRating} />
            <Route path='/dashBoard' component={dashBoard} />
          </Switch>
      
      </BrowserRouter>
      </Container-Fluid>
    )
  }
}
export default adminPanel