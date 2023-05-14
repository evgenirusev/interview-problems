// https://leetcode.com/problems/missing-number

// [BEST SOLUTION] XOR approach - O(n) time O(1) space
function missingNumber(nums) {
    let missing = nums.length;
    for (let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i];
    }
    return missing;
}

// [BEST SOLUTION] Sum approach - O(n) time O(1) space
function missingNumber(nums) {
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        res += (i - nums[i])
    }
    return res;
}

// Hashing - also solvable with hashing, but it takes O(n) space.

module.exports = missingNumber;