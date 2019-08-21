import 'core-js/fn/string/repeat'; // Polyfill

const pad = (str, len = 2) => `${'0'.repeat(len)}${str}`.slice(-len);

export default pad;
