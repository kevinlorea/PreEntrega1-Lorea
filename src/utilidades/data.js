const productos = [
    {
        id: "111",
        nombre: "Guitarra",
        descripcion: "Guitarra electrica stratocaster Squier",
        stock: 3,
        precio: 750000,
        imagen: "/img/guitarra.webp",
        categoria: "ofertas"

    },
    {
        id: "222",
        nombre: "Lavarropas",
        descripcion: "Lavarropas automatico Dream",
        stock: 4,
        precio: 200000,
        imagen: "/img/lavarropas.webp",
        categoria: "productos"

    },
    {
        id: "333",
        nombre: "Cuadro",
        descripcion: "Cuadro pintado al Oleo",
        stock: 1,
        precio: 204000,
        imagen: "/img/lavarropas.webp",
        categoria: "productos"

    },
    {
        id: "444",
        nombre: "Celular",
        descripcion: "Celular Samsung A12",
        stock: 6,
        precio: 89000,
        imagen: "/img/celular.webp",
        categoria: "ofertas"

    },
    {
        id: "555",
        nombre: "Rack",
        descripcion: "Rack para Tv",
        stock: 3,
        precio: 79000,
        imagen: "/img/rack.webp",
        categoria: "ofertas"

    },
    {
        id: "666",
        nombre: "Reel",
        descripcion: "Reel rotativo para pesca",
        stock: 5,
        precio: 58000,
        imagen: "/img/reel.webp",
        categoria: "productos"

    },
    
];

const obtenerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
});

export default obtenerProductos  