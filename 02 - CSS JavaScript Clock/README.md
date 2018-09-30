# CSS + JavaScript Clock

```JavaScript
const now = new Date();
const second = now.getSeconds();
const minute = now.getMinutes();
const hour = now.getHours();

const secondDegrees = (second/60) * 360 + 90;
const minuteDegrees = (minute/60) * 360 + 90;
const hourDegrees = (hour/12) * 360 + 90;
```
Basically, we get current time with Date() function, and calculate those with 360 so it matched with a circle (360 degrees).

```JavaScript
setInterval(setDate, 1000);
```
We call setDate function each second (1000 miliseconds).


## **_More to improve:_**
1. There's still hiccup when the second-hand almost at 60 seconds.
2. The length of each hand still the same.