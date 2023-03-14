---
title: orderBy
definition: 
description: Creates an array of elements, sorted in ascending or descending order by one or more properties.
---


#### Arguments


```bash
{T} collection - The collection to iterate over.
{string | string[]} iteratee - The iteratee to sort by.
{string | string[]} [orders='asc'] - The sort orders for `iteratee`.
```


#### Returns


```bash
{T} - Returns the new sorted array.
```


#### Example


```ts
const users = [
```