/* 153. Find Minimum in Rotated Sorted Array */
/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1
time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
Given the sorted rotated array nums of unique elements, return the minimum
element of this array.
You must write an algorithm that runs in O(log n) time.

Example 1:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

Example 2:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

Example 3:
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

*/


var findMin = function (arr) {
    let rigth = arr.length - 1
    let left = 0
    if (arr[left] < arr[rigth]) return arr[left]
    if (arr.length === 1) return arr[0]

    while (left <= rigth) {
        let middel = Math.floor((rigth + left) / 2)
        let midVal = arr[middel]
        let leftVal = arr[left]
        let LeftOfMid = arr[middel - 1]
        let RigthOfMid = arr[middel + 1]
        
        if (midVal > RigthOfMid) {
            return RigthOfMid
        } else if (LeftOfMid > midVal) {
            return midVal
        }

        if (midVal > leftVal) {
            left = middel + 1;
        } else {
            rigth = middel - 1
        }

    }


};
console.log(findMin([4, 5, 6, 1, 2, 3]))



/**************************************************************** */


var findMin = function(arr) {
    let rigth = arr.length-1
    let left = 0
    while(left < rigth){
    let middel = Math.floor((rigth+left)/2)
        if(arr[middel] > arr[rigth]){
            left = middel+1
        }else{
            rigth = middel
        }
    }
    return arr[left]
}

findMin([4,5,6,1,2,3])