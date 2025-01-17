---
title: ary
definition: ary(fn, [arity = fn.length])
description: Creates a function that accepts up to a certain number of arguments, ignoring any additional arguments passed beyond that point.
---


#### Arguments


```bash
{Function} fn - The function to wrap.
{number} [arity = fn.length] - The maximum number of arguments to accept.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const add = (a, b, c) => a + b + c;
const addTwo = ary(add, 2);

addTwo(1, 2, 3); // => 3
addTwo(1, 2); // => 3
```