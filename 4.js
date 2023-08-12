/* 
Write a function called maxSubarraySum which accepts an array of integers
and a number called n .The function should calculate the maximum sum of n 
consective elements in the array
*/

/* 
                                SLIDING WINDOW
Creating a window which can either be an array or number from one position to 
another. Depending on certain condition, the window either increases or closes
(and a new window is created).
>>Very useful for keep tracking a subset of data in an array/string ..etc
*/

function maxSubarraySum(arr,n){
    if(n > arr.length){
    return null
    }
    let count = -Infinity
    let p1 = 0
    let p2 = n
    while(p2 <= arr.length){ //O(N**2)
        const sum = arr.slice(p1 , p2).reduce((a , b) => a + b);
        if(count < sum){
            count = sum
        }
        // console.log(arr.slice(p1,p2))
        p1++
        p2++
    }
    return count
}
maxSubarraySum([1,2,5,2,8,1,5],3)
/************************************************************************* */


function maxSubarraySum(arr,n){ // O(N)
    let maxSum = 0; //  19
    let tempSum = 0; //  [17] ,[12],[11],[14],[19],[14] 
    if(arr.length < n) return null
    for(let i =0 ; i < n ; i++){ //works one time
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = n ; i < arr.length ; i++){
        tempSum = tempSum - arr[i - n] + arr[i]
        maxSum = Math.max(maxSum,tempSum)
        // console.log(maxSum,tempSum)
    }
    return maxSum   
}
maxSubarraySum([2,6,9,2,1,8,5,6,3],3)
