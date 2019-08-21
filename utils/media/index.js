import { css } from 'styled-components';
import { getValueAndUnit } from 'polished';

const breakpoints = {
    mobile: '320px',
    phablet: '420px',
    tablet: '768px',
    smallDesktop: '992px',
    desktop: '1280px'
};

const mediaMin = Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${breakpoints[label]}) {
            ${css(...args)}
        }
    `;

    return acc;
}, {});

const mediaMax = Object.keys(breakpoints).reduce((acc, label) => {
    const [value, unit] = getValueAndUnit(breakpoints[label]);

    acc[label] = (...args) => css`
		@media (max-width: ${value - 1}${unit}) {
			${css(...args)}
		}
	`;

    return acc;
}, {});

export { mediaMin, mediaMax };
