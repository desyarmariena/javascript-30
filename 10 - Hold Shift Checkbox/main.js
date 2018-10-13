const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    
    let inBetween = false;
    //cek jika shift key ditekan sekaligus check (bukan uncheck)
    if(e.shiftKey && this.checked && lastChecked !== undefined){
        checkboxes.forEach(checkbox => {
            // console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked){
                //menandakan jika checkbox yang di loop berada di antara checkbox yang di klik
                inBetween = !inBetween;
                // console.log("start to check");
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));