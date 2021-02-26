// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined) {
        return [];
    }

    let reverse = false;
    let result = [];

    for (let row of matrix) {
        if (reverse) {
            result = result.concat(row.reverse());
        } else {
            result = result.concat(row);
        }
        reverse = !reverse;
    }
    return result;
};
