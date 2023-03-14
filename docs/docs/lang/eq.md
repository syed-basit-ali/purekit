---
title: eq
definition: 
description: Checks if two values are equivalent, based on the `Object.is` method.
---


#### Arguments


```bash
{*} value - The value to compare.
{*} other - The other value to compare.
```


#### Returns


```bash
{boolean} - Returns `true` if the values are equivalent, else `false`.
```


#### Example


```ts
eq(NaN, NaN); // => true
```