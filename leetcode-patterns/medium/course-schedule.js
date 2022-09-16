var canFinish = function (numCourses, prerequisites) {
    // 1. Create map
    // 2. Create visited uzly arr
    // 3. Start going thoruth grapth
    // 4. If meet visited - return false
    // 5. Return true

    const map = {};
    for (const [main, dependent] of prerequisites) {
        map[main]
            ? map[main].push(String(dependent))
            : (map[main] = [String(dependent)]);
    }

    const visited = new Set();
    visited.add(Object.keys(map)[0]);

    for (const [main, dependent] of Object.entries(map)) {
        if (dependent.some((c) => c === main)) {
            return false;
        }

        for (const d of dependent) {
            if (visited.has(String(d))) {
                return false;
            }

            visited.add(dependent);
        }
    }

    return true;
};

// canFinish(2, [[1, 0]]);
// canFinish(2, [
//     [1, 0],
//     [0, 1],
// ]);
// canFinish(20, [
//     [0, 10],
//     [3, 18],
//     [5, 5],
//     [6, 11],
//     [11, 14],
//     [13, 1],
//     [15, 1],
//     [17, 4],
// ]);
canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
]);
