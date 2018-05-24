import cloneDeepArray from '../../helpers/cloneDeepArray';
import generateArraySize from '../../helpers/generateArraySize';
import generateRandomArray from '../../helpers/generateRandomArray';

import sort from '../../../src/sort/shellSort'

const mockCompare = jest.fn().mockReturnValue(true);
const mockExchange = jest.fn().mockReturnValue(true);

describe('希尔排序相同数量的随机数据排序的时间复杂度', () => {

	const res = [];

	afterAll(() => {
		console.table(res);
	});

	for (let j = 0; j < 3; j++) {
    const size = generateArraySize(j, 1000, 0);
    
		test(`第${j + 1}次,随机数组长度为：${size}`, () => {
			const target = generateRandomArray(size);
			const sorted = cloneDeepArray(target).sort((a, b) => a - b);

			const targetTest = sort(cloneDeepArray(target),mockCompare,mockExchange);
		
      expect(targetTest).toEqual(sorted);
      
			res.push({
				size,
        compare: mockCompare.mock.calls.length,
        exchange:mockExchange.mock.calls.length
      });
      
      mockCompare.mockClear();
      mockExchange.mockClear();
		});
	}
});

describe('希尔排序不同数量的随机数据排序的时间复杂度', () => {
	const res = [];

	afterAll(() => {
		console.table(res);
	});

	for (let j = 0; j < 3; j++) {
		//6000-40s 5000-16s
    const size = generateArraySize(j, 1000, 1000);
    
		test(`第${j + 1}次,随机数组长度为：${size}`, () => {
			const target = generateRandomArray(size);
			const sorted = cloneDeepArray(target).sort((a, b) => a - b);

			const targetTest = sort(cloneDeepArray(target),mockCompare,mockExchange);
		
			expect(targetTest).toEqual(sorted);
			res.push({
				size,
				compare: mockCompare.mock.calls.length,
        exchange:mockExchange.mock.calls.length
			});
			mockCompare.mockClear();
      mockExchange.mockClear();
		});
	}
});