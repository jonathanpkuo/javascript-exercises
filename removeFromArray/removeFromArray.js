const removeFromArray = function() {
    let array = arguments[0];
    for ( i = 1; i < arguments.length; i++) {
        for ( j = 0; j < array.length; j++) {
            if (arguments[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
}


module.exports = removeFromArray
