// 20. Valid Parentheses

/*
STACK 
| |4
| |3
|}|2 condation is true pop last tow   
|{|1
|{|0  
------------------------------------
| |3
| |2
|}|1 condation is true pop last tow 
|{|0
----------------------
Stack is empty
*/

var isValid = function(s) {
    let stack = [];
    let i = 0;
    let parens = '() {} []'
    
    while(i < s.length){
        stack.push(s[i]);
        i++
        let open = stack[stack.length -2]
        let closed = stack[stack.length -1]
        let potParens = open + closed
        if(parens.includes(potParens)){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0
};  

isValid("{{}}")
