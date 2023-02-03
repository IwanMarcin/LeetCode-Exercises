/* NEED TO FIX*/

var longestCommonPrefix = function (strs) {
  for (i = 0; i < strs.length; i++) {
    strs[i] = strs[i].split("");
  }
  let test = "";
  let helparr = [];
  for (let i = 0; i < strs[0].length; i++) {
    test = "";
    for (let k = 0; k < strs.length; k++) {
      test += strs[k][i];
    }
    helparr.push(test);
  }
  let ansarr = [];
  let c = "";
  let j = 0;
  for (let i = 0; i < helparr.length; i++) {
    j = helparr[i].length - 1;
    for (let k = 0; k < helparr[0].length; k++) {
      if (
        helparr[i][k] === helparr[i][j] &&
        helparr[i].length === helparr[0].length
      ) {
        c = helparr[i][k];
        j--;
      } else {
        c = "";
        ansarr.push(c);
        j--;
      }
    }
    ansarr.push(c);
  }
  let ans = "";
  for (let i = 0; i < ansarr.length; i++) {
    ans += ansarr[i];
  }
  return ans;
};
