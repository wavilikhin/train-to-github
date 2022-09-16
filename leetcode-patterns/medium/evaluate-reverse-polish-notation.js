const evalRPN = function (tokens) {
    // Recursion
    // const getResult = (arr) => {
    //     arr;
    //     if (arr.length === 1) {
    //         return Math.trunc(arr[0]);
    //     }
    //     let n1;
    //     let n2;
    //     let o;
    //     let res;
    //     let ind;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (!Number(arr[i]) && Number(arr[i]) !== 0) {
    //             n1 = arr[i - 2];
    //             n2 = arr[i - 1];
    //             o = arr[i];
    //             ind = i;
    //             res = eval(`${n1} ${o} ${n2}`);
    //             if (o === '/') {
    //                 res = Math.trunc(res);
    //             }
    //             break;
    //         }
    //     }
    //     arr.splice(ind - 2, 3, res);
    //     arr; /*? $ */
    //     return getResult(arr);
    // };
    // return getResult(tokens);
    // Loop
    // while (tokens.length > 1) {
    //     for (let i = 0; i < tokens.length; i++) {
    //         if (!Number(tokens[i]) && Number(tokens[i]) !== 0) {
    //             let result = eval(
    //                 `${tokens[i - 2]} ${tokens[i]} ${tokens[i - 1]}`
    //             );
    //             if (tokens[i] === '/') {
    //                 result = Math.trunc(result);
    //             }
    //             tokens.splice(i - 2, 3, result);
    //             break;
    //         }
    //     }
    // }
    // return tokens[0];
    // Stack
    // 1. бежим по массиву
    // 2. если там число - кладем на стек
    // 2. если там оператор - попаем со стека 2 числа, выполняем операцию и кладем результат
    // 2. прододжаем пока стек > 1
    // const stack = [];
    // for (const token of tokens) {
    //     if (Number(token) || Number(token) === 0) {
    //         stack.push(token);
    //     } else {
    //         const n2 = stack.pop();
    //         const n1 = stack.pop();
    //         let result = Number(eval(`${n1} ${token} ${n2}`));
    //         if (token === '/') {
    //             result = Math.trunc(result);
    //         }
    //         stack.push(result);
    //     }
    // }
    // return stack[0];
    const stack = [];
    for (const token of tokens) {
        if (!isNaN(Number(token))) {
            stack.push(Number(token));
            continue;
        }

        const n2 = stack.pop();
        const n1 = stack.pop();
        let result = 0;

        switch (token) {
            case '+':
                result = n1 + n2;
                break;

            case '-':
                result = n1 - n2;
                break;

            case '/':
                result = Math.trunc(n1 / n2);
                break;

            case '*':
                result = n1 * n2;
                break;
        }

        stack.push(result);
    }
    return stack[0];
};

evalRPN(['2', '1', '+', '3', '*']); /*? $===9 */
evalRPN(['4', '13', '5', '/', '+']); /*? $===6 */
evalRPN(['4', '-2', '/', '2', '-3', '-', '-']); /*? $===-7 */
evalRPN([
    '10',
    '6',
    '9',
    '3',
    '+',
    '-11',
    '*',
    '/',
    '*',
    '17',
    '+',
    '5',
    '+',
]); /*? $===22 */
