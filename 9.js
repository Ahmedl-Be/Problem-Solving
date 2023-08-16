/* 
                        Divide And Conquer Pattern
given a sorted array of integers , write a function calles search, that
accepts a value and returns the index where the value passed to the function
is located. if the value is not found return -1
*/

function search(arr, val) {
    // return arr.indexOf(val)
    for (let i = 0; i < arr.length; i++) {
        console.log(i)
        if (arr[i] == val) {
            return i
        }
    }
    return -1
}

search([1, 2, 3, 4, 5, 6], 8)
/********************************************************************** */

function search(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((max + min) / 2)
        let currentElement = arr[middle]
        if (arr[middle] < val) {
            min = middle + 1
        } else if (arr[middle] > val) {
            max = middle - 1
        } else {
            return middle
        }
    }
    return -1
}

search([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)
    //                    ||    