/**
 * 快速排序(Merge Sort)
 * 通过一趟排序将待排记录分隔成独立的两部分，其中一部分
 * 记录的关键字均比另一部分的关键字小，则可分别对这两部
 * 分记录继续进行排序，以达到整个序列有序。 
 * 
 * 算法描述
 *  1.从数列中挑出一个元素，称为 “基准”（pivot）；
 *  2.重新排序数列，所有元素比基准值小的摆放在基准前
 *    面，所有元素比基准值大的摆在基准的后面（相同的
 *    数可以到任一边）。在这个分区退出之后，该基准就
 *    处于数列的中间位置。这个称为分区（partition）
 *    操作；
 *  3.递归地（recursive）把小于基准值元素的子数列和
 *    大于基准值元素的子数列排序。
 */

/**
 * 快速排序
 * @param {Array} arr
 * @param {Function} commpare
 * @param {Function} exchange
 * @return {Array}
 */
let aa = 0;
const sort = function(arr, compare, exchange) {
  divide(arr, 0, arr.length - 1);
  
  return arr

  function divide(arr, low, high) {
    if (low < high) {
      let partitionIndex = partitionBook(arr, low, high);
      divide(arr, low, partitionIndex - 1);
      divide(arr, partitionIndex + 1, high);
    }
  }

  function partition(arr, low, high) {
    let pivot = low;
    let index = low + 1;

    for (let i = index; i <= high; i++) {
      compare();
      if (arr[i] < arr[pivot]) {
        exchange();[arr[i], arr[index]] = [arr[index], arr[i]];
        index++;
      }
    }

    exchange();[arr[index - 1], arr[pivot]] = [arr[pivot], arr[index - 1]];

    return index - 1;
  }

  function partitionBook(arr, low, high) {
    let i = low;
    let j = high + 1;
    let pivot = arr[low];

    while (true) {
      while (compare() && arr[++i] < pivot) if (i === high) break;
      while (compare() && arr[--j] > pivot) if (j === low) break;
      if (i >= j) break;
			exchange();
			[arr[i], arr[j]] = [arr[j], arr[i]];
    }
    exchange();
    [arr[low], arr[j]] = [arr[j], arr[low]];

    return j;
  }
};

export default sort;

/**
 * 将序列根据间隔分割成若干子序列，分别进行插入排序，将间隔不断缩小，知道1时为一个一般的插入排序
 * 将序列慢慢的转化为时间复杂度接近o(n)的插入排序
 */
