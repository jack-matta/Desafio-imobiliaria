// arreglo con propiedades en ventas

const propiedades_venta = [
    {
        nombre: "Apartamento de lujo en zona exclusiva",
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: "Pasaje Covarrubias 355, Santiago Oriente",
        habitaciones: 4,
        baños: 4,
        costo: 5000,
        smoke: false,
        pets: false,
    },

    {
        nombre: "Apartamento luminoso con vista al mar",
        src: "https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?w=900&t=st=1711312434~exp=1711313034~hmac=bc8c5fcc6fad9c4847b80cc6493c2a5545e7ab4681a4147657f3c4d72a31fbf1",
        descripcion: "Este hermoso apartamento ofrece una vista impresionante al mar",
        ubicacion: "Avenida Oceano 435, Concón",
        habitaciones: 3,
        baños: 3,
        costo: 6500,
        smoke: true,
        pets: true,
    },

    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://img.freepik.com/free-photo/stylish-scandinavian-living-room-with-design-mint-sofa-furnitures-mock-up-poster-map-plants-eleg_1258-152155.jpg?w=1060&t=st=1711312442~exp=1711313042~hmac=97eb2080c1950130186911bc077df92525a7f97e7e79fdd03aaacf2361f82a95",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "Calle 15, Providencia",
        habitaciones: 2,
        baños: 1,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Amplio departamento en sector emergente",
        src: "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2203.jpg?w=900&t=st=1711312447~exp=1711313047~hmac=d2a3e35d25853aea689912d21960d15bf9980e4b5a1a56d4a45cb340c96897c2",
        descripcion: "Amplio espacio para familias que inician su hogar, terminaciones nuevas, tecnología de última generación incorporada",
        ubicacion: "Calle 15 y Diagonal Oriente",
        habitaciones: 3,
        baños: 2,
        costo: 4500,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Departamento en condominio residencial",
        src: "https://img.freepik.com/free-photo/analog-landscape-city-with-buildings_23-2149661456.jpg?w=900&t=st=1711312635~exp=1711313235~hmac=18517fe2e0d4306135d3244bf399ff938919f7e6601b4f536f8d375553b6c194",
        descripcion: "Amplio departamento en sector residencial, con alta seguridad, servicios y espacios verdes",
        ubicacion: "Calle 3, km 24, Stgo",
        habitaciones: 3,
        baños: 2,
        costo: 3500,
        smoke: true,
        pets: false,
    },
];

//variable que contendrá el html
let html_ventas = " ";

//ciclo para agregar dinámicamente las propiedades, cada objeto del array
for (let i = 0; i < 3; i++) {
    let propiedad = propiedades_venta[i];
    html_ventas += `
      <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">
                ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i>  ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i>  ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
  
                <!-- Condicionales con operadores lógicos terciario -->
                ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
  
                </div>
            </div>
          </div> 
      `
}

// selecciono el id, clase o etiqueta donde se insertará el html y lo guardo en una variable para luego poder sobreescribirla
let elemento_ventas = document.querySelector(".row_venta")
//al almacenar todo en la variable html se actualiza una soloa vez el dom
elemento_ventas.innerHTML = html_ventas



// arreglo con propiedades en alquiler

const propiedades_alq = [
    {
        nombre: "Apartamento en el centro de la ciudad",
        src: "https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen_181624-2943.jpg?w=900&t=st=1711313342~exp=1711313942~hmac=a92d2e98d07e371a57d2b34281d54bebfb23630aeb940c90b3c150f81312998a",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: "Calle Principal 3584",
        habitaciones: 2,
        baños: 2,
        costo: 2000,
        smoke: false,
        pets: true,
    },

    {
        nombre: "Casa para renovación en sector poniente",
        src: "https://img.freepik.com/free-photo/old-white-house-garden_1150-12900.jpg?w=900&t=st=1711313078~exp=1711313678~hmac=201be8e994c1232b8d254df063c814772e37a397efac0dd3b51482ddf283ec5d",
        descripcion: "Pequeña casa ideal para renovación en amplio sitio, no pareada.",
        ubicacion: "Calle 9876, Sector Poniente",
        habitaciones: 3,
        baños: 3,
        costo: 6500,
        smoke: true,
        pets: true,
    },

    {
        nombre: "Condominio moderno en zona residencial",
        src: "https://img.freepik.com/free-photo/beautiful-shot-modern-house-kitchen-dining-room_181624-2870.jpg?w=900&t=st=1711312594~exp=1711313194~hmac=cc01f8b9ccf089b2a18ec5c8d823ccf5382fc1a4ed1b047e53018162a8df997e",
        descripcion: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        ubicacion: "Calle 22, La reina",
        habitaciones: 2,
        baños: 2,
        costo: 2200,
        smoke: false,
        pets: false,
    },
    {
        nombre: "Casona en sector oriente, residencial",
        src: "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=900&t=st=1711312436~exp=1711313036~hmac=1c982950c6712484b86b6e872b9f7695da8e76d96f8bd75485471b9bd09b92fd",
        descripcion: "Amplia casa no pareada en sector oriente de santiago, nuevo barrio residencial",
        ubicacion: "Calle 94, Condominio Las Aguilas, Sector Oriente",
        habitaciones: 6,
        baños: 4,
        costo: 8000,
        smoke: true,
        pets: true,
    },
    {
        nombre: "Casona patronal en la sexta región",
        src: "https://img.freepik.com/free-photo/courtyard-monastery-park_1268-15399.jpg?w=900&t=st=1711313082~exp=1711313682~hmac=4ec54c717ebf4b2ba552e11daf7bcc5c62d318b2d7eae711402accd6bb614a1e",
        descripcion: "Amplia casona patronal ubicada cerca de los valles de la sexta región",
        ubicacion: "Valle Blanco, Parcela 42, Sexta Región",
        habitaciones: 6,
        baños: 4,
        costo: 8000,
        smoke: true,
        pets: true,
    }
];

//variable que contendrá el html
let html_alquiler = " ";

//ciclo para agregar dinámicamente las propiedades, cada objeto del array
for (let i = 0; i < 3; i++) {
    let propiedad = propiedades_alq[i];
    html_alquiler += `
      <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">
                ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>  ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i>  ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i>  ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
  
                <!-- Condicionales con operadores lógicos terciario -->
                ${propiedad.smoke ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>' : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'}
                ${propiedad.pets ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>' : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'}
  
                </div>
            </div>
          </div> 
      `
}

// selecciono el id, clase o etiqueta donde se insertará el html y lo guardo en una variable para luego poder sobreescribirla
let elemento_alquiler = document.querySelector(".row_alquiler")
//al almacenar todo en la variable html se actualiza una soloa vez el dom
elemento_alquiler.innerHTML = html_alquiler