module.exports = function addPolynomials(
  firstPolynomialToBeAdded: number[][],
  secondPolynomialToBeAdded: number[][]
): number[][] {
  const polynomial = new Map(firstPolynomialToBeAdded);

  secondPolynomialToBeAdded.reduce(
    (previousValue: any, [exponent, coefficient]: number[]) => {
      const currentTermsCoefficient: number = polynomial.get(exponent);

      if (currentTermsCoefficient === undefined) {
        polynomial.set(exponent, coefficient);
      } else {
        polynomial.set(exponent, coefficient + currentTermsCoefficient);
      }
    },
    0
  );

  const outputPolynomial: number[][] = Array.from(polynomial);

  outputPolynomial.sort((term: number[], nextTerm: number[]) => {
    return term[0] - nextTerm[0];
  });

  return outputPolynomial;
};
