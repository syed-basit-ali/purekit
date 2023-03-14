---
title: xor
definition: 
description: Returns an array of unique values that are included only in one of the given arrays.
---


#### Arguments


```bash
{Array} array - The input array.
{...[]} restArray - The rest of the arrays to be compared.
```


#### Returns


```bash
{Array} - An array of unique values from the input arrays.
```


#### Example


```ts
xor([2, 1], [2, 3]) // returns [1, 3]
xor(['a', 'b', 'c'], ['b', 'd'], ['d', 'e']) // returns ['a', 'c', 'e']
```