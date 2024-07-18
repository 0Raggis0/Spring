const newurl = new URL("http://localhost:3000/users/register");
$(document).ready(function () {
    //GetUserByUser();
});
    

let usuarios = {
    nombres: "",
    apellidos: "",
    fecha_nac: "",
    email: "",
    contraseña: ""
};

$("#btnGrabarCta").click(function(){

    debugger;
    let campo = "";
    let validar = true;
    usuarios.nombres = document.getElementById("textNombreReg").value;
    usuarios.apellidos = document.getElementById("textApellidosReg").value;
    usuarios.fecha_nac = document.getElementById("textFechaReg").value;
    usuarios.email = document.getElementById("textCorreoReg").value;
    usuarios.contraseña = document.getElementById("textContraseñaReg").value;


    if(usuarios.nombres == null || usuarios.nombres == ""){
        validar = false;
        campo += usuarios.nombres;
    }

    if(usuarios.apellidos == null || usuarios.apellidos == ""){
        validar = false;
        campo += usuarios.apellidos;
    }

    if(usuarios.fecha_nac == null || usuarios.fecha_nac == ""){
        validar = false;
        campo += usuarios.fecha_nac;
    }

    if(usuarios.email == null || usuarios.email == ""){
        validar = false;
        campo += usuarios.email;
    }

    if(usuarios.contraseña == null || usuarios.contraseña == ""){
        validar = false;
        campo += usuarios.contraseña;
    }

     registro (usuarios, validar)
});

function registro (usuarios, validar) {
    debugger;
    if (validar === true) {
        (async () => {
            const rawResponse = await fetch(newurl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuarios)
            });
            debugger;
            const content = await rawResponse.json();
            debugger;
            if (content.sucess === true) {
                $('#RegisterModal').modal('hide')
                alert("Datos guardados");
                //limpiar();
            } else {
                alert("No se pudo registrar");
                //limpiar();
            }
            console.log(content);
        })();
    } else {
        alert("No se pudo registrar");
    }
};