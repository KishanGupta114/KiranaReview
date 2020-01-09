import React,{Component} from 'react'
import { Statistic,Card, Grid, Segment } from 'semantic-ui-react'
import { Container } from 'react-bootstrap'
import './dashBoard.css'

class dashBoard extends Component {
    render() {
        return (

            <Container>
                <Grid columns='equal'>
                <Grid.Column>
                <Segment>
                    <Card>
                    <Card.Content header='Daily Visit'/>
                    <Card.Content extra>
                    <Statistic>
                    <Statistic.Value>40,509</Statistic.Value>
                    </Statistic>
                    </Card.Content>
                    </Card>

                    <Card>
                    <Card.Content header='Reviews & Rating'/>
                    <Card.Content extra>
                    <Statistic>
                    <Statistic.Value>40,509</Statistic.Value>
                    </Statistic>
                    </Card.Content>
                    </Card>
                </Segment>
                </Grid.Column>

                <Grid.Column>
                <Segment>
      
                    <Card>
                        <Card.Content header='Comments'/>
                        <Card.Content extra>
                        <Statistic>
                        <Statistic.Value>40,509</Statistic.Value>
                        </Statistic>
                        </Card.Content>
                    </Card>


                    <Card>
                        <Card.Content header='E-mail Notification'/>
                        <Card.Content extra>
                        <Statistic>
                        <Statistic.Value>40,509</Statistic.Value>
                        </Statistic>
                        </Card.Content>
                    </Card>
                </Segment>
                </Grid.Column>
    
                </Grid>
            </Container>
        );
    }
}

export default dashBoard