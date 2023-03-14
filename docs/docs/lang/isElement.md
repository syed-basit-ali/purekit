---
title: isElement
definition: 
description: Determines whether the given value is a DOM element.
---


#### Arguments


```bash
{*} value - The value to check.
```


#### Returns


```bash
{boolean} - `true` if the value is a DOM element, `false` otherwise.
```


#### Example


```ts
isElement(document.createElement('div')); // returns true
```