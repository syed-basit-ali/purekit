---
title: after
definition: 
description: Creates a function that invokes `fn` once it's called `times` times or more.
---


#### Arguments


```bash
{number} times - The number of times `fn` must be called before it is executed.
{Function} fn - The function to be executed.
```


#### Returns


```bash
{any} - Returns the new debounced function.
```


#### Example


```ts
function greet(name) {
```