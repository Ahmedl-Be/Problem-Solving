/* 128. Longest Consecutive Sequence */

var longestConsecutive = function (arr) {
    if (arr.length === 0 || arr == null) return 0
    arr.sort((a, b) => a - b)
    let count = 1;
    let max = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] === 1) {
            count++
            max = Math.max(count, max)
        } else if (arr[i] === arr[i + 1]) {
            continue
        } else {
            count = 1
        }
    }
    return max
}