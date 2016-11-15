import React from 'react'
import { Group, Columns , Column, Container, Input, Label, Section, Title, Subtitle, Button, Textarea, Modal, Content, Tr, Td, Tbody, Table, Tfoot, Select  } from 're-bulma'
import { style } from 'next/css'
import Link from 'next/link'
import Rebase from 're-base'
import 'whatwg-fetch'
import Footer from '../components/footer'
import Header from '../components/header'

const base = Rebase.createClass({
  apiKey: "AIzaSyC28QlWR-605lobVbBbch3AzqZ0QwIDBZM ",
  authDomain: "bitfak-f44e0.firebaseapp.com ",
  databaseURL: "https://bitfak-f44e0.firebaseio.com/",
  storageBucket: "bitfak-f44e0.appspot.com ",
}) 


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phone_number: '',
      amount: '',
      provider:'',
      isOpen:  false,
      bitcoinPrice: '',
      totalPrice: 0,
      totalBtc: 0,
      isLoading: false,
      created_at:  Date.now()
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
  }
  handleChange(field, event) {
    let nextState = {}
    nextState[field] = event.target.value
    this.setState(nextState)
  }
  openModal(event){
    event.preventDefault();
    this.setState({
      isOpen: true,
    });
    const totalWithPercentage = Number(this.state.amount) + (5 * Number(this.state.amount)) / 100;
    fetch(`http://localhost:4000/api/v1/ticker/pln?amount=${totalWithPercentage}`)
      .then(result => result.json())
      .then(json => this.setState({
        bitcoinPrice: json.bitcoinPrice,
        totalPrice: totalWithPercentage,
        totalBtc : json.totalToPay
      }))
  }
  handleSubmit(event){
    this.setState({
      isLoading: true
    })
    fetch('http://localhost:4000/api/v1/address/create', {method: 'POST'})
      .then((result) => {
        return result.json()
      })
      .then((address) => {
        let immediatelyAvailableReference = base.push('topups', {
          data: { 
            phone_number: this.state.phone_number,
            amount:this.state.amount,
            provider: this.state.provider,
            bitcoinPrice: this.state.bitcoinPrice,
            totalPrice: this.state.totalPrice,
            totalBtc: this.state.totalBtc,
            created: this.state.created_at,
            address
          },
          then(err){
            if(!err){
              window.location = `/pay?id=${immediatelyAvailableReference.key}&type=topups`;
            }
          }
        });
    })
  }
  render() {
    return (
      <div>
        <Container className={style(styles.container)}>
          <Header pageTitle="What do you want to do?" />
          <Section className={style(styles.section)}>
            <div className={style(styles.header)}>
              <Title size="is3">Top-up your phone with Bitcoin</Title>
              <Subtitle>We only accept <img src="static/bitcoin_logo.png" width="70"/></Subtitle>
            </div>
            <form noValidate onSubmit={this.openModal}>
              <Columns>
                <Column>
                  <Label>Phone Number</Label>
                  <Input required onChange={this.handleChange.bind(this, 'phone_number')} value={this.state.phone_number} type="number" placeholder="Account" />
                </Column>
                <Column>
                  <Label>Amount <small>(5 - 300)</small></Label>
                  <Group>
                    <Input help={{ color: 'isSuccess', text: '5 - 300',}} isExpanded required onChange={this.handleChange.bind(this, 'amount')} value={this.state.amount} type="number" placeholder="Amount" />
                    <Select onChange={this.handleChange.bind(this, 'provider')}>
                      <option value>Choose</option>
                      <option value="play">Play</option>
                      <option value="orange">Orange</option>
                    </Select>
                  </Group>
                </Column>
              </Columns>
              <Button state={(!this.state.phone_number || !this.state.provider || !this.state.amount) && 'isDisabled'} type="submit" color="isInfo">Checkout</Button> 
            </form>
            <Modal
              type="card"
              headerContent="Are you sure?"
              footerContent={
                <div style={{ padding: '20px'}} >
                  {this.state.isLoading &&
                    <Button state="isLoading" color="isPrimary">Loading</Button>} 
                  {!this.state.isLoading &&
                    <Button color="isInfo" onClick={this.handleSubmit}>Let's do it.</Button>}
                </div>}
              isActive={this.state.isOpen}
              onCloseRequest={() => this.setState({ isOpen: false, isLoading: false })}
            >
              <Content>
                <Table>
                  <Tbody>
                    <Tr>
                      <Td>Phone:</Td>
                      <Td><strong>{this.state.phone_number}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Amount:</Td>
                      <Td><strong>{this.state.amount}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Provider:</Td>
                      <Td><strong>{this.state.provider}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Bitcoin Price:</Td>
                      <Td>
                        <strong>{this.state.bitcoinPrice}</strong>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>Taxes:</Td>
                      <Td>
                        <strong>5%</strong>
                      </Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Td>Total:</Td>
                      <Td>
                        <strong>{this.state.totalPrice}zł</strong>
                      </Td>
                    </Tr>
                  </Tfoot>
                </Table>
              </Content>
            </Modal>
          </Section>
        </Container>
        <Footer />
      </div>
    )
  }
}

const styles = {
  container: {
    padding: '10px'
  },
  section: {
    marginTop: '40px',
    border: '1px solid #efefef',
    borderRadius: '5px'
  },
  header: {
    padding: '40px 40px 80px 0px'
  }
}