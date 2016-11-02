import React from 'react'
import { Columns , Column, Container, Input, Label, Section, Title, Subtitle, Button, Textarea  } from 're-bulma'
import { style } from 'next/css'
import Link from 'next/link'
import Recaptcha from 'react-recaptcha';
import Rebase from 're-base';

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
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(field, event) {
    let nextState = {}
    nextState[field] = event.target.value
    this.setState(nextState)
  }
  handleSubmit(event){
    event.preventDefault();
    let immediatelyAvailableReference = base.push('requests', {
      data: { 
        beneficiary_name: this.state.beneficiary_name,
        beneficiary_address: this.state.beneficiary_address,
        account: this.state.account,
        amount:this.state.amount,
        description: this.state.description,
      },
      then(err){
        if(!err){
          Router.transitionTo('dashboard');
        }
      }
    });
    //available immediately, you don't have to wait for the callback to be called
    let generatedKey = immediatelyAvailableReference.key;
  }
  render() {
    return (
      <Container className={style(styles.container)}>
        <div>
          <img className={style(styles.logo)} src="static/logo.png" />
        </div>
        <Section className={style(styles.section)}>
          <div className={style(styles.header)}>
            <Title size="is3">Pay your bill with Bitcoin</Title>
            <Subtitle>We only accept <img src="static/bitcoin_logo.png" width="70"/></Subtitle>
          </div>
          <form onSubmit={this.handleSubmit}>
            <Columns>
              <Column>
                <Label>Beneficiary Name</Label>
                <Input onChange={this.handleChange.bind(this, 'beneficiary_name')} value={this.state.beneficiary_name} type="text" placeholder="Beneficiary Name" />
              </Column>
              <Column>
                <Label>Beneficiary Address</Label>
                <Input onChange={this.handleChange.bind(this, 'beneficiary_address')} value={this.state.beneficiary_address} type="text" placeholder="Beneficiary Address" />
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Label>Account</Label>
                <Input onChange={this.handleChange.bind(this, 'account')} value={this.state.account} type="number" placeholder="Account" />
              </Column>
              <Column>
                <Label>Amount</Label>
                <Input onChange={this.handleChange.bind(this, 'amount')} value={this.state.amount} type="number" placeholder="Amount" />
              </Column>
            </Columns>
            <Columns>
              <Column>
                <Label>Description of payment</Label>
                <Textarea onChange={this.handleChange.bind(this, 'description')} value={this.state.description} placeholder="Details about the payment" help={{
                  text: 'Here you can put addtional details that the receiver should know as name your name or contact.',
                  color: 'isInfo',
                }} />
              </Column>
            </Columns>
            <Button type="submit" color="isInfo">Procced</Button> 
          </form>
        </Section>
      </Container>
    )
  }
}

const styles = {
  container: {
    width: '960px',
    padding: '10px'
  },
  logo: {
    width: '120px'
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