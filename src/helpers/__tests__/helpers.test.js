import * as helpers from '../helpers';

jest.mock('uuid', () => {
	return () => '123';
});

describe('sum', () => {
	it('returns null if fed no arguments', () => {
		expect(helpers.sum()).toBe(null);
	});
	it('returns null if fed a single argument', () => {
		expect(helpers.sum(1)).toBe(null);
	});
	it('adds positive number correctly', () => {
		expect(helpers.sum(1, 1)).toBe(2);
	});
	it('adds negative number correctly', () => {
		expect(helpers.sum(-1, -1)).toBe(-2);
	});
	it('throws if fed something which is not a number', () => {
		expect(() => helpers.sum('1', '2')).toThrow();
	});
	it('can add three positive numbers', () => {
		expect(helpers.sum(1, 2, 3)).toBe(6);
		expect(helpers.sum(1, 2, 3)).not.toBe(7);
	});
});

describe('multiply', () => {
	// write tests! <================================================
	it('throws error if fed no arguments', () => {
		expect(() => helpers.multiply()).toThrow();
	});
	it('throws error if fed a single argument', () => {
		expect(() => helpers.multiply(1)).toThrow();
	});
	it('throws error if fed anything other than numbers', () => {
		expect(() => helpers.multiply('8', 4)).toThrow();
		expect(() => helpers.multiply(8, '-1')).toThrow();
		expect(() => helpers.multiply('other', [])).toThrow();
	});
	it('multiplies two numbers correctly', () => {
		expect(helpers.multiply(8, 4)).toBe(32);
		expect(helpers.multiply(8, -1)).toBe(-8);
	});
});

describe('personMaker', () => {
	it('makes a person with name and age', () => {
		expect(helpers.personMaker('peter', 4))
			.toMatchObject({
				id: '123',
				name: 'peter',
				age: 4,
			});
	});

	// write more tests! <===========================================
	it('returns null if fed no arguments', () => {
		expect(helpers.personMaker()).toBe(null);
	});
	it('returns null if fed a single argument', () => {
		expect(helpers.personMaker('Peter')).toBeNull();
	});
	it('throws error if fed invalid name', () => {
		expect(() => helpers.personMaker(['Peter'], 5)).toThrow();
	});
	it('throws error if fed invalid age', () => {
		expect(() => helpers.personMaker('Peter', '5')).toThrow();
	});
});

describe('divide', () => {
	it('returns null if fed no arguments', () => {
		expect(helpers.divide()).toBe(null);
	});
	it('returns null if fed a single argument', () => {
		expect(helpers.divide(80)).toBe(null);
	});
	it('divides positive numbers correctly', () => {
		expect(helpers.divide(80, 2)).toBe(40);
	});
	it('divides negative numbers correctly', () => {
		expect(helpers.divide(-80, -2)).toBe(40);
	});
	it('throws if fed something which is not a number', () => {
		expect(() => helpers.divide('number', [])).toThrow();
	});
	it('throws if attempting to divide with zero', () => {
		expect(() => helpers.divide(80, 0)).toThrow();
		expect(() => helpers.divide(0, 80)).toThrow();
	});
	it('can divide any ammount of numbers consecutively', () => {
		expect(helpers.divide(80, 2)).toBe(40);
		expect(helpers.divide(80, 2, 2)).toBe(20);
		expect(helpers.divide(80, 2, 2, 2)).toBe(10);
		expect(helpers.divide(80, 2, 2, 2, 2)).toBe(5);
	});
});