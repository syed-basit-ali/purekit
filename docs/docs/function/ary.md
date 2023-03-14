---
title: ary
definition: 
description: Creates a function that accepts up to a certain number of arguments,
---


#### Arguments


```bash
{Function} fn - The function to wrap.
{number} [arity=fn.length] - The maximum number of arguments to accept.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const add = (a, b, c) => a + b + c;
```