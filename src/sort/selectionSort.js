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
			if (commpare() && arr[min] > arr[j]) {
				min = j;
			}
		}
		if (min !== i) {
			exchange();
			[ arr[i], arr[min] ] = [ arr[min], arr[i] ];
		}
	}
	return arr;
};

export default selectionSort;

/**
 * 每次选择最小值，则左边为有序区，右边为无序区，选择最大值这相反；
 * 每次遍历整个无序区，找出最小值的序号，最后与有序区的最后位交换
 */
