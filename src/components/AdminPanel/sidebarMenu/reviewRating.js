import React, { Component } from 'react'
import { Feed, Button, Icon } from 'semantic-ui-react'
import { Container } from 'react-bootstrap'


class reviewRating extends Component {
    render() {
        return (
            <Container>
                <Feed>
                    <Feed.Event>
                    <Feed.Label>
                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <Feed.User>Elliot Fu</Feed.User> added you as a friend
                        <Feed.Date> 1 Hour Ago
                        </Feed.Date>
                        
                        </Feed.Summary>
                        
                        <Feed.Meta>
                        
                        <Feed.Like>
                            <Icon name='star' />5 star
                        </Feed.Like>

                        </Feed.Meta>
                        <Button.Group size='mini' floated='right'>
                        <Button positive>Allow</Button>
                        <Button.Or />
                        <Button negative>Disable</Button>
                        </Button.Group>
                    </Feed.Content>
                    
                    </Feed.Event>

                    <Feed.Event>
                    <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <a>Helen Troy</a> added <a>2 new illustrations</a>
                        <Feed.Date>4 days ago
                        </Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>
                        <a>
                            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                        <a>
                            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                        </Feed.Extra>
                        <Feed.Meta>
                        <Feed.Like>
                        <Icon name='star' />5 star 
                        </Feed.Like>
                        </Feed.Meta>
                        <Button.Group size='mini' floated='right'>
                        <Button positive>Allow</Button>
                        <Button.Or />
                        <Button negative>Disable</Button>
                        </Button.Group>
                    </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                    <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary
                        date='2 Days Ago' 
                        user='Jenny Hess'
                        content='add you as a friend'
                        />
                        <Feed.Meta>
                        <Feed.Like>
                        <Icon name='star' />2 star
                        </Feed.Like>
                        </Feed.Meta>
                        <Button.Group size='mini' floated='right'>
                        <Button positive>Allow</Button>
                        <Button.Or />
                        <Button negative>Disable</Button>
                        </Button.Group>
                    </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                    <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <a>Joe Henderson</a> posted on his page
                        <Feed.Date>3 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra text>
                        Ours is a life of constant reruns. We are always circling back to where
                         we started, then starting all over again. Even if we don not run
                        extra laps that day, we surely will come back for more of the same
                        another day soon.
                        </Feed.Extra>
                        <Feed.Meta>
                        <Feed.Like>
                        <Icon name='star' />4 star
                        </Feed.Like>
                        </Feed.Meta>
                        <Button.Group size='mini' floated='right'>
                        <Button positive>Allow</Button>
                        <Button.Or />
                        <Button negative>Disable</Button>
                        </Button.Group>
                    </Feed.Content>
                    </Feed.Event>

                    <Feed.Event>
                    <Feed.Label>
                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                    </Feed.Label>
                    <Feed.Content>
                        <Feed.Summary>
                        <a>Justen Kitsune</a> added <a>2 new photos</a> of you
                        <Feed.Date>4 days ago</Feed.Date>
                        </Feed.Summary>
                        <Feed.Extra images>
                        <a>
                            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                        <a>
                            <img src='https://react.semantic-ui.com/images/wireframe/image.png' />
                        </a>
                        </Feed.Extra>
                        <Feed.Meta>
                        <Feed.Like>
                        <Icon name='star' />3 star
                            
                        </Feed.Like>
                        </Feed.Meta>
                        <Button.Group size='mini' floated='right'>
                        <Button positive>Allow</Button>
                        <Button.Or />
                        <Button negative>Disable</Button>
                        </Button.Group>
                    </Feed.Content>
                    
                    </Feed.Event>
                </Feed>
                

               
            </Container>

        )
    }
}
export default reviewRating; 