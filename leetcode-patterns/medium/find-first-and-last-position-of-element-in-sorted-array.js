// const searchRange = (nums, target) => {
//     const getFirstOccurrence = (arr, target) => {
//         const middle = Math.round(arr.length / 2) - 1;

//         if (arr[middle] == target) {
//             if (arr.length === 1) {
//                 return middle;
//             } else {
//                 getFirstOccurrence(arr.slice(0, middle), target);
//             }
//         }
//     };

//     getFirstOccurrence(nums, target);
// };

// searchRange([5, 7, 7, 8, 8, 10], 8); // [3,4]
// searchRange([5, 7, 7, 8, 8, 10], 6); // [-1,-1]

const binarySearch = (nums, target, left = 0, right = nums.length - 1) => {
    let middle = Math.round((left + right) / 2) + 1;

    if (nums[middle] === target) {
        return middle;
    }

    if (target > nums[middle]) {
        return binarySearch(nums.splice(middle, right), target);
    } else {
        return binarySearch(nums.splice(left, middle - 1), target);
    }
};

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 9); // ?$===8
binarySearch([1, 2, 3, 4, 5, 6], 2); // ?$===0
// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1); // ?$===0
