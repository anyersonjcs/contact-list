// Lista de contactos con datos predefinidos, agregando los nuevos parámetros solicitados
let listaContactos = [
  {
    id: 1,
    nombre: "Anyerson",
    apellido: "Castellanos",
    teléf: 4121481324,
    ubicaciones: [{ ciudad: "Maracay", dirección: "Turmero" }]
  },

  {
    id: 2,
    nombre: "Maria",
    apellido: "Castel",
    teléf: 4121234567,
    ubicaciones: [{ ciudad: "San Juan", dirección: "Guarico" }]
  },

  {
    id: 3,
    nombre: "Esteban",
    apellido: "Duarte",
    teléf: 4161234567,
    ubicaciones: [{ ciudad: "San Juan", dirección: "Guarico" }]
  }
];
console.log(JSON.stringify(listaContactos, null, 2));

// Función para añadir un nuevo contacto a la lista, agregando los nuevos parámetros solicitados
function agregarContacto(id, nombre, apellido, teléf, ubicaciones) {
  const nuevoContacto = {
    id: id,
    nombre: nombre,
    apellido: apellido,
    teléf: teléf,
    ubicaciones: ubicaciones
  };

  listaContactos.push(nuevoContacto);
  console.log(JSON.stringify(listaContactos, null, 2));
}
agregarContacto(4, "Pedro", "Martinez", 4163132244, [
  { ciudad: "Guanare", dirección: "Sucre" }
]);
agregarContacto(5, "David", "Diaz", 4163344556, [
  { ciudad: "Cojedes", dirección: "Naguanagua" }
]);

// Review-1: Función para actualizar un contacto existente en la lista buscando su id
function actualizarContacto(id, nombre, apellido, teléf, ubicaciones) {
  const contactoExistente = listaContactos.find(contacto => contacto.id === id);

  // Acá creo una condición, de modo que si el contacto existe, actualice sus datos con los nuevos valores
  if (contactoExistente) {
    contactoExistente.nombre = nombre;
    contactoExistente.apellido = apellido;
    contactoExistente.teléf = teléf;
    contactoExistente.ubicaciones = ubicaciones;

    console.log("Contacto actualizado correctamente");
    console.log(JSON.stringify(listaContactos, null, 2));
  } else {
    // Pero si el contacto no existe, se mostrará un mensaje de error
    console.log("Lo siento. No se encontró ningún contacto con ese id");
  }
}

actualizarContacto(1, "Anyerson Jose", "Castellanos", 4121481324111, [
  { ciudad: "Whasington DC", dirección: "The White House" }
]);

// Función para borrar un contacto existente de la lista, borrando también los nuevos parámetros solicitados
function borrarContactoXId(id) {
  listaContactos = listaContactos.filter(contacto => contacto.id !== id);
}
borrarContactoXId(parseInt("3"));
console.log(JSON.stringify(listaContactos, null, 2));

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach(function(contacto) {
    console.log(
      contacto.nombre + " " + contacto.apellido + " - " + contacto.teléf
    );
    contacto.ubicaciones.forEach(function(ubicacion) {
      console.log(
        "Ubicación: " + ubicacion.ciudad + ", " + ubicacion.dirección
      );
    });
  });
}

imprimirContactos();
