import React from 'react';
import styled from 'styled-components';
import { P } from '../typography/copy';
import theme from '../../utils/theme';

const Container = styled.blockquote`
    padding: 2rem;
    background: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    width: 100%;
    border-radius: ${theme('borderRadius')};

    &:before {
        content: '“';
        font-family: 'Lucida Grande', Tahoma, Verdana, sans-serif;
        font-size: 5rem;
        line-height: 1;
        color: ${theme('colors.red.6')};
        z-index: 0;
        line-height: 0rem;
        margin-top: 2rem;
        margin-left: -0.2rem;
        display: block;
    }
`;
const Text = styled(P)`
    margin-bottom: 1rem;
    letter-spacing: 0.01em;
`;
const Name = styled.footer`
    ${theme('headings')};
    line-height: 1;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
`;
const Company = styled.footer`
    ${theme('headings')};
    line-height: 1;
    font-size: 0.85rem;
`;

const Quote = ({ name, text, company }) => (
    <Container>
        <Text>{text}</Text>
        <Name>{name}</Name>
        {<Company>{company}</Company>}
    </Container>
);

export default Quote;
