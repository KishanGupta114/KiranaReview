import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {
    Segment,
    Grid,
    List,
    Header,
    
} from 'semantic-ui-react'

class Home extends Component {
    render() {
        return( 
            
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                      <List.Item as='a'>Sitemap</List.Item>
                      <List.Item as='a'>Contact Us</List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                    </List>

                  </Grid.Column>

                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Terms of Service' />
                    <List link inverted>
                      <List.Item as='a'>Privacy Policy</List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                    </List>

                  </Grid.Column>

                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Join With Us' />
                    <List link inverted>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                      <List.Item as='a'></List.Item>
                    </List>

                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={9}>
                    <p> &copy; Copyright 2020 Kirana Review
                    <br /> All Right Reserved.</p>
                  </Grid.Column>
                  
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
          

        )

    }
}
export default Home