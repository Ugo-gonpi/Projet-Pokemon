export let Aquali = {
    nom : "Aquali",
    type : "Eau",
    niveau : 100,
    pv : 390,
    pAtk : 60,

    icebeam() {
        if (this.pv > 0 && Luxray.pv > 0) {
            Luxray.pv = Luxray.pv - this.pAtk
            this.pAtk = 55
        } else {

        }
    },

    dig() {
        if (this.pv > 0 && Luxray.pv > 0) {
            Luxray.pv = Luxray.pv - this.pAtk
            this.pAtk = 55
        } else {

        }
    },

    hydroPump() {
        if (this.pv > 0 && Luxray.pv > 0) {
            Luxray.pv = Luxray.pv - this.pAtk + 25
            this.pAtk = 55
        } else {

        }
    },

    calmMind() {
        if (this.pv > 0 && Luxray.pv > 0) {
            this.pAtk = this.pAtk * 2
        }
    },
}

export let Luxray = {
    nom : "Luxray",
    type : "Electric",
    niveau : 100,
    pv : 360,
    pAtk : 80,

    wildCharge() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk + 25
            this.pv = this.pv - this.pAtk / 4
        } else {

        }
    },

    crunch() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk
        } else {

        }
    },

    playRough() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk
        } else {

        }
    },

    fireFang() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk / 2
        } else {

        }
    },
    
}