const repeatString = function(string, reps) {
    let output = "";
    if (reps < 0) {
        output = "ERROR";
        return output;
    } else {
        for (i = 0; i < reps; i++) {
            output += string;
        }
    return output;
    }
}

module.exports = repeatString
