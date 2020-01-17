import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import _ from 'lodash'
import faker from 'faker'
import { Pagination, Search, Grid, Icon, Segment, Header, Table, Rating } from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
  title: faker.company.companyName(),
  description: faker.company.catchPhrase(),
  image: faker.internet.avatar(),
  price: faker.finance.amount(0, 100, 2, '$'),
}))



class productDetails extends Component {

  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

    render() {
     
      const { isLoading, value, results } = this.state
        return (
            <Container>
            <Header as='h2' color='teal' textAlign='center' style = {{marginTop: 20}}>
            List Of Products
             </Header>

             <Grid style={{margin: '0 0 1rem 27.2rem'}} stackable>
             <Grid.Column>
             
               <Search
               style={{margin: '0 0 0 4rem'}}
                 placeholder='Search Product ...'
                 loading={isLoading}
                 onResultSelect={this.handleResultSelect}
                 onSearchChange={_.debounce(this.handleSearchChange, 500, {
                   leading: true,
                 })}
                 results={results}
                 value={value}
                 {...this.props}
               />
             </Grid.Column>
             
           </Grid>

             <Table stackable celled padded>
             <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product ID</Table.HeaderCell>
                <Table.HeaderCell>Product Name</Table.HeaderCell>
                <Table.HeaderCell>Brand Name</Table.HeaderCell>
                <Table.HeaderCell><Icon name='star' />Accuracy</Table.HeaderCell>
                <Table.HeaderCell><Icon name='inr' /> Prices</Table.HeaderCell>
                <Table.HeaderCell>Category</Table.HeaderCell>
                <Table.HeaderCell><Icon name='setting' /> Manage</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h2' textAlign='center'>
                    #101
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>Monaco</Table.Cell>
                <Table.Cell singleLine>PARLE</Table.Cell>
                <Table.Cell>
                  <Rating icon='star' disabled defaultRating={4} maxRating={5} />
                </Table.Cell>
                <Table.Cell textAlign='right'>
                 RS. 5 /pcs.<br />
                 RS. 10 /pcs.<br />
                 
                </Table.Cell>
                <Table.Cell>
                 Salted Biscuit
                </Table.Cell>
                <Table.Cell>
                  <button style={{alignItems: 'center', borderStyle: 'none', margin: '1rem 0 0 1rem', }}><Icon name='setting' /></button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Header as='h2' textAlign='center'>
                    #102
                  </Header>
                </Table.Cell>
                <Table.Cell singleLine>LUX</Table.Cell>
                <Table.Cell singleLine>Hindustan Unilever</Table.Cell>
                <Table.Cell>
                  <Rating icon='star' disabled defaultRating={2} maxRating={5} />
                </Table.Cell>
                <Table.Cell textAlign='right'>
                 RS. 5 /pcs. <br />
                  RS. 10 /pcs. <br />
                  RS. 26 /pcs. <br />
                </Table.Cell>
                <Table.Cell>
                  Soap
                </Table.Cell>
                <Table.Cell>
                  <button style={{alignItems: 'center', borderStyle: 'none', margin: '1rem 0 0 1rem'}}><Icon name='setting' /></button>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <div class="text-center">
            <Pagination
                defaultActivePage={1}
                
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                totalPages={5}
                style={{margin: '0 0 1rem 1.5rem'}}
            /></div>
           </Container>
        )
    }
}
export default productDetails
