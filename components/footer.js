import React from 'react'
import { Footer, Container, Content } from 're-bulma'
import { style } from 'next/css'

export default () => (
    <Footer style={{marginTop: '30px'}}>
        <Container>
            <Content>
            <p style={{ textAlign: 'center'}}>
                <strong>bitfak.pl</strong> are secured with BitGo™
            </p>
            <p style={{ textAlign: 'center'}}>
                <a style={{borderBottom: '0px'}} href="https://bitgo.com">
                    <img style={{ width: '100px'}} src="static/BitGo_Secured_Color.png" />
                </a>
            </p>
            </Content>
        </Container>
    </Footer>
)