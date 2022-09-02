const productos = [
    {
        nombre: "Paneles Triangulares",
        precio: 10000,
    },
    {
        nombre: "Paneles Hexagonales",
        precio: 13000,
    },
    {
        nombre: "Cartel Neon Led",
        precio: 6500,
    },
    {
        nombre: "Esquineros",
        precio: 18000,
    },
    {
        nombre: "Cubo Luminoso",
        precio: 8000,
    },
];

const productToHTML = (producto) => {
    let texto = `<div><h1>${producto.nombre}</h1><p>${producto.precio}</p></div>`;
    return texto;
}

let catalogoHTML = "";

for (let i = 0; i < productos.length; i++) {
catalogoHTML += productToHTML (productos[i]);
}


const catalogo = document.getElementById("catalogo");
catalogo.innerHTML = catalogoHTML;
