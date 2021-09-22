import React, { FunctionComponent, Fragment } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const _document: FunctionComponent = () => {
    return (
        <Html>
            <Head>
                <script dangerouslySetInnerHTML={{__html : `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PN9Q2SV');</script>`}}>    
                </script>
                <link
                    href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap'
                    rel='stylesheet'
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default _document
