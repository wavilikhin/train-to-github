const isValid = function (string) {
  const bracketsMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];
  const isClosing = (char) => Object.keys(bracketsMap).includes(char);

  for (let i = 0; i < string.length; i++) {
    if (!stack.length && isClosing(string[i])) {
      return false;
    }

    if (!isClosing(string[i])) {
      stack.push(string[i]);
    } else {
      if (stack[stack.length - 1] !== bracketsMap[string[i]]) {
        return false;
      } else {
        stack.pop()
      }
    }
  }

  return stack.length ? false : true;
};

isValid('()[]{}'); /*? $===true */
isValid('()}'); /*? $===false */
isValid('(}'); /*? $===false */
isValid('({})'); /*? $===true */
isValid('([)]'); /*? $===false */
isValid('[([]])'); /*? $===false */
