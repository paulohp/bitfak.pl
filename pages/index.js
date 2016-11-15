import React from 'react'
import { Columns , Column, Container, Section, Title, Button} from 're-bulma'
import { style } from 'next/css'
import Link from 'next/link'
import Footer from '../components/footer'
import Header from '../components/header'

export default () => (
    <div>
        <Container className={style(styles.container)}>
          <Header pageTitle="What do you want to do?" />
          <Section className={style(styles.section)}>
            <div className={style(styles.header)}>
              <Title size="is3">What do you want to do?</Title>
            </div>
            <div>
              <Columns>
                <Column>
                  <Button color="isInfo" size="isLarge">
                    <Link href="/invoices">Pay invoices</Link>
                  </Button>
                </Column>
                <Column>
                  <Button color="isSuccess" size="isLarge">
                    <Link href="/topup">Topup Phone</Link>
                  </Button>
                </Column>
                <Column>
                  <Button color="isWarning" size="isLarge">
                    <Link href="/withdrawl">Withdrawl to my account</Link>
                  </Button>
                </Column>
              </Columns>
            </div>
          </Section>
        </Container>
    </div>
)


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