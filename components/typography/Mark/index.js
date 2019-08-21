import styled from 'styled-components';

const Mark = styled.mark`
    background: transparent;
    position: relative;
    padding: 0;
    z-index: 0;
    color: inherit;

    &:before {
        background-color: ${props => props.theme.colors[props.theme.color][3]};
        content: ' ';
        position: absolute;
        z-index: -2;
        bottom: 0;
        height: 0.5em;
        left: 0.3em;
        right: -0.3em;
    }
`;

export default Mark;
