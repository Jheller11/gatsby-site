---
path: '/basics/reverse_a_string'
date: '2018-10-22'
keywords: 'javascript, basics, string'
title: 'Reverse a String'
---

The question I'm asked most frequently in interviews is to either code or describe (in pseudocode) how I would reverse a string in a language I am comfortable in.

1. Built in methods:

```
const reverse = (str) => {
    return str.split("").reverse().join("")
}
```

This method splits the characters of the string into an array, reverses the array, and then joins each item of the array into a string.

2. Loop:

```
const reverse = (str) => {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
      result += str[i]
    }
    return result
}
```

Starting with the last character of str and working in reverse, add each character to a new string and return the new string.
