/* 
Write a function called sumZero which accepts a sorted array of integers.
The function should find the first pair where the sum is zero.
Return an array that includes both values that sum to Zero or undefined if a 
pair does not exist
*/

/*
                            MULTIPLE POINTER PATTERN
The idea is that we create pointer or values that correspond to an index or
position and move towards the begining , end or the middel based on a certain
condation
*/

function sumZero(arr){ // O(N**2)
    for(let i=0; i< arr.length ; i++){
        for(let j= i+1; j<arr.length;j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i],arr[j]]
            }
        }
    }
}
//        |        |
//[-4,-3,-2,-1,0,1,2,5]
/*---------------------------------------------------------------------*/
function SumZero(arr){ // O(N)
    let left = 0
    let right = arr.length - 1
    while(left < right){
        sum = arr[left] + arr[right]
        if( sum=== 0){
            return [arr[left] , arr[right]]
        }else if(sum > 0){
            right--
        }else{
            left++
        }
    }
}

 /******************************************************************** */

/* 
implement a function called countUniqueValues which accepts a sorted array,
and counts the unique values in the array.
*/

function countUniqueValues(arr){
    const newArr = new Set(arr)
    return newArr.size
}

//              +                +
//[1,2,3,4,7,12,13,4,4,7,7,12,12,13]

function CountUniqueValues(arr){
    let P1 = 0
    let P2 = 1    
    while(P2 < arr.length - 1){
        if(arr[P1] === arr[P2]){
            P2++
        }else{
            P1++
            arr[P1] = arr[P2]
        }
    }
    console.log(arr[P1] , arr[P2])
    return P1 + 1
}
console.log(CountUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
