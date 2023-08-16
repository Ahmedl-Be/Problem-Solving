/* 
                            49. Group Anagrams
Given an array of strings strs, group the anagrams together.You can return the
answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.
*/
function groupAnagrams(strs) {
    const map = new Map();
    /* 
    {
    aet : ["ate","eat","tea"],
    ant:  ["nat","tan"],
    abt:  ["bat"]
    }
    */
    for (const str of strs) {
        const sortedStr = str.split("").sort();
        const key = sortedStr.join("");
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    const results = [];
    for (const [key, value] of map) {
        results.push(value);
    }
    return map;
};
groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
  // [["bat"],["nat","tan"],["ate","eat","tea"]]

/****************************************************************** */

