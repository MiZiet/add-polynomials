module.exports = function addPolynomials(firstPolynomial, secondPolynomial) {
    var myMap = new Map(firstPolynomial);
    secondPolynomial.reduce(function (previousValue, _a) {
        var exponent = _a[0], coefficients = _a[1];
        var currentValueOfMap = myMap.get(exponent);
        if (currentValueOfMap === undefined) {
            myMap.set(exponent, coefficients);
        }
        else {
            myMap.set(exponent, coefficients + currentValueOfMap);
        }
    }, 0);
    var result = Array.from(myMap);
    result.sort(function (a, b) {
        return a[0] - b[0];
    });
    return result;
};
