const reverseString = function(str) {
    let revStr = '';
    for ( i = str.length; i >= 0; i--) {
        revStr += str.charAt(i);
    }
    return revStr;
}

module.exports = reverseString
