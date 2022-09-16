var maxScore = function (cardPoints, k) {
    let left = 0;
    let right = cardPoints.length - k - 1;
    let sum = cardPoints.reduce((a, b) => a + b, 0);
    let temp = cardPoints.slice(left, right + 1).reduce((a, b) => a + b, 0);
    let result = 0;

    while (right < cardPoints.length) {
        result = Math.max(result, sum - temp);

        temp -= cardPoints[left];
        left++;

        right++;
        temp += cardPoints[right];
    }

    return result;
};

maxScore([1, 2, 3, 4, 5, 6, 1], 3); // ?$=== 12
maxScore([100, 40, 17, 9, 73, 75], 3); // ?$===248
maxScore([9, 7, 7, 9, 7, 7, 9], 7); // ?$===55
maxScore([11, 49, 100, 20, 86, 29, 72], 4); // ?$===232
maxScore([96, 90, 41, 82, 39, 74, 64, 50, 30], 8); // ?$===536
