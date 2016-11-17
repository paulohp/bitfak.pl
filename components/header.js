import React from 'react'
import { style } from 'next/css'
import Head from 'next/head'

export default ({pageTitle}) => (
    <div>
      <Head>
        <title>bitfak - {pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </Head>
      <div>
          <img className={style(styles.logo)} src="static/logo.png" />
      </div>
    </div>
);

const styles = {
  logo: {
    width: '120px'
  },
}