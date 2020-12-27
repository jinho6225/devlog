---
title: 'Demo'
description: 'The first post is the most memorable one.'
date: '2020-12-01'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.

```js
function hello() {
    return 'say hello'
}
```
    function hello() {
        return 'say hello'
    }

```jsx
import React from "react";
const CoolComponent = () => <div>I'm a cool component!!</div>;
export default CoolComponent;
```

# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

* Item 1
* Item 2
  * Item 2a
  * Item 2b

1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

> We're living the future so
> the present is our past.

```python
def foo():
    if not bar:
        return True
```
