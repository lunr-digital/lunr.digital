import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Nav, { NavLink } from '../components/Nav';
import Section from '../components/Section';
import { H1, H2 } from '../components/typography/headings';
import { P } from '../components/typography/copy';
import theme from '../utils/theme';
import Button from '../components/Button';
import { mediaMin } from '../utils/media';
import Quote from '../components/Quote';
import TeamMember from '../components/TeamMember';
import ContactForm from '../components/ContactForm';
import brand from '../utils/brand';

const BrandedSection = styled(Section)`
    padding-top: 2rem !important;
    background-color: ${brand('5')} !important;
    color: #fff;

    ${mediaMin.widescreen`
        background-image: url(/static/rocket3.svg);
        background-repeat: no-repeat;
        background-position: right 101%;
        background-size: auto 70%;
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
    ${P} {
        margin-bottom: ${theme('spacing.4')};
    }

    && {
        padding-top: 3rem;

        ${mediaMin.widescreen`
            padding-top: 10rem;
            padding-left: 10%;
            max-width: 55rem;
        `}
    }
`;

const Home = () => (
    <div>
        <Head>
            <title>Lunr Digital - Expert Frontend Development</title>
        </Head>
        <BrandedSection>
            <TopNav>
                <LogoContainer>
                    <img alt="Lunr Digital" src="/static/logo.svg" />
                </LogoContainer>
                <NavigationContainer>
                    <Nav>
                        <NavLink>
                            <a href="#services">Services</a>
                        </NavLink>
                        <NavLink>
                            <a href="#clients">Testimonials</a>
                        </NavLink>
                        <NavLink>
                            <a href="#team">The Team</a>
                        </NavLink>
                        <NavLink>
                            <Button
                                as="a"
                                href="#contact"
                                outline
                                color="white"
                            >
                                HIRE US
                            </Button>
                        </NavLink>
                    </Nav>
                </NavigationContainer>
            </TopNav>

            <div className="columns">
                <Pitch className="column is-three-quarters-widescreen">
                    <H1>Expert React Development</H1>
                    <P lead>
                        We specialise in ReactJS and React-Native. Lorem ipsum
                        aesdjn awekjdsn aedjsn.
                    </P>
                    <Button
                        as="a"
                        href="#services"
                        outline
                        color="white"
                        size="large"
                    >
                        Learn more
                    </Button>
                </Pitch>
            </div>
        </BrandedSection>
        <Section id="services">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column is-5">
                        <img
                            alt="Code editor"
                            className="responsive-img"
                            src="/static/code.svg"
                        />
                    </div>
                    <div className="column">
                        <H2>Services</H2>
                        <P lead>
                            Leverage agile frameworks to provide a robust
                            synopsis for high level overviews. Iterative
                            approaches to corporate strategy foster
                            collaborative thinking to further the overall value
                            proposition.
                        </P>
                    </div>
                </div>
            </div>
        </Section>
        <Section id="clients">
            <H2 className="tac">Testimonials</H2>

            <div className="container">
                <div className="columns is-desktop">
                    <div className="column">
                        {' '}
                        <Quote
                            name="Bob Boberson"
                            company="Laterooms"
                            text="You know the goldenerfd rule, don’t you boy? Those who have the gold make the rules."
                        />
                    </div>
                    <div className="column">
                        <Quote
                            name="Bob Boberson"
                            company="Laterooms"
                            text="You know the golden ruerfle, don’t you boy? Those who have the gold make the rules."
                        />
                    </div>
                    <div className="column">
                        <Quote
                            name="Bob Boberson"
                            company="Laterooms"
                            text="You know the golden rule, don’t yoerfdu boy? Those who have the gold make the rules."
                        />
                    </div>
                </div>
            </div>
        </Section>
        <Section id="team">
            <H2 className="tac">Meet the team</H2>

            <div className="container">
                <div className="columns is-centered">
                    <div className="column is-8">
                        <div className="columns is-variable is-6 is-centered">
                            <div className="column is-4">
                                <TeamMember
                                    name="Alex Meah"
                                    picture="/static/team/alex.jpg"
                                    social={{
                                        twitter: 'alex_meah',
                                        github: 'AlexMeah',
                                        linkedin: 'alex-meah-57165567'
                                    }}
                                />
                            </div>
                            <div className="column is-4">
                                <TeamMember
                                    name="Farzad Qasim"
                                    picture="/static/team/farz.jpg"
                                    social={{
                                        twitter: 'iamhtml',
                                        github: 'farzd',
                                        linkedin: 'farzad-qasim-131a5063'
                                    }}
                                />
                            </div>
                            <div className="column is-4">
                                <TeamMember
                                    name="Matt Beasley"
                                    picture="/static/team/matt.jpg"
                                    social={{
                                        twitter: 'fidgetfive',
                                        github: 'fidgety',
                                        linkedin: 'matthew-beasley-71931920'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
        <Section id="contact">
            <H2 className="tac">Get in touch</H2>

            <ContactForm />
        </Section>
    </div>
);

export default Home;
