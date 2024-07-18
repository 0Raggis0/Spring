const pool = require("../Model/bd.js");
const url = require("url")

//carga el usuario por el usuario
//! Login
const GetUserByUser = async (req, res) => {

    const { email, contraseña } = req.body;

    console.log(req.body);
    const response = await pool.query('SELECT id  FROM public.usuarios WHERE email =$1 AND contraseña =$2', [email, contraseña]);
    
    console.log(response.rows);
    console.log(response.rows.length);

    if (response.rows.length === 1) {
        res.status(200).send({ sucess: true, message: 1, data:response.rows });
        console.log("acceso")
    } else {
        res.status(200).send({ sucess: false, message: 1 });
        console.log("no acceso")
    }

};

//! Register

const createUser = async (req, res) => {
    const { nombres, apellidos, fecha_nac, email, contraseña } = req.body;
    console.log(req.body);
    try {

        const rspta = await pool.query('SELECT id  FROM public.usuarios WHERE nombres =$1', [nombres]);

        if (rspta.rows.length === 1) {
            res.status(200).send({ sucess: true, message: 2, description: "Usuario existe", data: nombres })
        } else {
            const response = await pool.query('INSERT INTO public.usuarios(nombres, apellidos, fecha_nac, email, contraseña) VALUES ($1, $2, $3, $4, $5)', [nombres, apellidos, fecha_nac, email, contraseña]);
            
            const getIdPerson = await pool.query('SELECT id FROM public.usuarios WHERE nombres=$1 AND apellidos=$2 AND fecha_nac=$3 AND email=$4 AND contraseña=$5',[nombres, apellidos, fecha_nac, email, contraseña]);
            
            console.log(response.rowCount);
            
            if (response.rowCount === 1) {
                res.send({message:"usuario creado", data:getIdPerson.rows, sucess:true});
            } else {
                res.send({sucessf:false, message:"usuario no creado"});
            }
        }
    } catch (err) {
        res.status(500).send("Problemas al crear usuario");
    }

};



module.exports = {
    GetUserByUser,
    createUser,
};