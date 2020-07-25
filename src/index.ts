module.exports = function addPolynomials(
  firstPolynomial: number[][],
  secondPolynomial: number[][]
): number[][] {
  const myMap = new Map(firstPolynomial);

  secondPolynomial.reduce(
    (previousValue: any, [exponent, coefficient]: number[]) => {
      const currentValueOfMap: number = myMap.get(exponent);

      if (currentValueOfMap === undefined) {
        myMap.set(exponent, coefficient);
      } else {
        myMap.set(exponent, coefficient + currentValueOfMap);
      }
    },
    0
  );

  const result: number[][] = Array.from(myMap);

  result.sort((a: number[], b: number[]) => {
    return a[0] - b[0];
  });

  return result;
};
