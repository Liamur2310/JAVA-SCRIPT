//PRIMER EJEMPLO

/*const monto = parseInt(prompt("Ingrese monto a calcular"));
const cuotas = parseFloat(prompt("Cantidad de cuotas: \n3 Cuotas \n6 Cuotas \n12 Cuotas \n18 Cuotas \n24 Cuotas \n36 Cuotas"));

if (cuotas == 3) {
   resultado = monto / 3;
   alert("Tienes que pagar 3 cuotas de $ " + resultado);
} else if (cuotas == 6) {
   resultado = monto / 6;
   alert("Tienes que pagar 6 cuotas de $ " + resultado);
} else if (cuotas == 12) {
   resultado = monto / 12;
   alert("Tienes que pagar 12 cuotas de $ " + resultado);
} else if (cuotas == 18) {
   resultado = monto / 18;
   alert("Tienes que pagar 18 cuotas de $ " + resultado);
} else if (cuotas == 24) {
   resultado = monto / 24;
   alert("Tienes que pagar 24 cuotas de $ " + resultado);
}
alert("Gracias por su consulta!")*/


// SEGUNDO EJEMPLO


/*let monto = parseInt(prompt("Ingrese monto a calcular"));
let cuotas = parseFloat(prompt("Cantidad de cuotas: \n3 Cuotas \n6 Cuotas \n12 Cuotas \n18 Cuotas \n24 Cuotas"));

while(monto != "0"){
    switch(parseInt(cuotas)){
        case 3:
            resultado = monto / 3;
            alert("Tienes que pagar 3 cuotas de $ " + resultado);
            break;
        case 6:
            resultado = monto / 6
            alert("Tienes que pagar 6 cuotas de $ " + resultado);
            break;
        case 12:
            resultado = monto / 12;
            alert("Tienes que pagar 12 cuotas de $ " + resultado);
            break;
        case 18:
            resultado = monto / 18;
            alert("Tienes que pagar 18 cuotas de $ " + resultado);
            break;
        case 24:
            resultado = monto / 24;
            alert("Tienes que pagar 24 cuotas de $ " + resultado);
            break;
    }
    alert("Gracias por su consulta!");
    break;
}*/
/*

const monto = parseInt(prompt("Ingrese monto a calcular"));
const cuotas = parseFloat(prompt("Cantidad de cuotas: \n3 Cuotas \n6 Cuotas \n12 Cuotas \n18 Cuotas \n24 Cuotas"));


if( Number(monto) && Number(cuotas)) {
        switch(parseInt(cuotas)){
            case 3:
                resultado = monto / 3;
                alert("Tienes que pagar 3 cuotas de $ " + resultado);
                break;
            case 6:
                resultado = monto / 6
                alert("Tienes que pagar 6 cuotas de $ " + resultado);
                break;
            case 12:
                resultado = monto / 12;
                alert("Tienes que pagar 12 cuotas de $ " + resultado);
                break;
            case 18:
                resultado = monto / 18;
                alert("Tienes que pagar 18 cuotas de $ " + resultado);
                break;
            case 24:
                resultado = monto / 24;
                alert("Tienes que pagar 24 cuotas de $ " + resultado);
                break;
        }
        alert("Gracias por su consulta!");
    }*/

