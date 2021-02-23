import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700&display=swap"
                    rel="stylesheet"
                />
                <meta name="author" content="Magno Nascimento" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
