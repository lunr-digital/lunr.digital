import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Nav, { NavLink } from '../components/Nav';
import Fullscreen from '../components/Fullscreen';
import { H1, H2 } from '../components/typography/headings';
import { P } from '../components/typography/copy';
import theme from '../utils/theme';
import Button from '../components/Button';
import { mediaMin } from '../utils/media';

const FullscreenRed = styled(Fullscreen)`
    background-color: ${theme('colors.red.4')};
    color: #fff;

    ${mediaMin.desktop`
        background-image: url(/static/rocket.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        height: 100vh;
    `}

    h1,
    a {
        color: #fff;
    }
`;

const TopNav = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${mediaMin.tablet`
        flex-direction: row;
        align-items: center;
    `}
`;

const LogoContainer = styled.div`
    flex: 0;
`;

const NavigationContainer = styled.div`
    text-align: right;
    flex: 1;
`;

const Pitch = styled.div`
    padding-top: 3rem;

    ${P} {
        margin-bottom: ${theme('spacing.4')};
    }

    ${mediaMin.desktop`
        padding-top: 10rem;
        padding-left: 10%;
        max-width: 55rem;
    `}
`;

const Home = () => (
    <div>
        <Head>
            <title>Lunr Digital - Expert Frontend Development</title>
        </Head>
        <FullscreenRed>
            <TopNav>
                <LogoContainer>
                    <img src="/static/logo.svg" />
                </LogoContainer>
                <NavigationContainer>
                    <Nav>
                        <NavLink>
                            <a href="#about">About</a>
                        </NavLink>
                        <NavLink>
                            <a href="#team">The Team</a>
                        </NavLink>
                        <NavLink>
                            <a href="#portfolio">Portfolio</a>
                        </NavLink>
                        <NavLink>
                            <Button outline color="white">
                                HIRE US
                            </Button>
                        </NavLink>
                    </Nav>
                </NavigationContainer>
            </TopNav>

            <Pitch>
                <H1>Building ipsum dolor sit amet </H1>
                <P lead>
                    Lorem ipsum dolor sit amet, ectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </P>
                <Button outline color="white" size="large">
                    Learn more
                </Button>
            </Pitch>
        </FullscreenRed>
        <Fullscreen className="pt-8">
            <H2 className="tac">Clients</H2>
        </Fullscreen>
    </div>
);

export default Home;
