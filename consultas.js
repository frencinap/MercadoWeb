const {Pool} = require('pg')

const pool = new Pool({
    user:"postgres",
    password:"Faep027336!",
    database:"mercadoweb",
    host:"localhost",
    port: 5432    
})

//obtener todos los productos
const productos= async()=>{
    const sql= 'SELECT * FROM productos'
    try {
        const { rows }= await pool.query(sql)
        return rows
    } catch (error) {
        return {mensaje: error.message}
    }
}

module.exports= { productos }