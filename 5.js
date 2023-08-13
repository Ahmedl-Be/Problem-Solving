/*                             Valid Palindrome
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include 
letters and numbers.Given a string s, return true if it is a palindrome, 
or false otherwise.
*/

var isPalindrome = function (s) {
    const regex = /[^a-zA-Z0-9]/g;
    const lowerCaseString = s.toLowerCase().replace(regex, "");
    return lowerCaseString === lowerCaseString.split("").reverse().join("");
};