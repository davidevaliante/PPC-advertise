import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FunctionComponent } from 'react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../styles/emotion'

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
