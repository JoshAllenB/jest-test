function analyzeArray(arr) {
  const length = arr.length;
  const sum = arr.reduce((acc, val) => acc + val, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length
  };
}

module.exports = analyzeArray;
