const makeGood = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (
            stack.at(-1) &&
            stack.at(-1) !== s[i] &&
            stack.at(-1).toLowerCase() === s[i].toLowerCase()
        ) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};

makeGood('leEeetcode'); /*? $==='leetcode' */
makeGood('abBAcC'); /*? $==='' */
makeGood('s'); /*? $==='s' */
