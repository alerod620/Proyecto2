const { Router } = require('express');
const router = Router();
const base = require('../Base.js');


//Ingresar usuario
router.post('/login', async (req, res) => {

    const { username, password } = req.body;
    sql = "SELECT * FROM USUARIO WHERE usuario=:username AND pass=:password";
    let result = await base.open(sql, [username, password], true, res);

    if (result.rows.length > 0) {
        //res.json('Existe');
        let arreglo = {
            "id": result.rows[0][0],
            "usuario": result.rows[0][1],
            "nombre": result.rows[0][2],
            "apellido": result.rows[0][3],
            "pass": result.rows[0][4],
            "telefono": result.rows[0][5],
            "foto": result.rows[0][6],
            "genero": result.rows[0][7],
            "nacimiento": result.rows[0][8],
            "registro": result.rows[0][9],
            "direccion": result.rows[0][10],
            "rol": result.rows[0][11],
            "correo": result.rows[0][11],
        }
        res.json({
            "res": true,
            "datos": arreglo
        })
    } else {
        res.json({
            "res": false,
            "datos": {}
        });
    }




});

//Registrar usuario
router.post('/register', async (req, res) => {

    const { usuario, nombre, apellido, password, telefono, foto, genero, nacimiento, registro, direccion, rol, correo } = req.body;
    sql = "INSERT INTO USUARIO(usuario, nombre, apellido, pass, telefono, fotografia, genero, fecha_nacimiento, fecha_registro, direccion, rol, correo) VALUES ( :usuario, :nombre, :apellido, :password, :telefono, :foto, :genero, :nacimiento, :registro, :direccion, :rol, :correo )";
    let result = await base.open(sql, [usuario, nombre, apellido, password, telefono, foto, genero, nacimiento, registro, direccion, rol, correo], true, res);

    console.log(result.rows);
    res.json('Registrado');

});


//Actualizar datos
router.put('/update', async (req, res) => {

    const { usuario, nombre, apellido, password, telefono, foto, genero, nacimiento, direccion, rol, correo } = req.body;

    if (nombre != "") {
        sql = "UPDATE USUARIO SET nombre=:nombre WHERE usuario=:usuario";
        let result = await base.open(sql, [nombre, usuario], true, res);
    }

    if (apellido != "") {
        sql = "UPDATE USUARIO SET apellido=:apellido WHERE usuario=:usuario";
        let result = await base.open(sql, [apellido, usuario], true, res);
    }

    if (password != "") {
        sql = "UPDATE USUARIO SET pass=:password WHERE usuario=:usuario";
        let result = await base.open(sql, [password, usuario], true, res);
    }

    if (telefono != "") {
        sql = "UPDATE USUARIO SET telefono=:telefono WHERE usuario=:usuario";
        let result = await base.open(sql, [telefono, usuario], true, res);
    }

    if (foto != "") {
        sql = "UPDATE USUARIO SET fotografia=:foto WHERE usuario=:usuario";
        let result = await base.open(sql, [foto, usuario], true, res);
    }

    if (genero != "") {
        sql = "UPDATE USUARIO SET genero=:genero WHERE usuario=:usuario";
        let result = await base.open(sql, [genero, usuario], true, res);
    }

    if (direccion != "") {
        sql = "UPDATE USUARIO SET direccion=:direccion WHERE usuario=:usuario";
        let result = await base.open(sql, [direccion, usuario], true, res);
    }

    if (nacimiento != "") {
        sql = "UPDATE USUARIO SET fecha_nacimiento=:nacimiento WHERE usuario=:usuario";
        let result = await base.open(sql, [nacimiento, usuario], true, res);
    }

    if (rol != "") {
        sql = "UPDATE USUARIO SET rol=:rol WHERE usuario=:usuario";
        let result = await base.open(sql, [rol, usuario], true, res);
    }

    if (correo != "") {
        sql = "UPDATE USUARIO SET correo=:correo WHERE usuario=:usuario";
        let result = await base.open(sql, [correo, usuario], true, res);
    }

    res.json('Datos Actualizados');
});


//TODO:ACTUALIZAR USUARIO




module.exports = router;