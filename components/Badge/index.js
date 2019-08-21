import styled from 'styled-components';

const Badge = styled.span`
    display: inline-block;
    padding: 0.35em 0.4em;
    font-size: 75%;
    font-weight: inherit;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border-radius: 0.25rem;
    background: ${props => props.theme.colors[props.color][5]};
    color: #fff;

    ${props =>
        props.pill &&
        `
    padding-right: .6em;
    padding-left: .6em;
    border-radius: 10rem;
    `};
`;

Badge.defaultProps = {
    color: 'gray',
    pill: false
};

export default Badge;
