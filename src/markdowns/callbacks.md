---
path: '/js/callbacks'
cate: 'js'
date: '2018-10-22'
keywords: 'javascript, callbacks'
title: 'Callbacks'
---

A callback is a function passed into another function as an argument. It is invoked inside of the function based either synchronously (immediate) or asynchronously (eg after data is fetched). Below is an synchonous example just to demonstrate the concept.

```
let currentScore = 0

const add = (a, b) => {
    return a + b
}

const incrementScore = (callback) => {
    currentScore = callback(currentScore, 2)
    return currentScore
}
```
