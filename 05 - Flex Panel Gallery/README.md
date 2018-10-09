# Flex Panel Gallery

```Javascript
function toggleOpen(){
    this.classList.toggle('open');
}
function toggleActive(e){
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```
The browser waits for click event and trigger CSS open class, and right after toggleOpen event ends, it also toggle CSS open-active class so the hidden text animates