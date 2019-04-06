module.exports = function (number) {
    if (number <= 0) { 
        return ['error.nonpositive'];
    } else {
        return [];
    }
}
