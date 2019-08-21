import roundTo from './';

it('should round to the nearest 5', () => {
	const roundTo5 = roundTo(5);

	expect(roundTo5(1)).toEqual(0);
	expect(roundTo5(2)).toEqual(0);
	expect(roundTo5(3)).toEqual(5);
	expect(roundTo5(4)).toEqual(5);
	expect(roundTo5(5)).toEqual(5);
	expect(roundTo5(6)).toEqual(5);
	expect(roundTo5(7)).toEqual(5);
	expect(roundTo5(8)).toEqual(10);
	expect(roundTo5(9)).toEqual(10);
	expect(roundTo5(10)).toEqual(10);
});
it('should round to the nearest 2', () => {
	const roundTo2 = roundTo(2);

	expect(roundTo2(0)).toEqual(0);
	expect(roundTo2(1)).toEqual(2);
	expect(roundTo2(2)).toEqual(2);
	expect(roundTo2(3)).toEqual(4);
	expect(roundTo2(4)).toEqual(4);
	expect(roundTo2(5)).toEqual(6);
	expect(roundTo2(6)).toEqual(6);
});
