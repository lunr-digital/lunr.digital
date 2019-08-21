// import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../utils/theme';

const depths = {
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    5: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)'
};

const withWaves = css``;

const withGradient = css`
    background: linear-gradient(
        25deg,
        ${props => props.theme.colors[props.gradientColor][5]} 0%,
        ${props => props.theme.colors[props.gradientColor][5]} 50%,
        ${props => props.theme.colors[props.gradientColor][3]} 100%
    );
    color: #fff;
`;

const withBg = css`
    background-color: ${props => props.theme.colors[props.bgColor][5]};
    color: #fff;
`;

const withRoundedCorners = css`
    border-radius: 0;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.depth && `box-shadow: ${depths[props.depth]}`};
    ${props => props.fill && `height: 100%`};
    border-radius: ${theme('borderRadius')};
    padding: ${theme('spacing.4')};
    margin-bottom: ${theme('spacing.3')};
    line-height: 1.44;
    background: ${props => (props.highlight ? '#eee' : '#fff')};
    ${props => props.bgColor && withBg};
    ${props => props.gradientColor && withGradient};
    ${props => props.wavesColor && withWaves};
    ${props => props.rounded && withRoundedCorners};
`;

Card.defaultProps = {
    depth: 1,
    bgColor: undefined,
    gradientColor: undefined,
    wavesColor: undefined,
    rounded: undefined
};

export default Card;
