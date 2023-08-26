/*
347. Top K Frequent Elements

Given an integer array nums and an integer k,
return the k most frequent elements. You may return
the answer in any order.
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
*/

var topKFrequent = function (nums, k) {
    const map = {}
    for (let num of nums) {
        if (!map[num]) map[num] = 1
        map[num]++
    }
    let arr = [...Object.keys(map)].sort((a, b) => map[b] - map[a])
    return arr.slice(0, k)

};

/*
3:1,
1:3,
2:2
.
.
0   >1:3
K   >2:2
    3:1
*/