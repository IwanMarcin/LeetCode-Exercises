/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical 
order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
*/

function inArray(array1, array2) {
  let ans = [];
  for (let i = 0; i < array1.length; i++) {
    for (let k = 0; k < array2.length; k++) {
      if (array2[k].includes(array1[i]) && !ans.includes(array1[i])) {
        ans.push(array1[i]);
      }
    }
  }
  ans.sort();
  return ans;
}
