import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
