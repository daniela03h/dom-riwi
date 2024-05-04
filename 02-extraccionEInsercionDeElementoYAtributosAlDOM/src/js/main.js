const header = document.querySelector("header");

const titulo = document.createElement("h1");

titulo.textContent = "Galeria de perritos";

// titulo.setAttribute("id", "titulo-pricipal")

titulo.id = "titulo-pricipal";

// titulo.style.color = "blue"
// titulo.style = "color: blue"

titulo.classList.add("text-primary", "bg-dark", "py-2");
titulo.classList.add("text-center");
// titulo.classList.add("bg-dark")

header.classList.add("bg-success", "pb-2");

header.classList.remove("bg-success");

header.appendChild(titulo);

let mascotas = [
  {
    nombreMascota: "pistacho",
    especie: "canimo",
    raza: "bull dog francres",
    edad: 8,
    peso: "11 kilos",
    estado: "estable",
    foto: "https://bulldogfrances.club/wp-content/uploads/2018/10/Fotos-Web-BDF-Modelo-copia.png",
    propietario: {
      nombrePropietario: "daniela londono",
      document: "1037627829",
      telefono: "3162777179",
      correo: "daniela0393h@gmail.com",
    },
  },
  {
    nombreMascota: "Luna",
    especie: "felino",
    raza: "siamés",
    edad: 5,
    peso: "5 kilos",
    estado: "estable",
    foto: "https://0d2ujxjiqkxw.cdn.shift8web.com/wp-content/uploads/gato_siames.jpg",
    propietario: {
      nombrePropietario: "Juan Pérez",
      document: "123456789",
      telefono: "3101234567",
      correo: "juanperez@gmail.com",
    },
  },
  {
    nombreMascota: "Simba",
    especie: "felino",
    raza: "criollo",
    edad: 3,
    peso: "8 kilos",
    estado: "critico",
    foto: "https://static.nationalgeographic.es/files/styles/image_3200/public/nationalgeographic_1468962.jpg?w=1600&h=900",
    propietario: {
      nombrePropietario: "María García",
      document: "987654321",
      telefono: "3209876543",
      correo: "mariagarcia@gmail.com",
    },
  },
  {
    nombreMascota: "Rocky",
    especie: "canino",
    raza: "pastor alemán",
    edad: 4,
    peso: "30 kilos",
    estado: "estable",
    foto: "https://t1.uc.ltmcdn.com/es/posts/5/6/7/como_saber_si_un_pastor_aleman_es_puro_44765_orig.jpg",
    propietario: {
      nombrePropietario: "Carlos Sánchez",
      document: "567890123",
      telefono: "3187654321",
      correo: "carlossanchez@gmail.com",
    },
  },
  {
    nombreMascota: "Nala",
    especie: "felino",
    raza: "persa",
    edad: 2,
    peso: "4 kilos",
    estado: "critico",
    foto: "https://blog-static.petlove.com.br/wp-content/uploads/2021/05/Gato-persa-cinza.jpg",
    propietario: {
      nombrePropietario: "Ana Rodríguez",
      document: "678901234",
      telefono: "3156789012",
      correo: "anarodriguez@gmail.com",
    },
  },
  {
    nombreMascota: "Max",
    especie: "canino",
    raza: "labrador",
    edad: 6,
    peso: "25 kilos",
    estado: "critico",
    foto: "https://t1.uc.ltmcdn.com/es/posts/0/4/0/cuanto_debe_comer_mi_cachorro_labrador_31040_600.jpg",
    propietario: {
      nombrePropietario: "Laura Martínez",
      document: "456789012",
      telefono: "3178901234",
      correo: "lauramartinez@gmail.com",
    },
  },
  {
    nombreMascota: "Coco",
    especie: "felino",
    raza: "angora",
    edad: 1,
    peso: "3 kilos",
    estado: "estable",
    foto: "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP3129669A-h-o.webp",
    propietario: {
      nombrePropietario: "Pedro Gómez",
      document: "890123456",
      telefono: "3145678901",
      correo: "pedrogomez@gmail.com",
    },
  },
  {
    nombreMascota: "Paco",
    especie: "canino",
    raza: "golden retriever",
    edad: 5,
    peso: "28 kilos",
    estado: "estable",
    foto: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-09golden20retriever.jpg?itok=fIOsMe6_",
    propietario: {
      nombrePropietario: "Laura Martínez",
      document: "456789012",
      telefono: "3178901234",
      correo: "lauramartinez@gmail.com",
    },
  },
];

const main = document.querySelector("main");

for (let i = 0; i < mascotas.length; i++) {
  main.innerHTML += `
    <section class="card text-capitalize" style="width: 18rem;">
                <img src= ${mascotas[i].foto} alt="perro">
                <div class="card-body ">
                    <h3 class="card-title text-start text-sm-center text-md-end">${mascotas[i].nombreMascota}</h3>
                    <!-- <p class="card-text"> Raza Bull dog frances <br>
                        Edad: 3 meses
                    </p> -->
                    <span class="fw-bold">raza</span> <span> ${mascotas[i].raza}</span><br>
                    <span class="fw-bold">Edad</span> <span> ${mascotas[i].edad}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus voluptatum, eveniet voluptates, ipsam
                        deleniti...</p>
                    <div class="d-flex justify-content-center">
                        <button class="btn btn-primary text-center" type="button">adoptame</button>
                    </div>
    
                </div>
            </section>
    `;
}
