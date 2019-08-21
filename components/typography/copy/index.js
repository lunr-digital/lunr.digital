import styled from 'styled-components';

import theme from '../../../utils/theme';
import { mediaMin } from '../../../utils/media';

const P = styled.p`
    margin: 0 auto ${theme('spacing.3')};
    ${props =>
        props.lead &&
        'font-size: 1.15rem; line-height: 1.44; letter-spacing: 0.01em;'};

    ${mediaMin.smallDesktop`
        ${props =>
            props.lead &&
            'font-size: 1.5rem; line-height: 1.44; letter-spacing: 0.01em;'};
    `}

    mark {
        color: inherit;
        background-color: ${props => props.theme.colors[props.theme.color][3]};
        padding: 0 0.25rem;
    }
`;

const Small = styled.small`
    font-size: small;
    ${props => props.muted && `color:  ${props.theme.textColorMuted}`};
`;
const Strong = styled.strong`
    ${props => props.muted && `color:  ${props.theme.textColorMuted}`};
    ${props =>
        props.highlight &&
        `color:  ${props.theme.colors[props.theme.color][5]}`};
`;
const Copy = styled.div`
    max-width: 720px;
    line-height: 1.5;
    margin: 0 auto;
`;

const Blockquote = styled.blockquote`
    margin: 3.5rem 0;
    font-family: inherit;
    font-weight: 700;
    font-style: normal;
    font-size: 2rem;
    margin-left: -1.88px;
    line-height: 1.25;
    letter-spacing: -0.012em;
    padding-left: 3.25rem;
    text-indent: -0.42em;

    > * {
        margin: 0;
    }

    > footer {
        text-indent: 0;
        font-weight: 400;
        font-size: 1rem;
        color: ${theme('colors.gray.6')};
        margin-top: ${theme('spacing.2')};
    }

    cite {
        font-style: normal;
    }
`;

export default Copy;
export { Copy, P, Small, Blockquote, Strong };
