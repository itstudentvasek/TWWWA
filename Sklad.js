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
                                        
                                } else
                                        alert("Musíte vyplnit všechny tři údaje!");
                                };
    }
               
        ulozTonery() {
                localStorage.setItem("tonery", JSON.stringify(this.tonery));
        }

}
