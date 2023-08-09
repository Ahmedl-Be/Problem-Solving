/* 
Given two strings s and t, return true if t is an anagram of s, and 
false otherwise. 
>> An Anagram is a word or phrase formed by rearranging the 
letters of a different word or phrase, typically using all the original
letters exactly once.
*/
/* 
                    < FREQUENCY COUNTERS >
This pattern uses objects or Sets to collect values/frequencies of values.
This can often avoid the need for nested loops or O(N^2) operations with 
array/strings
*/

const anagrams = (w1,w2) => { /*S o(N)  > T O(N LOG N) */
    const arr1 = Array.from(w1).sort();
    const arr2 = Array.from(w2).sort();
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0 ; i< arr1.length ; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }
    return true
}
console.log(anagrams("car","acr"))

/*----------------------------------------------------------------------- */ 

const Anagram = (w1,w2) => { /* S O(N) T O(N)*/
    if(w1.length !== w2.length){
        return false
    }

    let freqCount1 = {}
    let freqCount2 = {}

    for(let val of w1){
        if(!freqCount1.hasOwnProperty(val)){
            freqCount1[val] = 0
        }else{
            freqCount1[val] += 1
        }
    }

    for(let val of w2){
        if(!freqCount2.hasOwnProperty(val)){
            freqCount2 = 0
        }else{
            freqCount2 += 1
        }
    }
    for(let key in freqCount1){
        if(!(key in freqCount2) || freqCount1[key] !== freqCount2[key]){
            return false
        }
    }
    return true
}
/*-----------------------------------------------------------------*/

const anagram = (w1,w2) => { /* S O(1) T O(N)*/
    if(w1.length !== w2.length){
        return false
    }

    let freqCount = {}

    for(let i =0; i< w1.length; i++){
        let letter = w1[i]
        freqCount[letter] ? freqCount[letter] += 1 : freqCount[letter] = 1
    }

    for(let i =0; i < w2.length ; i++){
        let letter = w2[i]
        if(!freqCount[letter]){
            return false
        }else{
            freqCount[letter] -= 1
        }
    }
    return true
}

 /******************************************************************** */

const same = (arr1,arr2) => { // O(N**2)
    if(arr1.length !== arr2.length){
        return false
    }
    for (let i = 0 ; i < arr1.length ; i++){
        let correctIndex = arr2.indexOf(arr1[i]**2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctIndex,1)
    }
    return true 
}
 /****************************************************************** */
const same = (arr1,arr2) => {/*O(n log n) */
    if(arr1.length !== arr2.length){
        return false
    }
    sortedArr1 = arr1.sort() /*[1,2,3] */
    sortedArr2 = arr2.sort() /*[1,4,9]*/
    for(let i=0; i<sortedArr1.length ; i++){
        if(sortedArr1[i]**2 !== sortedArr2[i]){
            return false
        }
    }
    return true
}
/************************************************************************ */

/* Refactor */
function same(arr1,arr2){ /*O(N) the best one */
    if(arr1.length !== arr2.length){
        return false
    }
    let freqCounter1 = {}
    let freqCounter2 = {}
    for(let val of arr1){
        // freqCounter1[val] = (freqCounter1[val] || 0 ) + 1
        if(!freqCounter1.hasOwnProperty(val)){
            freqCounter1[val] = 0
        }else{
            freqCounter1[val] += 1
        }
    }
    for(let val of arr2){
        // freqCounter2[val] = (freqCounter2[val] || 0 ) + 1
        if(!freqCounter2.hasOwnProperty(val)){
            freqCounter2[val] = 0
        }else{
            freqCounter2[val] += 1
        }
    }
    for(let key in freqCounter1){
        if(!(key**2 in freqCounter2)){
            return false
        }
        if(freqCounter2[key**2] !== freqCounter1[key]){
            return false
        }
    }
    return true
}