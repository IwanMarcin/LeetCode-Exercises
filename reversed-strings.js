/*
Complete the solution so that it reverses the string passed into it.
'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
  let arr = [];
  arr = str.split("");
  arr.reverse();
  arr = arr.toString();
  for (let i = 0; i < str.length; i++) {
    arr = arr.replace(",", "");
  }

  return arr;
}
