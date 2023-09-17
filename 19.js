/*
14. Longest Common Prefix
*/

let longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""
    let prefix = ""
    strs.sort()
    for(let i=0 ; i< strs[0].length;i++){
        if(strs[0][i] === strs[strs.length-1][i]){
            prefix += strs[0][i]
        }else{
            break
        }
    }
    return prefix;
};


