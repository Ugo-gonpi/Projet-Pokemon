import * as CLASS from "./class.js"

let audio1 = document.querySelectorAll("audio")[0]

let audio2 = document.querySelectorAll("audio")[1]

let pokemon1 = document.querySelector(".choice1")

let pokemon2 = document.querySelector(".choice2")

let section1 = document.querySelector(".section1")

let section2 = document.querySelector(".section2")

let section3 = document.querySelector(".section3")

let combat = document.querySelector(".combat")

let pFront1 = document.querySelector(".front1")

let pFront2 = document.querySelector(".front2")

pokemon1.addEventListener("click", () => {
    audio1.play()
    pokemon1.classList.toggle("click")
})

pokemon2.addEventListener("click", () => {
    audio2.play()
    pokemon2.classList.toggle("click")
})

combat.addEventListener("click", () => {
    section1.style.display = "none"
    section2.style.display = "block"
    section3.style.display = "none"
})

if (CLASS.Luxray.pv > 0 && CLASS.Aquali.pv <= 0) {
    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "block"
    pFront1.style.display = "none"
} else if (CLASS.Luxray.pv <= 0 && CLASS.Aquali.pv > 0) {
    section1.style.display = "none"
    section2.style.display = "none"
    section3.style.display = "block"
    pFront2.style.display = "none"
}