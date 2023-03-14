---
title: toSafeInteger
definition: 
description: Converts a value to a safe integer. Returns a safe integer that is at least -9007199254740991 and at most 9007199254740991.
---


#### Arguments


```bash
{any} value - The value to convert.
```


#### Returns


```bash
{number} - Returns the converted safe integer.
```


#### Example


```ts
toSafeInteger(3.2) // => 3
```