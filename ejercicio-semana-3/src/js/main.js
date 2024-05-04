const animalesAdopcion = document.querySelector(".adopcion");

mascotas.forEach((mascota) => {
  animalesAdopcion.innerHTML += `
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
`;
});
