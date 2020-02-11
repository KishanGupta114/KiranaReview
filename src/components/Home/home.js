import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {
    Segment,
    Grid,
    List,
    Header,
    Rating,
    Card, 
    Icon,
    Pagination,
    Image
    
} from 'semantic-ui-react'

class Home extends Component {
    render() {
        return( 
          <Container-Fluid>
          <Container>
         <Grid stackable centered style={{padding: '10px 0 10px 0', margin: '0 0 0 9.2rem'}}>
         <h2 >Best Product Reviews and Feedback <Icon name='smile outline' /></h2>
         </Grid>
         </Container>
          <Container>
                    <Grid stackable centered relaxed='very' columns={4}>
                    
                            <Grid.Column>
                            <Card centered>
                              <Image src='https://images-na.ssl-images-amazon.com/images/I/71k8pP7gw1L._SX679_.jpg' />
                              <Card.Content>
                              <Card.Header>OREO <Rating icon='star' disabled defaultRating={5} maxRating={5} /></Card.Header>
                              <Card.Meta>Cadbury</Card.Meta>
                              <Card.Meta>Biscuit</Card.Meta>
                              
                            </Card.Content>
                            <Card.Content>
                              <a>
                                <Icon name='info circle' />
                                About Product
                              </a>
                            </Card.Content>
                            
                            </Card>
                            </Grid.Column>
                            <Grid.Column>
                            <Card centered>
                            <Image src='https://images-na.ssl-images-amazon.com/images/I/91nnaNniZdL._SY550_.jpg' />
                            <Card.Content>
                            <Card.Header>ALOO BHUJIA<Rating icon='star' disabled defaultRating={4} maxRating={5} /></Card.Header>
                            <Card.Meta>Haldiram's </Card.Meta>
                            <Card.Meta>Namkeen</Card.Meta>
                            <Card.Content style={{paddingTop: '10px'}}>
                              <Icon name='rupee sign' /> 88 | 400g
                              </Card.Content>
                          </Card.Content>
                          <Card.Content>
                              <a>
                                <Icon name='info circle' />
                                About Product
                              </a>
                            </Card.Content>
                          </Card>
                            </Grid.Column>
                            <Grid.Column>
                            <Card centered>
                            <Image src='https://images-na.ssl-images-amazon.com/images/I/71YAWrDWdBL._SX425_PIbundle-14,TopRight,0,0_AA425SH20_.jpg' />
                            <Card.Content>
                            <Card.Header>Dairy Milk <Rating icon='star' disabled defaultRating={4} maxRating={5} /></Card.Header>
                            <Card.Meta>Cadbury</Card.Meta>
                            <Card.Meta>Chocalate</Card.Meta>
                            <Card.Content style={{paddingTop: '10px'}}>
                              <Icon name='rupee sign' /> 10 | 12.5g
                              </Card.Content>
                          </Card.Content>
                          <Card.Content>
                              <a>
                                <Icon name='info circle' />
                                About Product
                              </a>
                            </Card.Content>
                          </Card>
                            </Grid.Column>
                          </Grid>

                          

                          <Grid centered stackable relaxed='very' columns={4}>
                          <Grid.Column>
                          <Card centered>
                            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' style={{height: '10rem'}} />
                            <Card.Content>
                            <Card.Header>Item Name <Rating icon='star' disabled defaultRating={4} maxRating={5} /></Card.Header>
                            <Card.Meta>Brand</Card.Meta>
                            <Card.Meta>Category</Card.Meta>
                            <Card.Content style={{paddingTop: '10px'}}>
                              <Icon name='rupee sign' />
                              </Card.Content>
                          </Card.Content>
                          <Card.Content>
                              <a>
                                <Icon name='info circle' />
                                About Product
                              </a>
                            </Card.Content>
                          </Card>
                          </Grid.Column>
                          <Grid.Column>
                          <Card centered>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' style={{height: '10rem'}} />
                          <Card.Content>
                          <Card.Header>Item Name <Rating icon='star' disabled defaultRating={3} maxRating={5} /></Card.Header>
                          <Card.Meta>Brand</Card.Meta>
                          <Card.Meta>Category</Card.Meta>
                          <Card.Content style={{paddingTop: '10px'}}>
                              <Icon name='rupee sign' />
                              </Card.Content>
                        </Card.Content>
                        <Card.Content>
                              <a>
                                <Icon name='info circle' />
                                About Product
                              </a>
                            </Card.Content>
                        </Card>
                          </Grid.Column>
                          <Grid.Column>
                          <Card centered>
                          <Image src='https://react.semantic-ui.com/images/wireframe/image.png' style={{height: '10rem'}} />
                          <Card.Content>
                          <Card.Header>Item Name <Rating icon='star' disabled defaultRating={3} maxRating={5} /></Card.Header>
                          <Card.Meta>Brand</Card.Meta>
                          <Card.Meta>Category</Card.Meta>
                          <Card.Content style={{paddingTop: '10px'}}>
                              <Icon name='rupee sign' />
                              </Card.Content>
                        </Card.Content>
                        <Card.Content>
                              <a>
                                <Icon name='info circle' />
                                About Product
                              </a>
                            </Card.Content>
                        </Card>
                          </Grid.Column>
                        </Grid>

                        <Grid stackable centered relaxed='very' columns={4}>
                        <Pagination
                              defaultActivePage={1}
                              firstItem={null}
                              lastItem={null}
                              pointing
                              secondary
                              totalPages={10}
                            />
                          
                            </Grid>
                          <Grid style={{ height: '10vh' }} />
            </Container>
            
            <Segment inverted vertical style={{ padding: '5em 0em', userSelect: 'none' }}>
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
          
        </Container-Fluid>

        )

    }
}
export default Home