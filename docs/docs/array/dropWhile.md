---
title: dropWhile
definition: dropWhile(array, [predicate = identity])
description: Creates a new array with elements dropped until the predicate returns false.
---


#### Arguments


```bash
{Array} array - The input array.
{Function} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Array} - Returns the slice of the array.
```


#### Example


```ts
dropWhile([1, 2, 3], n => n < 3); // Returns [3]
dropWhile(['foo', 'bar', 'baz'], str => str.startsWith('f')); // Returns ['bar', 'baz']
```