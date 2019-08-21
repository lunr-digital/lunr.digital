import styled from 'styled-components';

const A = styled.a`
    cursor: pointer;
    color: ${props => props.theme.colors[props.theme.color][5]};
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.colors[props.theme.color][7]};
    }

    &:focus {
        text-decoration: underline;
    }
`;

export default A;
