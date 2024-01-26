export let Aquali = {
    nom : "Aquali",
    type : "Eau",
    niveau : 100,
    pv : 380,
    pAtk : 55,

    icebeam() {
        if (this.pv > 0 ) {
            this.icebeam = Luxray.pv - this.pAtk
        } else {
            
        }
    }

}

export let Luxray = {
    nom : "Luxray",
    type : "Electric",
    niveau : 100,
    pv : 360,
    pAtk : 70,

    
}