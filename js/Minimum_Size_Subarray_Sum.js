// https://leetcode.com/problems/minimum-size-subarray-sum/

const minSubArrayLen = (target, nums) => {
	let currentSum = nums[0]
	let digits = 0
	let start = 0
	for(let i = 1; i < nums.length; i++ ) {
		if(nums[i] >= target || nums[0] >= target) {
		return 1
		}

		currentSum += nums[i]

		while(currentSum >= target) {
		if(digits === 0) {
			digits = i - start + 1
		}

		digits = Math.min(digits, i - start + 1)
		currentSum -= nums[start]
		start += 1
		}
	}
	return digits
}
