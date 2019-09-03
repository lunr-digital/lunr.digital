import { createGlobalStyle } from 'styled-components';

import theme from '../utils/theme';

import reboot from './reboot';
import utils from './utils';
import grid from './grid';

const Global = createGlobalStyle`
    ${reboot};
    ${utils};
    ${grid};

    html {
        font-display: swap;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-weight: 400;
        font-style: normal;
        color: ${theme('textColor')};
    }
`;

export default Global;
