const productos = [
    {
        id: "blabla",
        nombre: "Guitarra",
        descripcion: "Guitarra electrica stratocaster Squier",
        stock: 3,
        precio: 750000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_994669-MLA51601958220_092022-F.webp",
        categoria: "instrumentos"

    },
    {
        id: "blublu",
        nombre: "Lavarropas",
        descripcion: "Lavarropas automatico Dream",
        stock: 1,
        precio: 200000,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_719194-MLA31034907837_062019-F.webp",
        categoria: "electrodomesticos"

    },
    
];

const obtenerProductos = new Promise ((resolve, reject)=>{
    setTimeOut(()=>{
        resolve(productos);
    }, 2000);
});

export default obtenerProductos  