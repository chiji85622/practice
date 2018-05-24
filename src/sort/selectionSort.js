/**
 * 选择排序(Selection-sort)
 * 是一种简单直观的排序算法。它的工作原理：首先在未排
 * 序序列中找到最小（大）元素，存放到排序序列的起始位
 * 置，然后，再从剩余未排序元素中继续寻找最小（大）元
 * 素，然后放到已排序序列的末尾。以此类推，直到所有元
 * 素均排序完毕。 
 * 
 * 算法描述
 *  1.初始状态：无序区为R[1..n]，有序区为空
 *  2.有序区的序号为指针，每次从无序区获取最小值
 *  3.将最小值交换至当前有序区位
 *  4.循环2、3，直到循环n-1次
 * 
 * 性能测试
 * 
 * 选择排序相同数量的随机数据排序的时间复杂度
    √ 第1次,随机数组长度为：1000 (583ms)
    √ 第2次,随机数组长度为：1000 (577ms)
    √ 第3次,随机数组长度为：1000 (534ms)
    ┌─────────┬──────┬─────────┬──────────┐
    │ (index) │ size │ compare │ exchange │
    ├─────────┼──────┼─────────┼──────────┤
    │    0    │ 1000 │ 499500  │   993    │
    │    1    │ 1000 │ 499500  │   992    │
    │    2    │ 1000 │ 499500  │   991    │
    └─────────┴──────┴─────────┴──────────┘

 * 选择排序不同数量的随机数据排序的时间复杂度
    √ 第1次,随机数组长度为：1000 (504ms)
    √ 第2次,随机数组长度为：2000 (2267ms)
    √ 第3次,随机数组长度为：3000 (5269ms)
    ┌─────────┬──────┬─────────┬──────────┐
    │ (index) │ size │ compare │ exchange │
    ├─────────┼──────┼─────────┼──────────┤
    │    0    │ 1000 │ 499500  │   993    │
    │    1    │ 2000 │ 1999000 │   1994   │
    │    2    │ 3000 │ 4498500 │   2989   │
    └─────────┴──────┴─────────┴──────────┘
 */

/**
 * 选择排序
 * @param {Array} arr 
 * @param {Function} commpare 
 * @param {Function} exchange 
 * @return {Array} 
 */
const selectionSort = function(arr, commpare, exchange) {
  let len = arr.length;
  let min = 0;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (commpare() && arr[min]>arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      exchange();
      [arr[i],arr[min]]= [arr[min],arr[i]]
    }
  }
  return arr;
};

export default selectionSort;
