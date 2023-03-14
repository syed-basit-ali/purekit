---
title: extendWith
definition: 
description: This method is like `assignIn` except that it accepts customizer which is
---


#### Arguments


```bash
{T} object - The destination object.
{...any} args - The source objects.
{Function} customizer - The function to customize assigned values.
```


#### Returns


```bash
{T} - Returns `object`.
```


#### Example


```ts
const object = { 'a': [{ 'b': 2 }, { 'd': 4 }] };
```