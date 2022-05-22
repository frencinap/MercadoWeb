// dependencias y variables globales
const express = require('express');
const app = express();
const PORT = 3000;
const handlebars = require('express-handlebars');
const { productos } = require('./consultas')

//middlewares recursos estaticos
app.use('/bootstrap', express.static(`${__dirname}/node_modules/bootstrap/dist`));
app.use('/jquery', express.static(`${__dirname}/node_modules/jquery/dist`));
app.use('/imgs', express.static(`${__dirname}/imgs`))

// escuchar el servidor
app.listen(PORT, console.log(`Servidor disponible en http://localhost:${PORT}`))

//configuracion handlebars
app.set("view engine", "handlebars");

app.engine(
    "handlebars", handlebars.engine({
        layoutsDir: `${__dirname}/views`,
        partialsDir: `${__dirname}/views/partials`
    })
)

//configuracion informacion desde la base de datos
let carrito;

const data = () => {
  return new Promise((res, rej) => {
    productos()
      .then((productos) => {
        carrito = productos;
        //console.log(carrito);
        res(productos);
      })
      .catch((error) => {
        rej(error);
      });
  });
};
data();

// vista principal
app.get('/', (req,res)=> {
    res.render('index', {
        layout: 'index',
        carritoCompleto: carrito.map((i)=>{
            return { nombre: i.nombre, imagen: i.imagen, precio: i.precio}
        })
    })
})