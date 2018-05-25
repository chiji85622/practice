import cloneDeepArray from "./cloneDeepArray";
import generateArraySize from "./generateArraySize";
import generateRandomArray from "./generateRandomArray";

const mockCompare = jest.fn().mockReturnValue(true);
const mockExchange = jest.fn().mockReturnValue(true);
const mockNative = jest.fn((a, b) => a - b);

function createSoreTest(sort) {
  describe(`${sort.method.name},多次相同序列长度`, () => {
    const res = [];

    afterAll(() => {
      console.table(res);
    });

    for (let j = 0; j < sort.test; j++) {
      const size = generateArraySize(j, sort.initSize, 0);

      it(`第${j + 1}次,序列长度为：${size}`, () => {
        const target = generateRandomArray(size);
        const sorted = cloneDeepArray(target).sort(mockNative);

        const targetTest = sort.method(
          cloneDeepArray(target),
          mockCompare,
          mockExchange
        );

        expect(targetTest).toEqual(sorted);
        res.push({
          size,
          native: mockNative.mock.calls.length,
          compare: mockCompare.mock.calls.length,
          exchange: mockExchange.mock.calls.length
        });
        mockCompare.mockClear();
        mockExchange.mockClear();
        mockNative.mockClear();
      });
    }
  });

  describe(`${sort.method.name},不同长度的序列`, () => {
    const res = [];

    afterAll(() => {
      console.table(res);
    });

    for (let j = 0; j < sort.test; j++) {
      const size = generateArraySize(j, sort.initSize, sort.incrementing);

      it(`第${j + 1}次,序列长度为：${size}`, () => {
        const target = generateRandomArray(size);
        // console.log(target)
        const sorted = cloneDeepArray(target).sort(mockNative);

        const targetTest = sort.method(
          cloneDeepArray(target),
          mockCompare,
          mockExchange
        );

        // console.log(targetTest)
        expect(targetTest).toEqual(sorted);
        res.push({
          size,
          native: mockNative.mock.calls.length,
          compare: mockCompare.mock.calls.length,
          exchange: mockExchange.mock.calls.length
        });
        mockCompare.mockClear();
        mockExchange.mockClear();
        mockNative.mockClear();
      });
    }
  });
}

export default createSoreTest;