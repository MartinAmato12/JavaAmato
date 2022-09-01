let clientes = Number(prompt("Ingrese el numero de clientes:"));
const nombre = [];

for(let i = 1; i <= clientes; i++){
    let cliente = prompt("ingresar nombre del cliente")
    alert('el cliente n.'+i+' es '+ cliente)
    nombre.push(cliente);
}

console.log(nombre);