const removeKdigits = function (num, k) {
    let st = [];

    for (const digit of num) {
        while (st.length && st.at(-1) > digit && k > 0) {
            st.pop();
            k--;
        }

        st.push(digit);
    }

    while (k) {
        st.pop();
        k--;
    }

    while(st[0] == 0) {
      st.shift()
    }

    return st.join('') || '0'
};

// removeKdigits('1432219', 3); /*? $==1219 */
// removeKdigits('1243219', 3); /*? $==1219 */
// removeKdigits('10200', 1); /*? $==200 */
// removeKdigits('10', 2); /*? $==0 */
// removeKdigits('112', 1); /*? $==11 */
// removeKdigits('1234567890', 9); /*? $==0 */
// removeKdigits('1234567890', 10); /*? $==0 */