/*let rta = "";
let resultado;
let opc = "";

const sumar = (num1, num2) => {return (num1 + num2)};

const restar = (num1, num2) => {return (num1 - num2)};

const multiplicar = (num1, num2) => {return (num1 * num2)};

const dividir = (num1, num2) => {return (num1 / num2)};

function validacion(rta) {
    rta = prompt("¿Desea hacer otra cuenta? (S/N)");
    if ((rta !== "S") && (rta !== "N")) {
        do {
            alert("Respuesta no valida, reintente")
            rta = prompt("¿Desea hacer otra cuenta? (S/N)");
        } while ((rta !== "S") && (rta !== "N"));
    }
    return rta;
}


alert("Bienvenido a la calculadora");
do {
    let num1 = parseFloat(prompt("Ingrese el primer numero: "));
    let num2 = parseFloat(prompt("Ingrese el segundo numero: "));
    opc = (prompt("Teclee el simbolo de la operación que desea realizar:\n1) +\n2) - (1°numero - 2°numero)\n3) x\n4) / (1°numero / 2°numero) \n5) O digite ESC para salir"));
    if ((opc === "5") || (opc === "ESC")) {
        break
    }
    switch (opc) {
        case "+":
            resultado = sumar(num1, num2);
            alert("La suma de " + num1 + ' + ' + num2 + ' es: ' + resultado);
            break;
        case "-":
            resultado = restar(num1, num2);
            alert('La resta de ' + num1 + ' - ' + num2 + ' es : ' + resultado);
            break;
        case "x":
            resultado = multiplicar(num1, num2);
            alert('La multiplicación de ' + num1 + ' x ' + num2 + ' es : ' + resultado);
            break;
        case "/":
            resultado = dividir(num1, num2);
            alert('La división de ' + num1 + ' / ' + num2 + ' es : ' + resultado);
            break;
        case "ESC":
            break;
        default:
            alert("Opción no valida, por favor reintente");
            opc = (prompt("Teclee el simbolo de la operación que desea realizar:\n1) +\n2) - (1°numero - 2°numero)\n3) x\n4) / (1°numero - 2°numero) \n5) O digite ESC para salir"));
        // continue;
    }


} while (validacion() === "S");*/



//PRIMERA ENTREGA DE TRABAJO FINAL

function saludar(nombreCompleto){
    alert("Buenas noches " + nombreCompleto);
}

let persona = prompt("Ingresa tu nombre completo");

saludar(persona);

let usuario = prompt("Si desea realizar una compra ingrese SI , de lo contrario NO");

if (usuario.toUpperCase() == "SI"){
    console.log(alert("Bienvendo al carrito de compras"));
const arrayProductos = [];
const arrayCompra = [];

class Productos{
    constructor (nombre,precio){
        this.nombre = nombre,
        this.precio = precio
    }
    
}

console.log( "Estas son nuestros productos:");
for (let valor of arrayProductos){
    console.log(valor.nombre);
}

arrayProductos.forEach((el) => {console.log(el.nombre)});

let producto;
let precioFinal = 0;

while (producto != ""){
    producto = prompt("Ingresa el numero del producto que desees cargar  \n1 remera  \n2 jean  \n3 zapatillas \n4 sombrero \n5 medias \n6 cinto")
    const n1= new Productos("remera", 5000);
    arrayProductos.push (n1)
    const n2 = new Productos ("jean", 10000);
    arrayProductos.push (n2)
    const n3 = new Productos ("zapatillas", 8000);
    arrayProductos.push (n3)
    const n4 = new Productos ("sombrero", 1500);
    arrayProductos.push (n4)
    const n5 = new Productos ("medias", 800);
    arrayProductos.push (n5)
    const n6 = new Productos ("cinto", 1800);
    arrayProductos.push (n6)

    for (const produ of arrayProductos){
        if (producto == produ.nombre){
            precioFinal = precioFinal + produ.precio;
        }    
    }
}
alert ("El precio final es de " + precioFinal);

let eliminaProducto = prompt('Queres eliminar algun producto?')
let productoEliminado;


if (eliminaProducto == 'si'){
    while (productoEliminado != "NO"){
        productoEliminado = prompt('Ingresa el nombre del producto a eliminar, ingresa NO para terminar');
        for (let value of arrayProductos){
            if (productoEliminado == value.nombre){
                precioFinal = precioFinal - value.precio;
            }
        }
    }
}else
alert ('Tu precio final es de' + " " + precioFinal);

}else{
    usuario.toUpperCase() == "NO"
    console.log(alert ("Muchas gracias por tu visita"));
    
}