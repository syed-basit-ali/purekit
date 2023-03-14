---
title: merge
definition: 
description: Merges multiple objects into a single object. The resulting object will have the same properties as
---


#### Arguments


```bash
{T} object - The object to merge other objects into.
{...any} sources - Additional objects to merge into the first object.
```


#### Returns


```bash
{T} - The merged object.
```


#### Example


```ts
const object1 = { a: [{ b: 2 }, { d: 4 }] };
```