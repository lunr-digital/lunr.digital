import openColor from 'open-color'; // eslint-disable-line

const { white, black, ...colors } = openColor;

export default {
    color: 'red',
    headingColor: colors.gray[8],
    textColor: colors.gray[6],
    textColorMuted: '#adb5bd',
    borderRadius: '5px',
    borderWidth: '2px',
    colors: {
        ...colors,
        white: ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff']
    },
    spacing: {
        0: '0',
        1: '.25rem',
        2: '.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '2.0rem',
        6: '2.5rem',
        7: '3.0rem',
        8: '3.5rem'
    },
    sansSerif:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: {
        font:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        weight: 400
    },
    headings: `
        font-family: futura-pt, Futura,Trebuchet MS,Arial, sans-serif;
        font-weight: 700;
    `,
    buttons: {
        font:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
};
