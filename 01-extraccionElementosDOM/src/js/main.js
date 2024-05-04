// let one = document.getElementById("btn-one")
// let two = document.getElementsByClassName("btn-two")
// let three = document.getElementsByName("btn-three")
// let four = document.getElementsByTagName("button")

// console.log(one)
// console.log(two[0])
// console.log(three[0])
// console.log(four[3])

let one2 = document.querySelector("#btn-one2")
let two2 = document.querySelectorAll(".btn-two2")
let three2 = document.querySelector("[name='btn-three2']")
let four2= document.querySelector("button")

console.log(one2)
console.log(two2)
console.log(three2)
console.log(four2[7])

let example = document.getElementById("btn-example")
let example2 = document.querySelector("#btn-example")

example.textContent = "Hola mundo"

example.addEventListener("click", function() {
    alert("hola mundo")
})