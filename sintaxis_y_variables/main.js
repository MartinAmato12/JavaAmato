let producto ="";
let precio = 0;
let seguirComprando = false;
let cantidad = 0;
let precioTotal = 0;

function calcularPrecio(producto,precio){
    return precioTotal += producto * precio;
}
do{
    producto = prompt("Hola queres comprar Paquete, Album, Album tapa dura, Album y paquetes o todo?");
    cantidad = parseInt(prompt("Cuántos queres comprar?"));

    switch(producto){
        case "Paquete" :
            precio = 150;
            break;

        case "Album" :
            precio = 750;
            break;
        
        case "Album tapa dura":
            precio = 3000;
            break;

        case "Album y paquetes":
            precio = 900;
            break;

        default :
            alert("Ningun producto fue seleccionado, por favor intente nuevamente");
            precio = 0;
            cantidad = 0;
    }

    calcularPrecio(precio,cantidad);

    seguirComprando = confirm("¿Querés agregar mas productos?");
        
}while(seguirComprando);

alert("El precio total es de: " + precioTotal);

let FinCompra = confirm("¿Desea Finalizar Su Compra?");

if(FinCompra) alert("Su compra fue realizada con exito");
if(!FinCompra) alert("Vuelva pronto");