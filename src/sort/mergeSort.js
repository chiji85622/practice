/**
 * 归并排序(Merge Sort)
 * 该算法是采用分治法（Divide and Conquer）的一个非
 * 常典型的应用。
 * 将已有序的子序列合并，得到完全有序的序列；即先使每个
 * 子序列有序，再使子序列段间有序。若将两个有序表合并成
 * 一个有序表，称为2-路归并。
 *
 * 算法描述
 *  1.把长度为n的输入序列分成两个长度为n/2的子序列；
 *  2.对这两个子序列分别采用归并排序；
 *  3.将两个排序好的子序列合并成一个最终的排序序列。
 */

/**
 * 归并排序
 * @param {Array} arr
 * @param {Function} commpare
 * @param {Function} exchange
 * @return {Array}
 */
const sort = function(arr, compare, exchange) {
	divide(arr, 0, arr.length - 1);
	
	return arr;

  function divide(arr, low, high) {
    if (low < high) {
      let middle = Math.floor((low + high) / 2);
      divide(arr, low, middle);
      divide(arr, middle + 1, high);
      merge(arr, low, middle, high);
    }
  }

  function merge(arr, low, middle, high) {
    const tem = arr.slice(low, high + 1);
    let l = low,
      r = middle + 1,
      offset = low;

    for (let i = low; i <= high; i++) {
      compare();
      exchange();
      if (l > middle) {
        arr[i] = tem[r - offset];
        r++;
      } else if (r > high) {
        arr[i] = tem[l - offset];
        l++;
      } else if (tem[l - offset] < tem[r - offset]) {
        arr[i] = tem[l - offset];
        l++;
      } else {
        arr[i] = tem[r - offset];
        r++;
      }
    }
  }

	//自下而上的归并
  function divideBook(arr, low, high) {
    let len = arr.length;
    for (let i = 1; i < len; i = i + i) {
      for (let j = 0; j < len - i; j += i + i) {
        merge(arr, j, j + i - 1, Math.min(j + i + i - 1, len - 1));
      }
    }
  }
};

export default sort;

/**
 * 正常使用这个就可以
 * 将序列根据间隔分割成若干子序列，分别进行插入排序，将间隔不断缩小，知道1时为一个一般的插入排序
 * 将序列慢慢的转化为时间复杂度接近o(n)的插入排序
 */
