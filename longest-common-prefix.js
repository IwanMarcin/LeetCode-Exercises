/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

 Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""

Explanation: There is no common prefix among the input strings.
*/

var longestCommonPrefix = function (strs) {
  let ans = "";
  let firstWord = strs[0];
  for (let letter = 0; letter < firstWord.length; letter++) {
    for (let word = 1; word < strs.length; word++) {
      if (firstWord[letter] === strs[word][letter]) {
      } else {
        return ans;
      }
    }
    ans = ans + firstWord[letter];
  }
  return strs[0];
};
