// var subsets = function (nums) {
//     const result = [[]];

//     return result;
// };

// subsets([1, 2, 3]); // ?$===[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// subsets([0]); // ?$===[[],[0]]

for (let i = 0; i < 128; i++) {
    console.log(i, i.toString(2).padStart(7, '0'));
}
