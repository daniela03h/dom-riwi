const main = document.querySelector("main")

main.classList.add("d-flex", "flex-wrap", "justify-content-center")
// main.classList.add("flex-wrap")
main.classList.add("gap-5")

// console.log(main)
// console.log("")

// console.log(main.innerHTML)
// console.log("")

// for (let i = 0; i < mascotas.length; i++) {
//     main.innerHTML += `
//     <div class="card" style="width: 18rem;">
//         <img src=${mascotas[i].foto}
//             class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Nombre: ${mascotas[i].nombreMascota}</h5>
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Especie: ${mascotas[i].especie}</li>
//             <li class="list-group-item">Raza: ${mascotas[i].raza}</li>
//             <li class="list-group-item">Edad: ${mascotas[i].edad}</li>
//             <li class="list-group-item">Peso: ${mascotas[i].peso}</li>
//             <li class="list-group-item">Estado: ${mascotas[i].estado}</li>
//             <li class="list-group-item">Dueño: ${mascotas[i].propietario.nombrePropietario}</li>
//         </ul>
//     </div>
// `
// }


// for (const mascota of mascotas) {
//     main.innerHTML += `
//     <div class="card" style="width: 18rem;">
//         <img src=${mascota.foto}
//             class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">Nombre: ${mascota.nombreMascota}</h5>
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">Especie: ${mascota.especie}</li>
//             <li class="list-group-item">Raza: ${mascota.raza}</li>
//             <li class="list-group-item">Edad: ${mascota.edad}</li>
//             <li class="list-group-item">Peso: ${mascota.peso}</li>
//             <li class="list-group-item">Estado: ${mascota.estado}</li>
//             <li class="list-group-item">Dueño: ${mascota.propietario.nombrePropietario}</li>
//         </ul>
//     </div>
// `
// }


mascotas.forEach(mascota => {
    main.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src=${mascota.foto}
            class="card-img-top w-auto h-100 " alt="...">
        <div class="card-body">
            <h5 class="card-title">Nombre: ${mascota.nombreMascota}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Especie: ${mascota.especie}</li>
            <li class="list-group-item">Raza: ${mascota.raza}</li>
            <li class="list-group-item">Edad: ${mascota.edad}</li>
            <li class="list-group-item">Peso: ${mascota.peso}</li>
            <li class="list-group-item">Estado: ${mascota.estado}</li>
            <li class="list-group-item">Dueño: ${mascota.propietario.nombrePropietario}</li>
        </ul>
    </div>
`
})

let button = document.querySelector("button")

function limpiar() {
    button.addEventListener("click", function () {
        main.innerHTML=""
        console.log(main)

    })
}

limpiar()

// for clasico
// for (let i = 0; i < mascotas.length; i++) {
//     console.log(mascotas[i])
// }

// for (const mascota of mascotas) {
//     console.log(mascota)
// }

// for each 
// mascotas.forEach(mascota => {
//     console.log(mascota)
// })