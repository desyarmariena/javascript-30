# JavaScript Drum Kit

```JavaScript
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);    
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
```
For every key that we pressed, we select audio and key with the same data-attribute that we give.


```JavaScript
audio.currentTime = 0;
audio.play();
```
.play() is existing function from audio tag. Setting currentTime as 0 each time we pressed the key, make the sound play no matter how fast we pressed the key.