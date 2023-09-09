/*
33. Search in Rotated Sorted Array
*/

var search = function(nums, target) {
    let left = 0;
    let rigth = nums.length-1;
    while (left <= rigth) {
        let mid = Math.floor((left + rigth) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] >= nums[left]) {
            if (target >= nums[left] && target <= nums[mid]) {
                rigth = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target >= nums[mid] && target <= nums[rigth]) {
                left = mid + 1;
            } else {
                rigth = mid - 1;
            }
        }
    }
    return -1;
};
search([4,5,6,7,0,1,2],0)
