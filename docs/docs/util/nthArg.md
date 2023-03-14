---
title: nthArg
definition: 
description: Returns a function which will return the nth argument passed to it
---


#### Arguments


```bash
{number} idx - The index of the argument to be returned
```


#### Returns


```bash
{Function} - A function which will return the nth argument passed to it
```


#### Example


```ts
const getSecondArg = nthArg(1);
```