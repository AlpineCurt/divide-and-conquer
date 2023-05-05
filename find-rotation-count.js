function findRotationCount(arr) {
    let low = 0
    let high = arr.length - 1

    while(true) {
        if (high < low) return 0;
        let mid = Math.floor((low + high) / 2);

        if (mid < high && arr[mid + 1] < arr[mid]) {
            return mid + 1;
        }
        if (mid > low && arr[mid] < arr[mid - 1]) {
            return mid;
        }
        if (arr[high] > arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }
}

module.exports = findRotationCount