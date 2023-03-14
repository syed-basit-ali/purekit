---
title: bind
definition: 
description: Creates a new function that, when called, has its `this` keyword set to the provided context, with a given sequence of arguments preceding any provided when the new function was called.
---


#### Arguments


```bash
{Function} fn - The function to bind `this` to the provided context.
{Object} ctx - The context to bind `this` to.
{...any} boundArgs - The sequence of arguments to be bound to the new function.
```


#### Returns


```bash
{Function} - The new function with the bound `this` keyword and arguments.
```


#### Example


```ts
const user = {
```