---
title: Flip
published: false
post_date: May 21, 2015
---
# Coin Flip with JavaScript

After a lengthy Netflix session it’s always hard to figure out what to watch next. A fun solution I came up with is to create a random boolean. Should I watch this: true or false. Plug this in your console and decide what to do

```javascript
var flip = Math.floor(Math.random() * 10) <= 5;
console.log(flip);
```
