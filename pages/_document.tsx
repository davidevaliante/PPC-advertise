import React, { FunctionComponent, Fragment } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const _document: FunctionComponent = () => {
    return (
        <Html>
            <Head>
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
