let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");

let  carta= $(".item");

carta.click(function(){
    quitarBordes();
    mostrador.style.width = "60%";
    seleccion.style.width = "40%";
    seleccion.style.opacity = "1";

    let item = $(this);
    item[0].style.border = "2px solid white";

    imgSeleccionada.src = item.find("img").attr("src");
    modeloSeleccionado.innerHTML = item.find(".nombre").text(); // Cambiado de "p" a ".nombre"
    descripSeleccionada.innerHTML = item.find(".descripcion").text(); // Ajustado para obtener la descripción
    precioSeleccionado.innerHTML = item.find("span").html();


});

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.width = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
}
function quitarBordes(){
    var items = $(".item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "3px solid #05243D";
    }
}

