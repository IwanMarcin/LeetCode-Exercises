var getConcatenation = function (nums) {
  let nums2 = [];
  for (i = 0; i < nums.length; i++) {
    nums2.push(nums[i]);
  }
  let ans = nums.concat(nums2);
  return ans;
};
