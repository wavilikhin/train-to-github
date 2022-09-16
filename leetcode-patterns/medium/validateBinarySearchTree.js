/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @link https://leetcode.com/problems/validate-binary-search-tree/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const isValid = (root, left, right) => {
    // base case
    if (root === null) {
      return true
    }

    if (root.val >= right || root.val <= left) {
      return false
    }

    // rec
    return isValid(root.left, left, root.val) && isValid(root.right, root.val, right)
  }

  return isValid(root, -Infinity, Infinity)
};