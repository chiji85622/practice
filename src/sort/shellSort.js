/**
 * 希尔排序(Shell Sort)
 * 第一个突破O(n2)的排序算法，是简单插入排序的改进版。
 * 它与插入排序的不同之处在于，它会优先比较距离较远的
 * 元素。希尔排序又叫缩小增量排序。
 * 
 * 先将整个待排序的记录序列分割成为若干子序列分别进行
 * 直接插入排序，
 * 算法描述
 *  1.选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
 *  2.按增量序列个数k，对序列进行k 趟排序；
 *  3.每趟排序，根据对应的增量ti，将待排序列分割成若干
 *    长度为m 的子序列，分别对各子表进行直接插入排序。
 *    仅增量因子为1 时，整个序列作为一个表来处理，表长
 *    度即为整个序列的长度。
 */

/**
 * 希尔排序
 * @param {Array} arr
 * @param {Function} commpare
 * @param {Function} exchange
 * @return {Array}
 */
const sort = function(arr, compare, exchange) {
  const len = arr.length;
  let temp,
    gap = 1;

  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  while (gap >0) {
    for (let i = gap; i < len; i++) {
      for (let j = i; compare() && j >= gap && arr[j] < arr[j - gap]; j -= gap) {
        exchange();
        [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
      }
    }
    gap = Math.floor(gap / 3);
  }

  return arr;
};

export default sort;

/**
 * 将序列根据间隔分割成若干子序列，分别进行插入排序，将间隔不断缩小，知道1时为一个一般的插入排序
 * 将序列慢慢的转化为时间复杂度接近o(n)的插入排序
 */