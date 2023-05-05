function countZeroes(arr) {
  let lower = 0;
  let upper = arr.length - 1;
  
  // edge cases of all 0's or 1's
  if (arr[upper] === 1) return 0;
  if (arr[lower] === 0) return arr.length;

  while (upper - lower !== 1) {
    let i = Math.floor((lower + upper) / 2);
    if (arr[i] === 0) {
        upper = i;
    } else if (arr[i] === 1) {
        lower = i;
    }
  }
  return (arr.length - 1) - lower;
}

module.exports = countZeroes