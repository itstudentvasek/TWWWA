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
    
    vypisTonery() {                   
                this.vypisElement.innerHTML = "";
                for (const toner of this.tonery) {                       
                                         
                        const radek = document.createElement("span");
                                                  
                        radek.innerHTML += `<mark>${toner.kod}</mark> <strong>${toner.tiskarna}</strong> <em>počet: ${toner.pocet}</em>`;
                        
                        this.vypisElement.appendChild(radek);       
                        
                        const konecRadku = document.createElement("br");
                        this.vypisElement.appendChild(konecRadku);
                }
     }
               
        ulozTonery() {
                localStorage.setItem("tonery", JSON.stringify(this.tonery));
        }

}
