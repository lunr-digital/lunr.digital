import React, { useState } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

const Control = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;

    &::-moz-focus-inner {
        border: 0;
        padding: 0;
    }
`;

const Slides = styled.div``;

const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;

    ${Control} {
        flex: 1;
    }

    ${Slides} {
        flex: 0;
    }

    & > div {
        will-change: transform, opacity;
        position: absolute;
        width: 100%;
        height: 100%;
    }
`;

const Slider = ({ children, startOn = 0 }) => {
    const slides = React.Children.toArray(children);
    const [currentSlide, setSlide] = useState(startOn);
    const transitions = useTransition(currentSlide, null, {
        from: { transform: 'translate3d(100%, 0 ,0)' },
        enter: { transform: 'translate3d(0%, 0, 0)' },
        leave: { transform: 'translate3d(-50%, 0, 0)' }
    });
    const next = () => setSlide(Math.min(currentSlide + 1, slides.length));
    const prev = () => setSlide(Math.max(currentSlide - 1, 0));

    return (
        <Container>
            <Control onClick={prev}>Prev</Control>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    {item}
                </animated.div>
            ))}
            <Control onClick={next}>Next</Control>
        </Container>
    );
};

export default Slider;
