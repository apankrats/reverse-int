module.exports = function reverse (n) {
    let len = n.toString().length - 1,
        result = "";
    if (n.toString()[len] === "0") {
        for (i = len - 1 ; i >= 0; i--) {
            result = result + n.toString()[i];
        }
    } else if (n.toString()[0] === "-") {
        for (i = len; i > 0; i--) {
            result = result + n.toString()[i];
        }
    }else if (n.toString()[len] > 0) {
        for (i = len; i >= 0; i--) {
            result = result + n.toString()[i];
        }
    }
    return result
}