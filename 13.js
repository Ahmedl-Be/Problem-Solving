/*
Bubble Sort 
*/

function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}
BubbleSort([5, 3, 1, 2])
/* 
 [5, 3, 1, 2] 5 3
 [3, 5, 1, 2] 5 1
 [3, 1, 5, 2] 5 2
 [3, 1, 2, 5] 5 undefined
 [3, 1, 2, 5] 3 1
 [1, 3, 2, 5] 3 2
 [1, 2, 3, 5] 3 5
 [1, 2, 3, 5] 5 undefined
 [1, 2, 3, 5] 1 2
 [1, 2, 3, 5] 2 3
 [1, 2, 3, 5] 3 5
 [1, 2, 3, 5] 5 undefined
 [1, 2, 3, 5] 1 2
 [1, 2, 3, 5] 2 3
 [1, 2, 3, 5] 3 5
 [1, 2, 3, 5] 5 undefined
 [1, 2, 3, 5]
*/

/*-----------------------------------------------------------------*/

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
        console.log("ONE PASS COMPLETE")
    }
    return arr
}
bubbleSort([5, 3, 1, 2])

/* 
[5, 3, 1, 2] 5 3
[3, 5, 1, 2] 5 1
[3, 1, 5, 2] 5 2
       *  *

[3, 1, 2, <5>] 3 1
[1, 3, 2, 5] 3 2
[1, 2, <3>, <5>] 1 2
[1, <2>, <3>, <5>]
*/

/* ---------------------------OPTIMIZATION---------------------------------*/

function Bubblesort(arr) {
    for (let i = arr.length; i > 0; i--) {
        let noSwap
        for (let j = 0; j < i - 1; j++) {
            noSwap = true
            console.log(arr, arr[j], arr[j + 1])
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                noSwap = false
            }
        }
        if (noSwap) break;
        console.log("ONE PASS COMPLETE")
    }
    return arr
}
Bubblesort([8, 7, 1, 2, 3, 4, 5, 6])

/* 
[8, 7, 1, 2, 3, 4, 5, 6] 8 7
[7, 8, 1, 2, 3, 4, 5, 6] 8 1
[7, 1, 8, 2, 3, 4, 5, 6] 8 2
[7, 1, 2, 8, 3, 4, 5, 6] 8 3
[7, 1, 2, 3, 8, 4, 5, 6] 8 4
[7, 1, 2, 3, 4, 8, 5, 6] 8 5
[7, 1, 2, 3, 4, 5, 8, 6] 8 6
ONE PASS COMPLETE
[7, 1, 2, 3, 4, 5, 6, 8] 7 1
[1, 7, 2, 3, 4, 5, 6, 8] 7 2
[1, 2, 7, 3, 4, 5, 6, 8] 7 3
[1, 2, 3, 7, 4, 5, 6, 8] 7 4
[1, 2, 3, 4, 7, 5, 6, 8] 7 5
[1, 2, 3, 4, 5, 7, 6, 8] 7 6
ONE PASS COMPLETE
[1, 2, 3, 4, 5, 6, 7, 8] 1 2
[1, 2, 3, 4, 5, 6, 7, 8] 2 3
[1, 2, 3, 4, 5, 6, 7, 8] 3 4
[1, 2, 3, 4, 5, 6, 7, 8] 4 5
[1, 2, 3, 4, 5, 6, 7, 8] 5 6
 [1, 2, 3, 4, 5, 6, 7, 8]
*/