const flatten = (arr) => {
  let result = []

  for (const item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item))
    } else {
      result.push(item)
    }
  }

  return result
}

flatten([1, 2, 3, 4, 5])
flatten([1, [2, [3], [4, [5]]]])
flatten([[[1], [2], [3], [4], [5]]])