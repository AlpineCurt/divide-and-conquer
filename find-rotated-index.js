function findPivot(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((right - left) / 2);
        if (arr[mid] > arr[mid + 1]) {
            return mid + 1;
        } else if  (arr[left] <= arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

function findRotatedIndex(arr, num) {
    const pivot = findPivot(arr);
    let left;
    let right;
    
    // Find which side of the pivot num is in
    if (num >= arr[0] && num <= arr[pivot - 1]) {
        left = 0;
        right = pivot - 1;
    } else if (num >= arr[pivot] && num <= arr[arr.length - 1]) {
        left = pivot;
        right = arr.length - 1;
    } else {
        return -1;
    }
    
    // Binary search for num
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midVal = arr[mid];

        if (midVal < num) {
            left = mid + 1;
        } else if (midVal > num) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
}

let test = [6, 7, 8, 9, 1, 2, 3, 4];
findPivot(test);

module.exports = findRotatedIndex;