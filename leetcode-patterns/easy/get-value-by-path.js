const getValue = function (obj, str) {
  // base case
  if (str.length === 1) {
    return obj[str];
  }

  if (!obj) {
    return undefined;
  }

  // recursion
  return getValue(obj[str[0]], str.slice(2, str.lenght))
}

getValue({ a: { b: { c: { d: 2 } } } }, 'a')
getValue({ a: { b: { c: { d: 2 } } } }, 'a.b.c')
getValue({ a: { b: { c: { d: 2 } } } }, 'a')