# Hold Shift Checkbox

```JavaScript
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
```

function handleCheck akan dipanggil setiap ada checkbox yang di klik.

```JavaScript
if(e.shiftKey && this.checked && lastChecked !== undefined)
```
Kondisional diatas akan mengecek jika user sedang menekan key Shift dan melakukan pengecekan checkbox (bukan uncheck). 

Untuk lastCheck tidak undefined untuk kasus dimana user mengklik checkbox dan shift saat pertama kali klik, untuk menghindari checkbox sampai terakhir di checked.

```JavaScript
if(checkbox === this || checkbox === lastChecked){    
    inBetween = !inBetween;    
}
```
Kondisional diatas akan memberi flag untuk setiap checkbox, jika dimulai dari checkbox paling atas, variable inBetween akan bernilai *true* sampai bertemu kembali checkbox terakhir, kemudian variable inBetween akan bernilai *false* kembali.

Kemudian dilakukan pengecekan, jika benar checkbox tersebut inBetween bernilai *true* maka akan dilakukan pengecekan.