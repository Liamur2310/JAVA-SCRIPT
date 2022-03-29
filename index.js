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


let monto = parseInt(prompt("Ingrese monto a calcular"));
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
}