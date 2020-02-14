class Sklad {

    constructor() {
        const toneryZeStorage = localStorage.getItem("tonery");
        this.tonery = toneryZeStorage ? JSON.parse(toneryZeStorage) : [];
        
        this.kodInput = document.getElementById("kod");
        this.tiskarnaInput = document.getElementById("tiskarna");
        this.pocetInput = document.getElementById("pocet");
        this.potvrditButton = document.getElementById("potvrdit");
        this.vypisElement = document.getElementById("seznam-toneru");
         
        this.pridejToner();
    }          

    pridejToner() {
        this.potvrditButton.onclick = () => { 
                                if (this.kodInput.value !== "" && this.tiskarnaInput.value !== "" && this.pocetInput.value !== "") {
                                        const toner = new Toner(this.kodInput.value, this.tiskarnaInput.value, this.pocetInput.value);
                                        this.tonery.push(toner);
                                        this.ulozTonery();
                                        this.vypisTonery();
                                } else
                                        alert("Musíte vyplnit všechny tři údaje!");
                                };
    }

    seradTonery() {
            this.tonery.sort(function(a, b){  
                var x = a.kod.toLowerCase();
                var y = b.kod.toLowerCase();
                if (x < y) {return -1;}
                if (x > y) {return 1;}
                return 0;
           });                  
    }    
    
    vypisTonery() {  
                this.seradTonery();     
                this.vypisElement.innerHTML = "";
                for (const toner of this.tonery) {                       
                                         
                        const radek = document.createElement("span");
                                                  
                        radek.innerHTML += `<span class="kod">${toner.kod}</span> <span class="tiskarna">${toner.tiskarna}</span> <span class="pocet">${toner.pocet}</span>`;
                        
                        this.vypisElement.appendChild(radek);
                         
                        this._pridejTlacitko("Upravit kod", () => {
                               const novyKod = prompt("Zadejte aktualní kod toneru?", toner.kod);
                               if (novyKod !== "" && novyKod !== null) {
                                   toner.kod = novyKod;
                                   this.ulozTonery();
                                   this.vypisTonery();  
                               }                                 
                        });
                         
                        this._pridejTlacitko("Upravit název tiskárny", () => {
                               const novaTiskarna = prompt("Zadejte aktualní název tiskárny?", toner.tiskarna);
                               if (novaTiskarna !== "" && novaTiskarna !== null) {
                                   toner.tiskarna = novaTiskarna;
                                   this.ulozTonery();
                                   this.vypisTonery();  
                               }                                 
                        });
                        
                        this._pridejTlacitko("Upravit počet", () => {
                               const novyPocet = prompt("Zadejte aktualní počet tonerů?", toner.pocet);
                               if (novyPocet !== "" && novyPocet !== null) {
                                   toner.pocet = novyPocet;
                                   this.ulozTonery();
                                   this.vypisTonery();  
                               }                                 
                        });      
                        
                        this._pridejTlacitko("Smazat", () => {
                                if (confirm("Opravdu si přejete odstranit úkol?")) {
                                        this.tonery = this.tonery.filter(z => z !== toner); 
                                        this.ulozTonery();
                                        this.vypisTonery();
                                }
                        });
                        
                        const konecRadku = document.createElement("br");
                        this.vypisElement.appendChild(konecRadku);
                }
     }

        _pridejTlacitko(titulek, callback) {
                const button = document.createElement("button");
                button.onclick = callback;
                button.innerText = titulek;
                this.vypisElement.appendChild(button);
                
        }
               
        ulozTonery() {
                localStorage.setItem("tonery", JSON.stringify(this.tonery));
        }

}
