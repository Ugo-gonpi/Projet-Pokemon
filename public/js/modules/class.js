export let Aquali = {
    nom : "Aquali",
    type : "Eau",
    niveau : 100,
    pv : 390,
    pAtk : 60,

    icebeam() {
        if (this.pv > 0 && Luxray.pv > 0) {
            Luxray.pv = Luxray.pv - this.pAtk
            this.pAtk = 60
        } else {

        }
    },

    dig() {
        if (this.pv > 0 && Luxray.pv > 0) {
            Luxray.pv = Luxray.pv - this.pAtk
            this.pAtk = 60
        } else {

        }
    },

    hydroPump() {
        if (this.pv > 0 && Luxray.pv > 0) {
            Luxray.pv = Luxray.pv - this.pAtk + 25
            this.pAtk = 60
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
            this.pAtk = 80
        } else {

        }
    },

    crunch() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk
            this.pAtk = 80
        } else {

        }
    },

    playRough() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk
            this.pAtk = 80
        } else {

        }
    },

    fireFang() {
        if (this.pv > 0 && Aquali.pv > 0) {
            Aquali.pv = Aquali.pv - this.pAtk / 2
            this.pAtk = 80
        } else {

        }
    },
    
}