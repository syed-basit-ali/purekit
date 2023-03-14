---
title: overArgs
definition: 
description: Creates a function that applies the provided functions to the arguments of the created function.
---


#### Arguments


```bash
{Function} fn - The function to apply the transforms to.
{Function[]} transforms - The transform functions to apply to the arguments of the function.
```


#### Returns


```bash
{Function} - Returns the new function.
```


#### Example


```ts
const double = (n) => n * 2;
```