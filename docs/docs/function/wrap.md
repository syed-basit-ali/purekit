---
title: wrap
definition: 
description: Creates a new function that calls `func` with `value` as the first argument
---


#### Arguments


```bash
{any} value - The value to pass as the first argument to `func`.
{Function} func - The function to wrap.
```


#### Returns


```bash
{Function} - A new function that wraps `func`.
```


#### Example


```ts
const greet = name => `Hello, ${name}!`;
```