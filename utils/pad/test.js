import pad from './';

it('should pad to 2 digits by default', () => {
	expect(pad('1')).toEqual('01');
	expect(pad('10')).toEqual('10');
	expect(pad('11')).toEqual('11');
});

it('should pad to the specified length', () => {
	expect(pad('1', 3)).toEqual('001');
	expect(pad('10', 3)).toEqual('010');
	expect(pad('11', 3)).toEqual('011');
	expect(pad('101', 3)).toEqual('101');
});
