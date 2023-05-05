function findFloor(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (true) {
    if (left > right) return -1;
    if (num >= arr[right]) return arr[right];

    let mid = Math.floor((left + right) / 2);

    if (mid > 0 && arr[mid - 1] <= num && num < arr[mid]) {
      return arr[mid - 1];
    }

    if (num < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

module.exports = findFloor