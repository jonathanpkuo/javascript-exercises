const sumAll = function(x, y) {
    if ( typeof(x) != 'number' ) {
        return 'ERROR';
    }
    if ( typeof(y) != 'number' ) {
        return 'ERROR';
    }
    smlNum = (x > y) ? y : x;
    bigNum = (x > y) ? x : y;
    if ( smlNum < 0 ) {
        return 'ERROR';
    }
    let sum = smlNum;
    let crtNum = smlNum;
    for ( i = 0; i < (bigNum - smlNum); i++) { 
        nxtNum = crtNum + 1;
        sum = sum + nxtNum;
        crtNum = nxtNum;
    }
    
    return sum;
}

module.exports = sumAll
