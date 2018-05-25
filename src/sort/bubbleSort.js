/**
 * 冒泡排序(Bubble Sort)
 * 是一种简单的排序算法。它重复地走访过要排序的数列，
 * 一次比较两个元素，如果它们的顺序错误就把它们交换过
 * 来。走访数列的工作是重复地进行直到没有再需要交换，
 * 也就是说该数列已经排序完成。这个算法的名字由来是因
 * 为越小的元素会经由交换慢慢“浮”到数列的顶端。
 * 
 * 算法描述
 *  1.比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 *  2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 *  3.针对所有的元素重复以上的步骤，除了最后一个；
 *  4.重复步骤1~3，直到排序完成。
 * 

/**
 * 冒泡排序
 * @param {Array} arr
 * @param {Function} commpare
 * @param {Function} exchange
 * @return {Array}
 */
const bubbleSort = function(arr, commpare, exchange) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (commpare() && arr[j] > arr[j + 1]) {
        exchange();
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

export default  bubbleSort;
/**
 * 把大的往后交换，左边的是无序区，右边的是有序区
 * 每次循环将无序区中的最大值的往后推，直到无序区的最后，成为有序区的第一位
 */