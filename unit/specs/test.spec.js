// jest.mock('../../src/demo')
import cloneDeepArray from '../helpers/cloneDeepArray';
import compare from '../helpers/compare';
import generateRandomArray from '../helpers/generateRandomArray';

function test(arr, cd) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (cd(arr[j], arr[j + 1])) {
				//相邻元素两两对比
				var temp = arr[j + 1]; //元素交换
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

describe('test', () => {
  const mockCallback = jest.fn(compare);

  const res=[]

	afterAll(() => {
    console.log(res);
	});

	for (let j = 0; j < 2; j++) {
		const size = 10 + 10 * j;
		it(`第${j + 1}次,随机数组长度为：${size}`, () => {
			const target = generateRandomArray(size);
			const sorted = cloneDeepArray(target).sort((a, b) => a - b);

			const targetTest = cloneDeepArray(target);
			test(targetTest, mockCallback);
      expect(targetTest).toEqual(sorted);
      res.push({
        size,
        calls:mockCallback.mock.calls.length
      })
      mockCallback.mockClear();
		});
	}
});