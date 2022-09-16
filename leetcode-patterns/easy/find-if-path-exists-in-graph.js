var validPath = function (n, edges, source, destination) {
  if (n === 0) {
    return false;
  } else if (n === 1) {
    return true;
  }

  const toString = (arr) => String(arr[0]) + String(arr[1]);
  const visited = new Set();
  let queue = [];

  const directions = edges.flatMap(([from, to]) => [
    [from, to],
    [to, from],
  ]);

  const startingDirections = directions.filter(
    ([from, _]) => from === source
  );

  queue = [...startingDirections];

  while (queue.length) {
    const current = queue.pop();
    const stringVal = toString(current);

    if (visited.has(stringVal)) {
      continue;
    }

    visited.add(stringVal);

    const [currentFrom, currentTo] = current;

    if (currentFrom === destination) {
      return true;
    }

    const nextDirections = directions.filter(
      ([from, _]) => from === currentTo
    );

    queue = [...queue, ...nextDirections];
  }

  return false;

};

validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  0,
  2
);

validPath(
  6,
  [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  0,
  5
);

validPath(1, [], 0, 0);
