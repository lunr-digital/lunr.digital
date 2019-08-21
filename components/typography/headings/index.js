import styled, { css } from 'styled-components';

import theme from '../../../utils/theme';
import { mediaMin } from '../../../utils/media';

const styles = css`
    ${theme('headings')};
    color: ${theme('headingColor')};
    ${props => props.uppercase && 'text-transform: uppercase'};
    letter-spacing: ${props => (props.tight ? '-.04em' : '0.1em')};
    margin: 0;
    margin-bottom: ${theme('spacing.3')};
    line-height: 1.25;

    &:last-child {
        margin-bottom: 0;
    }
`;

const H1 = styled.h1`
    ${styles};
    font-size: 2rem;

    ${mediaMin.smallDesktop`
        font-size: 2.75rem;
    `}
`;

const H2 = styled.h2`
    ${styles};
    font-size: 1.5rem;

    @media (min-width: 720px) {
        font-size: 2rem;
    }
`;

const H3 = styled.h3`
    ${styles};
    font-size: 1.25rem;

    @media (min-width: 720px) {
        font-size: 1.5rem;
    }
`;

const H4 = styled.h4`
    ${styles};
    font-size: 1.25rem;
`;

const H5 = styled.h5`
    ${styles};
    font-size: 1rem;
`;

const H6 = styled.h6`
    ${styles};
    font-size: 0.875rem;
`;

export { H1, H2, H3, H4, H5, H6 };
