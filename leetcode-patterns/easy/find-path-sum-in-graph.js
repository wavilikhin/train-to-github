var hasPathSum = function (root, targetSum) {
  // base case
  if (root === null) {
    return false
  }

  if (root.left === null && root.right === null) {
    return root.val === targetSum
  }

  // recursion
  return hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
};

hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], 22); // true
hasPathSum([1, 2, 3], 5); // false
hasPathSum([], 0); // false
