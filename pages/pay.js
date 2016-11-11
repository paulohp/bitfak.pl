import React from 'react'
import { Columns , Column, Container, Input, Label, Section, Title, Subtitle, Button, Heading  } from 're-bulma'
import { style } from 'next/css'
import Link from 'next/link'
import Rebase from 're-base'
import 'whatwg-fetch'
import Footer from '../components/footer'
import Header from '../components/header'
import QRCode from '../components/qrcode'

const base = Rebase.createClass({
  apiKey: "AIzaSyC28QlWR-605lobVbBbch3AzqZ0QwIDBZM ",
  authDomain: "bitfak-f44e0.firebaseapp.com ",
  databaseURL: "https://bitfak-f44e0.firebaseio.com/",
  storageBucket: "bitfak-f44e0.appspot.com ",
})

export default class extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            paymentId: ''
        }
    }
    static async getInitialProps ({ req }) {
        let match = RegExp('[?&]' + 'id' + '=([^&]*)').exec(req.url)
        let id = decodeURIComponent(match[1].replace(/\+/g, ' '))
        return base.fetch('requests', {
            context: {},
            asArray: true
        }).then(data => {
            const filteredData = data.filter(d => d.key === id)
            return {payment: filteredData[0]}
        })
    }

    render() {
        return(
            <div>
                <Container className={style(styles.container)}>
                    <Header pageTitle="Checkout" />
                    <Section className={style(styles.section)}>
                        <div className={style(styles.centerToTop)}>
                            <img src="static/bitcoin_logo_ball.png" className={style(styles.btc)}/>
                            <div>
                                <Title className={style(styles.centerContent)} size="is1">Pay with Bitcoin</Title>
                            </div>
                        </div>
                        <Columns>
                            <Column>
                                <div>
                                    <Heading>Send exacly:</Heading>
                                    <Title>{this.props.payment.totalBtc}</Title>
                                </div>
                                <div>
                                    <Heading>To:</Heading>
                                    <Title>{this.props.payment.address.address}</Title>
                                </div>
                                <a href={`bitcoin:${this.props.payment.address.address}?amount=${this.props.payment.totalBtc}`}>Open Wallet</a>
                            </Column>
                            <Column>
                                <QRCode className={style(styles.centerContent)} amount={this.props.payment.totalBtc} address={this.props.payment.address.address} />
                            </Column>
                            <Column>
                                <Heading>Total Zl:</Heading>
                                <Title>{this.props.payment.totalPrice}</Title>  
                            </Column>
                        </Columns>
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
  },
  centerContent: {
    textAlign: 'center',
  },
  btc: {
    width: '120px',
  },
  centerToTop: {
    textAlign: 'center',
    position: 'relative',
    top: '-100px'
  }
}