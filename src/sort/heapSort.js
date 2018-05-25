/**
 * 堆排序(Heap Sort)
 * 是指利用堆这种数据结构所设计的一种排序算法。堆积是一
 * 个近似完全二叉树的结构，并同时满足堆积的性质：即子结
 * 点的键值或索引总是小于（或者大于）它的父节点。
 * 
 * 算法描述
 *  1.将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，
 *    此堆为初始的无序区；
 *  2.将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新
 *    的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足
 *    R[1,2…n-1]<=R[n]；
 *  3.由于交换后新的堆顶R[1]可能违反堆的性质，因此需要
 *    对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将
 *    R[1]与无序区最后一个元素交换，得到新的无序区
 *    (R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此
 *    过程直到有序区的元素个数为n-1，则整个排序过程完成。
 */

/**
 * 堆排序
 * @param {Array} arr
 * @param {Function} commpare
 * @param {Function} exchange
 * @return {Array}
 */
const sort = function(arr, compare, exchange) {

  heapSort(arr)

  function heapify(arr, i,len) {
    // 堆调整
    compare()
    var left = 2 * i + 1,
      right = 2 * i + 2,
      largest = i;

    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != i) {
      swap(arr, i, largest);
      heapify(arr, largest,len);
    }
  }

  function swap(arr, i, j) {
    exchange();
    [arr[i],arr[j]]=[arr[j],arr[i]]
  }

  function heapSort(arr) {
    let len =arr.length;

    //建立堆
    for (var i = Math.floor(len / 2); i >= 0; i--) {
      heapify(arr, i,len);
    }
   
    for (var i = arr.length - 1; i > 0; i--) {
      // 将堆顶保存至序列尾部
      swap(arr, 0, i);
      //总序列长度减1
      len--;
      // 从堆顶下沉
      heapify(arr, 0,len);
    }
  }
  return arr;
};

export default sort;


// console.log(a.length,aa)

/**
 * 将序列根据间隔分割成若干子序列，分别进行插入排序，将间隔不断缩小，知道1时为一个一般的插入排序
 * 将序列慢慢的转化为时间复杂度接近o(n)的插入排序
 */
