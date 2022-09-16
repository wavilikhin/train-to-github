const foo = (nums) => {
  var idx = 0;

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[idx] = nums[i];
      nums[i] = idx === i ? nums[i] : 0;
      idx++;
    }
  }

  return nums
}


foo([2, 0, 0, 3, 0, 1,])
// foo([0, 2, 3, 1, 4]) //[2, 3, 1, 4, 0]
// foo([1, 3, 4, 0, 1, 0, 0]) //[1, 3, 4, 1, 2, 3, 4, 10, 0, 0, 0]