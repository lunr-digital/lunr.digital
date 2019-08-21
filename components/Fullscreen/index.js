import styled from 'styled-components';
import { mediaMin } from '../../utils/media';

const Fullscreen = styled.div`
    padding: 1rem 2rem 5rem;

    ${mediaMin.tablet`
        padding: 1.5rem 3rem 5rem;
    `}

    ${mediaMin.desktop`
        padding: 1.5rem 3rem;
    `}
`;

export default Fullscreen;
