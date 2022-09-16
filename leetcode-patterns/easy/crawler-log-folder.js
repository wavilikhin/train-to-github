const minOperations = function (logs) {
    const stack = [];

    for (const operation of logs) {
        if (operation === '../') {
            stack.pop();
        } else if (operation === './') {
            continue;
        } else {
            stack.push(operation);
        }
    }

    return stack.length;
};

minOperations(['d1/', 'd2/', '../', 'd21/', './']); /*? $=== 2 */
minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/']); /*? $=== 3 */
minOperations(['d1/', '../', '../', '../']); /*? $=== 0 */
