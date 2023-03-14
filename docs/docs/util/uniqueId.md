---
title: uniqueId
definition: 
description: Generates a unique ID.
---


#### Arguments


```bash
{number} counter - A counter used to generate the ID.
{string} [str=''] - A string to prepend to the generated ID.
```


#### Returns


```bash
{string} - A unique ID string.
```


#### Example


```ts
const id1 = uniqueId(); // '1'
```