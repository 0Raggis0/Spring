//! Tablas

let V_pedido = [];


const pedido={
    img:"",
    modelo:"",
    cantidaditems:0,
    precio:0,
    fechadeseada:""
}


$( document ).ready(function() {
    debugger;
    var data = JSON.parse(localStorage.getItem("pedido"));
    if(data != null) {
    let cant = data.length;
    $("#cant").text(cant);
    //console.log(data);
    }
});



function V_imagen(){
    var data = JSON.parse(localStorage.getItem("pedido"));
    debugger;
    if(data != 0){
    $("#modalcarrito").modal("show");
    ViewCatalogo(data);
    }

};


function addshowp(){
    debugger;
    limpiarobjeto(pedido);
  pedido.img = $("#img").attr("src");
  pedido.modelo=  $("#modelo").text();
  pedido.cantidaditems=   $("#cantidaditems").val();
  pedido.precio=   $("#precio").text();
  pedido.fechadeseada = $("#fechadeseada").val();
  
  var pedido2 = JSON.parse(localStorage.getItem("pedido"));

  if(pedido2 != null){
    V_pedido = pedido2;
  } 

  V_pedido.push(pedido);
 $("#cant").text(V_pedido.length);

 localStorage.setItem("pedido", JSON.stringify(V_pedido));
}

function limpiarobjeto(){
    pedido.img="";
    pedido.modelo= "";
    pedido.cantidaditems=  0;
    pedido.precio=  "";
    pedido.fechadeseada = 0;
}

$('#pago').click(function (){

    $("#compragenerada").modal("show");
})

$('#aceptar').click(function (){
    localStorage.removeItem('pedido');
    window.location.reload();
})


function cancelar(){
    // localStorage.clear();
    localStorage.removeItem('pedido')
    window.location.reload();
    alert("Orden cancelada");
}

function ViewCatalogo(data) {
    debugger;
    let table = new Tabulator("#tabla", {
        layout: "fitDataStretch",
        reactiveData: false, //enable reactive data
        data: data,
        pagination: "local",
        paginationSize: "10",
        height: "auto",
        movableColumns: false,
        columns: [
            {

            hozAlign: "center",
            headerSort: false,
            formatter: function (cell, formatterParams) {
                debugger;
                let info = cell.getData();
                let html = '<img style="width:100px;height:100px;border:solid 1px black;" src="' + info.img +'"</div><br><div class="columna" style="margin-top: 2%;">'+"<strong>Modelo: </strong>" + info.modelo + '</div><div class="columna">'+ "<strong>Cantidad: </strong>" +  info.cantidaditems + '</div><div class="columna">' + "<strong>Precio: </strong>" + info.precio + '</div><div class="columna">'+ "<strong>Fecha: </strong>" +  info.fechadeseada  + '</div>'
                return html;
            }
        },

        ],
    });
}
