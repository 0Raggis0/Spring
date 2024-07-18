let V_persona =[]; 
const url = new URL("http://localhost:3000/users/login");
$(document).ready(function () {
    //GetUserByUser();
debugger;
    var user = JSON.parse(localStorage.getItem("persona"));
    if(user != null) {
        $('#botonregistrarse').fadeOut();
        $('#botonlogin').fadeOut();
        $('#textbienvenida').fadeIn();
    }  else{      
        $('#botonregistrarse').fadeIn();
        $('#botonlogin').fadeIn();
        $('#textbienvenida').fadeOut();
}
});




//* Logica para traer datos de usuario y contraseña para reconocerlos


async function GetUserByUser(url){
    const user = await fetch(url);
    response = await user.json();
    console.log(response);
}

//*

$("#btnIngresarCta").click(function(){
    
    let validar = true;
    let correo = document.getElementById("textnombre").value;
    let contra = document.getElementById("textContra").value;

    if(correo == null || correo == ""){
        validar = false;
    }

    if(contra == null || contra == ""){
        validar = false;
    }

debugger;
    if (validar === true) {
        (async () => {
            debugger;
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: correo , contraseña: contra})
            });
            debugger;
            const content = await rawResponse.json();
            debugger;
            if (content.sucess === true) {
debugger;
                V_persona = content.data[0];
                localStorage.setItem('persona', JSON.stringify(V_persona));

                $('#LoginModal').modal('hide')
                alert("Acceso permitido");
                window.location.reload();

                // OcultarButton("#botonlogin");
                // OcultarButton("#botonregistrarse");
                // MostrarTexto("#textbienvenida")
                //limpiar();
            } else {
                alert("No se pudo logear");
                //limpiar();
            }
            console.log(content);
        })();
    } else {
        alert("No se pudo logear");
    }
})

$("#textbienvenida").click(function cerrar(){
    debugger;
    localStorage.removeItem('persona')
    localStorage.removeItem('pedido')
    window.location.reload();
})


// function OcultarButton(id)
// {
//     debugger;
//     localStorage.getItem('persona', JSON.stringify(persona));

//     if (persona != null || persona != ""){
//         $(id).fadeOut();

//     }

// }

// function MostrarTexto(id)
// {
//     $(id).fadeIn();
// }