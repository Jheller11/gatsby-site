---
path: '/js/syntax'
cate: 'js'
date: '2018-10-26'
keywords: 'javascript, syntax, basics, class'
title: 'Syntax'
---

Variables:

```
var x = 0

// es6
let x = 0
const y = 0
```

Functions:

```
const sum = (a, b) => {
    return a + b
}

function anotherSum(a, b) {
    return a + b
}
```

Class:

```
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    hello() {
        console.log(`Hello, I am ${this.name}.`)
    }
}

let john = new Person('John', 30)
john.hello()
```
