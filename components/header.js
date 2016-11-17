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
        <script>
          window.intercomSettings = {
            app_id: "kry8ns5a"
          };
        </script>
        <script>(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/kry8ns5a';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>
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