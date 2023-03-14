---
title: update
definition: 
description: Updates the value of a property at the specified path in the provided object using the given updater function.
---


#### Arguments


```bash
{T} object - The input object to update.
{string|any} path - The path to the property to update. Can be an array or a string.
{Function} updater - The function that will be used to update the property value.
```


#### Returns


```bash
{Object} - The updated object.
```


#### Example


```ts
const obj = { a: { b: { c: 1 } } };
```