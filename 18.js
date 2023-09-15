/*13. Roman to Integer
 */

let romanToInt = function (s) {
    let set = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let arr = []
    for (let i = 0; i < s.length; i++) {
        let fVal = set[s[i]]
        let nVal = set[s[i + 1]]
        if (fVal < nVal) {
            arr.push(-fVal)
        } else {
            arr.push(fVal)
        }
    }
    return arr.reduce((acc, current) => acc + current)
}

/****************************************************** */

let RomanToInt = function(s) {
    let set ={
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D :500,
        M :1000,
    }
    let result = 0
    for(let i=0; i < s.length; i++){
    let fVal = set[s[i]]
    let nVal = set[s[i+1]]
        if(fVal < nVal){
            result-=fVal
        }else{
            result+=fVal
        }
    }
    return result
}

RomanToInt("IVII")