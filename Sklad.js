class Sklad {

    constructor() {
        const toneryZeStorage = localStorage.getItem("tonery");
        this.tonery = toneryZeStorage ? JSON.parse(toneryZeStorage) : [];
        
        this.kodInput = document.getElementById("kod");
        this.tiskarnaInput = document.getElementById("tiskarna");
        this.pocetInput = document.getElementById("pocet");
        this.potvrditButton = document.getElementById("potvrdit");
        this.vypisElement = document.getElementById("seznam-toneru");
         
        
    }          
               
        ulozTonery() {
                localStorage.setItem("tonery", JSON.stringify(this.tonery));
        }

}
