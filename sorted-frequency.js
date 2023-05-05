function sortedFrequency(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let finalLeft;
    let finalRight;
   
    // binary search for lower index of num
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            finalLeft = mid;
            break;
        } else if (num > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    if (finalLeft === undefined) return -1;

    // binary search for upper index of num
    left = 0;
    right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            finalRight = mid;
            break;
        } else if (num < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (finalRight === undefined) return -1;

    return finalRight - finalLeft + 1;    
}


module.exports = sortedFrequency