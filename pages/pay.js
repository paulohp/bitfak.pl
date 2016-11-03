import React from 'react'
import { Columns , Column, Container, Input, Label, Section, Title, Subtitle, Button, Textarea  } from 're-bulma'
import { style } from 'next/css'
import Link from 'next/link'

export default () => (
    <Container className={style(styles.container)}>
        <div>
            <img className={style(styles.logo)} src="static/logo.png" />
        </div>
        <Section className={style(styles.section)}>
            <div className={style(styles.centerContent)}>
                <img src="static/bitcoin_logo_ball.png" className={style(styles.btc)}/>
            </div>
            <div>
              <Title className={style(styles.centerContent)} size="is1">Pay with Bitcoin</Title>
            </div>
        </Section>
    </Container>
)

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
  },
  centerContent: {
    textAlign: 'center',
  },
  btc: {
    width: '120px',
    position: 'relative',
    top: '-100px'
  }
}