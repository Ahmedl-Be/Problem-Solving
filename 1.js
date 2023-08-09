/* 
Given an integer array nums, return true if any value appears at least
twice in the array, and return false if every element is distinct.
*/

var containsDuplicate = (nums) => {
    const numsSet = new Set(nums); /* Time O(N) | Space O(N) */
    const isEqual = numsSet.size === nums.length;
    return !isEqual;
}
containsDuplicate([1,1,2,3,4])
