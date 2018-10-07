# CSS Variables

```CSS
:root {
    --base :#ffc600;
    --spacing: 10px;
    --blur: 10px;
}

img {
    padding: var(--spacing);
    background: var(--base);
    filter: blur(var(--blur));
}

.hl {
    color: var(--base);
}
```
To declare CSS variables, we just have to add -- (double dash) in front of variable names and put it in place we want to use them. 

This case, we put in root element because we want other element have an access of those.

```JavaScript
function handleUpdate(){
    const suffix = this.dataset.sizing || '';      

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);  
}
```
function handleUpdate will update the value from any input value.

Variable suffix contain data-sizing value which is 'px'. In case selected input is color changer (not having data-sizing), it returns nothing.

```JavaScript
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```
Event listener change will catch any changes by drag-release of mouse in input.
We add event listener mousemove so it will listen also to movement on mouse, not only when the mouse released the click event.