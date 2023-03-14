---
title: bindKey
definition: 
description: Creates a function that invokes the method at `object[method]` with `args` and the `this` binding of `object`.
---


#### Arguments


```bash
{Object} object - The object to bind the `method` to.
{string} method - The name of the method to bind.
{...*} [args] - The arguments to be partially applied.
```


#### Returns


```bash
{Function} - Returns the new bound function.
```


#### Example


```ts
const john = {
```