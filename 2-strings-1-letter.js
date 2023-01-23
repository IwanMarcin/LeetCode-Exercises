/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string,
the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  let arrs1 = s1.split("");
  let arrs2 = s2.split("");

  let arrlongest = arrs1.concat(arrs2);
  arrlongest.sort();

  let ans = [];
  ans.push(arrlongest[0]);

  let k = 0;
  for (let i = 0; i < arrlongest.length; i++) {
    if (arrlongest[i] == ans[k]) {
      continue;
    } else {
      ans.push(arrlongest[i]);
      k++;
    }
  }
  ans = ans.toString();
  for (let t = 0; t < arrlongest.length; t++) {
    ans = ans.replace(",", "");
  }
  return ans;
}
