// "use strict"; // Correr JS en modo estricto
// Objetos
const producto = {
    nombreProducto : "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto); // .freeze(no permite eliminar ni modificar propiedades) .seal(permite modificar)

producto.precio = 'NUEVO PRECIO'; 

delete producto.precio;

console.log(producto);