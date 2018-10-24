---
path: '/cs/binary'
cate: 'cs'
date: '2018-10-24'
keywords: 'algorithms, binary search'
title: 'Binary Search'
---

Required: Sorted list.

A binary search works by first comparing the the value you are looking for with the middle value in a sorted list. If the middle value is not correct, you determine whether the value is higher or lower, thus eliminating one half of the entire list. The process repeats until the value is found.

Complexity: O(log n) (better than linear- O(n))

JS example:

```
let values = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33]

const binarySearch = (arr, target) => {
  let low = 0
  let high = arr.length - 1
  let mid = Math.floor((high + low) / 2)
  while (arr[mid] !== target && low < high) {
    if (target < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
    mid = Math.floor((high + low) / 2)
  }
  if (arr[mid] === target) {
    return mid
  } else {
    return 'Not Found'
  }
}

binarySearch(values, 9) // 3
binarySearch(values, 8) // 'Not Found'
```

values = a sorted array
variables = low, mid, high control the range still being tested and the midpoint to test against value
