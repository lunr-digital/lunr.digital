import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../../utils/media';

const Links = styled.ul`
    display: none;
    margin: 0;
    padding: 0;

    ${mediaMin.desktop`
        display: block;
    `}
`;

const NavLink = styled.li`
    display: inline-block;
    list-style: none;
    padding: 0rem 1rem;
    color: #fff;

    a:hover {
        color: inherit;
    }

    &:first-child {
        padding-left: 0;
    }

    &:last-child {
        padding-right: 0;
    }
`;

const Nav = ({ children }) => (
    <nav>
        <Links>{children}</Links>
    </nav>
);

export { NavLink };
export default Nav;
