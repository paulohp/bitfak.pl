import React from 'react'
import { Columns , Column, Container, Input, Label, Section, Title, Subtitle, Button, Textarea, Modal, Content, Tr, Td, Tbody, Table, Tfoot  } from 're-bulma'
import { style } from 'next/css'
import Link from 'next/link'
import Rebase from 're-base'
import 'whatwg-fetch'
import Footer from '../components/footer'
import Header from '../components/header'
import Recaptcha from 'react-recaptcha'

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
      beneficiary_name: '',
      beneficiary_address: '',
      account: '',
      amount: '',
      description:'',
      isOpen:  false,
      bitcoinPrice: '',
      totalPrice: 0,
      totalBtc: 0,
      isLoading: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.openModal = this.openModal.bind(this)
    this.verifyCallbackCaptcha = this.verifyCallbackCaptcha.bind(this)
  }
  handleChange(field, event) {
    let nextState = {}
    nextState[field] = event.target.value
    this.setState(nextState)
  }
  verifyCallbackCaptcha(){
    console.log('LOL')
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
        let immediatelyAvailableReference = base.push('invoices', {
          data: { 
            beneficiary_name: this.state.beneficiary_name,
            beneficiary_address: this.state.beneficiary_address,
            account: this.state.account,
            amount:this.state.amount,
            description: this.state.description,
            bitcoinPrice: this.state.bitcoinPrice,
            totalPrice: this.state.totalPrice,
            totalBtc: this.state.totalBtc,
            address
          },
          then(err){
            if(!err){
              window.location = `/pay?id=${immediatelyAvailableReference.key}&type=invoices`;
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
              <Title size="is3">Pay your bill with Bitcoin</Title>
              <Subtitle>We only accept <img src="static/bitcoin_logo.png" width="70"/></Subtitle>
            </div>
            <form noValidate onSubmit={this.openModal}>
              <Columns>
                <Column>
                  <Label>Beneficiary Name</Label>
                  <Input required onChange={this.handleChange.bind(this, 'beneficiary_name')} value={this.state.beneficiary_name} type="text" placeholder="Beneficiary Name" />
                </Column>
                <Column>
                  <Label>Beneficiary Address</Label>
                  <Input onChange={this.handleChange.bind(this, 'beneficiary_address')} value={this.state.beneficiary_address} type="text" placeholder="Beneficiary Address" />
                </Column>
              </Columns>
              <Columns>
                <Column>
                  <Label>Account</Label>
                  <Input required onChange={this.handleChange.bind(this, 'account')} value={this.state.account} type="number" placeholder="Account" />
                </Column>
                <Column>
                  <Label>Amount</Label>
                  <Input required onChange={this.handleChange.bind(this, 'amount')} value={this.state.amount} type="number" placeholder="Amount" />
                </Column>
              </Columns>
              <Columns>
                <Column>
                  <Label>Description of payment</Label>
                  <Textarea onChange={this.handleChange.bind(this, 'description')} value={this.state.description} placeholder="Details about the payment" help={{
                    text: 'Here you can put addtional details that the receiver should know as your name, bill number or contact.',
                    color: 'isInfo',
                  }} />
                </Column>
              </Columns>
              <div>
                <Recaptcha
                  sitekey="6LezKAwUAAAAAKRNF7D3SpjLTbZ_PFtX8alTBR8u"
                  render="explicit"
                  verifyCallback={this.verifyCallbackCaptcha}
                />
                <br />
              </div>
              <Button state={(!this.state.beneficiary_name || !this.state.account || !this.state.amount) && 'isDisabled'} type="submit" color="isInfo">Checkout</Button> 
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
                      <Td>Beneficary Name:</Td>
                      <Td><strong>{this.state.beneficiary_name}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Beneficary Address:</Td>
                      <Td><strong>{this.state.beneficiary_address}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Account:</Td>
                      <Td><strong>{this.state.account}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Amount:</Td>
                      <Td><strong>{this.state.amount}</strong></Td>
                    </Tr>
                    <Tr>
                      <Td>Description:</Td>
                      <Td><strong>{this.state.description}</strong></Td>
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
                        <strong>{this.state.totalPrice}zl</strong>
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