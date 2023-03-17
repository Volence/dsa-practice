// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = function (nums) {
	let maxSum = Number.NEGATIVE_INFINITY;
	let currentSum = 0;
	nums.forEach(currentNum => {
		currentSum += currentNum;
		if (currentNum > currentSum) {
			currentSum = currentNum;
		}
		maxSum = Math.max(currentSum, maxSum);
	});
	return maxSum;
};
