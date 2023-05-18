// https://leetcode.com/problems/maximum-subarray/

// O(n) time
function kadanes(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Other solution - bruteforce, which is O(n^2)