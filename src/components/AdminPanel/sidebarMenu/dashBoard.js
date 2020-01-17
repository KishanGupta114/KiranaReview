import React,{Component} from 'react'
import { Statistic, Card, Header, Grid, Image, Segment } from 'semantic-ui-react'
import { Container } from 'react-bootstrap'
import './dashBoard.css'

class dashBoard extends Component {
    render() {
        return (

            <Container>
            <Header as='h2' color='teal' textAlign='center' style = {{marginTop: 20}}>
            Dashboard Home
             </Header>
            <Grid stackable columns={3} >
            <Grid.Column>
            <a href="/">
                <Card>
                <Card.Content header='Daily Visit' textAlign='center'/>
                <Card.Content textAlign='center'>
                <Statistic>
                <Statistic.Value>40,509</Statistic.Value>
                </Statistic>
                </Card.Content>
                </Card>
                </a>
            </Grid.Column>
            <Grid.Column>
            <a href="/reviewrating"> 
                <Card>
                <Card.Content header='Reviews & Rating'  textAlign='center'/>
                <Card.Content textAlign='center'>
                <Statistic>
                <Statistic.Value>40,509</Statistic.Value>
                </Statistic>
                </Card.Content>
                </Card>
                </a> 
            </Grid.Column>
            <Grid.Column>
            <a href="/">
                <Card>
                <Card.Content header='Comments' textAlign='center'/>
                <Card.Content textAlign='center'>
                <Statistic>
                <Statistic.Value>40,509</Statistic.Value>
                </Statistic>
                </Card.Content>
                </Card>
                </a>
            </Grid.Column>

            <Grid.Column>
            <a href="/">
                <Card>
                <Card.Content header='E-mail Notification' textAlign='center'/>
                <Card.Content textAlign='center'>
                <Statistic>
                <Statistic.Value>40,509</Statistic.Value>
                </Statistic>
                </Card.Content>
                </Card>
                </a>
            </Grid.Column>
          </Grid>

          <Grid style={{ height: '10vh' }} /> 
            </Container>
        );
    }
}

export default dashBoard