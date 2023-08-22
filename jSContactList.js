// Lista de contactos con datos predefinidos (cada contacto contiene el nombre y apellido como una sola cadena de caracteres, adicionalmente agregué el número del contacto)

let listaContactos = [
  { nombreCompleto: "Anyerson Castellanos", Nro: 4121481324 },
  { nombreCompleto: "Maria Castel", Nro: 4121234567 },
  { nombreCompleto: "Esteban Duarte", Nro: 4161234567 }
];
console.log(listaContactos);

// Función para añadir un nuevo contacto a una lista
function agregarContacto(nombreCompleto, Nro) {
  const nuevoContacto = {
    nombreCompleto: nombreCompleto,
    Nro: Nro
  };

  listaContactos.push(nuevoContacto);

  console.log(listaContactos);
}
agregarContacto("Pedro Martinez", 4163132244);
agregarContacto("David Diaz", 4163344556);

// Función para borrar un contacto existente de la lista
function borrarContacto(nombreCompleto) {
  listaContactos = listaContactos.filter(
    contacto => contacto.nombreCompleto !== nombreCompleto
  );
}
borrarContacto("Esteban Duarte");
console.log(listaContactos);

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Lista de contactos:");
  listaContactos.forEach(function(contacto) {
    console.log(contacto.nombreCompleto + " - " + contacto.Nro);
  });
}
imprimirContactos();
