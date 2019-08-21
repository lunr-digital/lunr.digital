import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../utils/theme';

const SIZES = {
    small: props => `
        font-size: .75rem; 
        padding: ${props.theme.spacing['1']} ${props.theme.spacing['2']}
    `,
    normal: props => `
        font-size: .875rem; 
        padding: ${props.theme.spacing['2']} ${props.theme.spacing['3']}
    `,
    large: props => `
        font-size: 1.25rem;
        padding: ${props.theme.spacing['3']} ${props.theme.spacing['4']}
    `
};

const COLORS = props => `
    border: ${props.theme.borderWidth} solid ${
    props.theme.colors[props.color][5]
};
    color: ${props.outline ? props.theme.colors[props.color][5] : '#fff'};
    background: ${
        props.outline ? 'transparent' : props.theme.colors[props.color][5]
    };
    
    &:focus,
    &:hover {
        background: ${props.theme.colors[props.color][6]};
        border-color: ${props.theme.colors[props.color][6]};
        color: ${
            props.color === 'white'
                ? props.theme.colors[props.theme.color][5]
                : '#fff'
        };
    }

    
    &:active {
        background: ${props.theme.colors[props.color][7]};
        border-color: ${props.theme.colors[props.color][7]};
        color: ${
            props.color === 'white'
                ? props.theme.colors[props.theme.color][5]
                : '#fff'
        };
    }
`;

const colorMap = {
    danger: 'red',
    success: 'green',
    info: 'cyan'
};

const block = css`
    display: block;
    width: 100%;
`;

const Button = styled(({ loading, children, outline, ...props }) => (
    <button {...props}>{children}</button>
)).attrs({
    color: props =>
        props.color === 'theme'
            ? props.theme.color
            : colorMap[props.color] || props.color
})`
    display: inline-block;

    ${props => SIZES[props.size](props)};
    ${props => COLORS(props)};
    ${props => props.block && block};
    font-family: ${theme('sansSerif')};
    font-weight: bold;
    outline: none;
    -webkit-appearence: none;
    cursor: pointer;
    line-height: inherit;
    border-radius: ${theme('borderRadius')};
    transition: border 0.2s linear, background 0.2s linear;
    vertical-align: middle;
    text-decoration: none;
    text-align: center;

    &:disabled {
        border: ${theme('borderWidth')} solid ${theme('colors.gray.5')};
        color: ${props =>
            props.outline ? props.theme.colors.gray[5] : '#fff'};
        background: ${props =>
            props.outline ? 'transparent' : props.theme.colors.gray[5]};
        cursor: not-allowed;
        opacity: 0.4;
    }

    > * {
        vertical-align: middle;
    }

    + button {
        margin-left: ${theme('spacing.2')};
    }
`;

Button.defaultProps = {
    size: 'normal',
    color: 'theme'
};

export default Button;
