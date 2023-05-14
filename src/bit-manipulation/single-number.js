// https://leetcode.com/problems/single-number


// XOR - O(n) time, O(n) space
function singleNumber(nums) {
    let leftOver = 0;
    for(let i = 0; i < nums.length; i++) {
        leftOver ^= nums[i];
    }

    return leftOver;
};

// Hash map approach - has O(n) space which is not ideal