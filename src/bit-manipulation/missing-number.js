// https://leetcode.com/problems/missing-number

// XOR solution - O(n) time, O(1) space
function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

// Sum solution - O(n) time O(1) space
function missingNumber(nums) {
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        res += (i - nums[i])
    }
    return res;
}

// Less efficient solutions:
// Hashing - O(n) time O(n) space
// Brute force - O(n^2) time O(1) space

module.exports = missingNumber;