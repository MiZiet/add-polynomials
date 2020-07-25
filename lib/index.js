module.exports = function addPolynomials(firstPolynomial, secondPolynomial) {
    var polynomial = new Map(firstPolynomial);
    secondPolynomial.reduce(function (previousValue, _a) {
        var exponent = _a[0], coefficient = _a[1];
        var currentTermsCoefficient = polynomial.get(exponent);
        if (currentTermsCoefficient === undefined) {
            polynomial.set(exponent, coefficient);
        }
        else {
            polynomial.set(exponent, coefficient + currentTermsCoefficient);
        }
    }, 0);
    var outputPolynomial = Array.from(polynomial);
    outputPolynomial.sort(function (term, nextTerm) {
        return term[0] - nextTerm[0];
    });
    return outputPolynomial;
};
