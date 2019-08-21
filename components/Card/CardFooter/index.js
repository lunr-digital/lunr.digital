// import React from 'react';
import styled, { css } from 'styled-components';

import theme from '../../../utils/theme';

const flush = css`
    margin: 0 -${theme('spacing.4')} -${theme('spacing.4')} -${theme('spacing.4')};
`;

const CardFooter = styled.div`
    ${props => props.flush && flush};
`;

export default CardFooter;
