import * as CLASS from "./class.js"

let audio1 = document.querySelectorAll("audio")[0]

let audio2 = document.querySelectorAll("audio")[1]

let pokemon1 = document.querySelector(".choice1")

let pokemon2 = document.querySelector(".choice2")

pokemon1.addEventListener("click", () => {
    audio1.play()
    pokemon1.classList.toggle("click")
})

pokemon2.addEventListener("click", () => {
    audio2.play()
    pokemon2.classList.toggle("click")
})