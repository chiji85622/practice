import cloneDeepArray from '../helpers/cloneDeepArray';
import compare from '../helpers/compare';
import geearteRandomArray from '../helpers/generateRandomArray';

describe('../helpers//cloneDeepArray', () => {
	it('[2,3,4]', () => {
		const arr = [ 2, 3, 4 ];
		expect(cloneDeepArray(arr)).toEqual(arr);
	});
	it('[2,3,4,2]', () => {
		const arr = [ 2, 3, 4, 2 ];
		expect(cloneDeepArray(arr)).toEqual(arr);
	});
});

describe('../helpers/compare', () => {
	it('2大于3，fasle', () => {
		expect(compare(2, 3)).toBeFalsy();
	});
	it('2大于1，true', () => {
		expect(compare(2, 1)).toBeTruthy();
	});
});

describe('../helpers/generateRandomArray', () => {
	it('随机数组的长度为22', () => {
		expect(geearteRandomArray(22).length).toBe(22);
	});
	it('随机数组的长度为33', () => {
		expect(geearteRandomArray(33).length).toBe(33);
	});
});
