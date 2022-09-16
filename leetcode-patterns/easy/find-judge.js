var findJudge = function (n, trusts) {
    if (n === 1 && !trusts.length) {
        return 1;
    }

    const map = {};

    for (const [truster, trusted] of trusts) {
        if (!map[truster]) {
            map[truster] = {
                trusts: 0,
                trusted: 0,
            };
        }

        if (!map[trusted]) {
            map[trusted] = {
                trusts: 0,
                trusted: 0,
            };
        }

        map[truster].trusts += 1;
        map[trusted].trusted += 1;
    }

    for (const [personId, { trusted, trusts }] of Object.entries(map)) {
        if (trusted === n - 1 && trusts === 0) {
            return personId;
        }
    }

    return -1;
};

findJudge(2, [[1, 2]]); // ?$===2
findJudge(3, [
    [1, 2],
    [2, 3],
]); // ?$===3
findJudge(3, [
    [1, 3],
    [2, 3],
]); // ?$===3
// findJudge(3, [
//     [1, 3],
//     [2, 3],
//     [3, 1],
// ]); // ?$===-1
// findJudge(4, [
//     [1, 3],
//     [1, 4],
//     [2, 3],
// ]);
