---
title: rest
definition: 
description: Creates a function that invokes the provided function with all but the first argument of the passed arguments.
---


#### Arguments


```bash
{Function} func - The function to partially apply arguments to.
```


#### Returns


```bash
{Function} - Returns the new partially applied function.
```


#### Example


```ts
const logRest = rest(console.log);
```