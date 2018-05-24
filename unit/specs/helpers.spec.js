import cloneDeepArray from "../helpers/cloneDeepArray";
import generateArraySize from "../helpers/generateArraySize";
import geearteRandomArray from "../helpers/generateRandomArray";

describe("../helpers//cloneDeepArray", () => {
  it("[2,3,4]", () => {
    const arr = [2, 3, 4];
    expect(cloneDeepArray(arr)).toEqual(arr);
  });
  it("[2,3,4,2]", () => {
    const arr = [2, 3, 4, 2];
    expect(cloneDeepArray(arr)).toEqual(arr);
  });
});

describe("../helpers/generateArraySize", () => {
  test("初始值10，递增10，次序1，结果20", () => {
    expect(generateArraySize(10, 10, 10)).toBe(110);
  });
  it("初始值10，递增20，次序2，结果50", () => {
    expect(generateArraySize(2, 10, 20)).toBe(50);
  });
});

describe.only("../helpers/generateRandomArray", () => {
  test("随机数组的长度为22", () => {
    expect(geearteRandomArray(220000).length).toBe(220000);
  });
  test("随机数组的长度为33", () => {
    expect(geearteRandomArray(33).length).toBe(33);
  });
});
