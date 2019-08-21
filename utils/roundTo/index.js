const roundTo = step => num => Math.abs(Math.round(+num / step) * step);

export default roundTo;
