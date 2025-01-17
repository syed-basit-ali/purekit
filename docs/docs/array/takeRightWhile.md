---
title: takeRightWhile
definition: takeRightWhile(array, [predicate = identity])
description: Creates a new array with the elements from the end of the given array
---


#### Arguments


```bash
{Array} array - The source array to query.
{Function} [predicate = identity] - The function invoked per iteration.
```


#### Returns


```bash
{Array} - Returns the new array of elements.
```


#### Example


```ts
takeRightWhile([1, 2, 3, 4, 5], n => n > 3);    // => [4, 5]

takeRightWhile([{ name: 'John', active: false }, { name: 'Mary', active: true }], { active: true });
// => [{ name: 'Mary', active: true }]
```