import styled from 'styled-components';
import { mediaMin } from '../../utils/media';
import theme from '../../utils/theme';

const Fullscreen = styled.div`
    padding: 3rem 2rem;

    ${mediaMin.tablet`
        padding: 3em 3rem 5rem;
    `}

    ${mediaMin.widescreen`
        padding: 6rem 3rem;
    `}

    &:nth-child(odd) {
        background-color: ${theme('colors.gray.0')};
    }
`;

export default Fullscreen;
