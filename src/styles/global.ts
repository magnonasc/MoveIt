import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* End of Reset CSS */

    body {
        background-color: ${(props) => props.theme.colors.background};
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${(props) => props.theme.colors.title};
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 400;
    }

    p, span, strong, em {
        color: ${(props) => props.theme.colors.text};
    }

    html {
        font-size: 16px;

        @media (max-width: 768px) {
            font-size: 14px;
        }

        @media (max-width: 425px) {
            font-size: 12px;
        }

        @media (max-width: 368px) {
            font-size: 10px;
        }
    }

    body, input, textarea, button {
        font-weight: 300;
        font-family: 'Inter', sans-serif;
    }
`;
