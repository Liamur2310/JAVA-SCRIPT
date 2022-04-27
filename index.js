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
//SALUDO Y PIDO DATOS DE LA PERSONA
/*const saludar = () => {
    alert("Bienvenido a la Tienda de ropa LM")
    let nombre = prompt("Ingrese su nombre");
    alert("Buenas noches " + nombre);
    while(nombre === ""){
        nombre = prompt("Ingrese su nombre: ");
    }
}
saludar ();


//DOY INICIO A LA TIENDA ONLINE

let usuario = prompt("Si desea realizar una compra ingrese SI , de lo contrario NO");

if (usuario.toUpperCase() == "SI"){
    console.log(alert("Bienvendo a la Tienda de LM"));
    const arrayProductos = [];
    const arrayCompra = [];

class Productos{
    constructor (nombre,precio){
        this.nombre = nombre,
        this.precio = precio
    }
    
}

console.log( "Este es nuestro catalogo:");
for (let valor of arrayProductos){
    console.log(valor.nombre);
}

arrayProductos.forEach((el) => {console.log(el.nombre)});

let producto;
let precioFinal = 0;

while (producto != ""){
    producto = prompt("Ingresa el numero del producto que desees cargar  \n1 remera $5000 \n2 jean $8000  \n3 zapatillas $10000 \n4 sombrero $1500 \n5 medias $800 \n6 cinto $1800")
    const n1= new Productos("remera", 5000);
    arrayProductos.push (n1)
    const n2 = new Productos ("jean", 8000);
    arrayProductos.push (n2)
    const n3 = new Productos ("zapatillas", 10000);
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
                alert ('Tu precio final es de' + " " + precioFinal);
                break;
            }
        }
    }
}else{
    usuario.toUpperCase() == "NO"
    alert ("Muchas gracias por tu visita");
    
}}*/




// seleccionar todo
function selectAll(){
		var obj = document.getElementsByClassName("selectOne");
		var btSelectAll = document.getElementById("allCheck").checked;
	for(inputCheck of obj){
		inputCheck.checked = btSelectAll;
	}
}
// eliminación única
function deleteChild(obj){
		var nowtr = obj.parentElement.parentElement;
		var nowtable = nowtr.parentElement;
		nowtable.removeChild(nowtr);
				// Precio total
		allShopPriceTotal();
				// puntos totales
		allIntegralTotal();
}
// eliminación por lotes
function selectDelete(){
		var obj = document.getElementsByClassName("selectOne");
	for (var i = obj.length - 1;i >= 0;i--){
		var nowCheck = obj[i];
	if (nowCheck.checked == true){
		deleteChild(nowCheck);
	    }
    }
// Precio total
		allShopPriceTotal();
// puntos totales
		allIntegralTotal();
}
			
// reducir en cantidad
	function reduce(obj){
				var textElement = obj.parentElement.children[1];
				if (textElement.value == "1"){
					return;
				}
				textElement.value = eval(textElement.value + "-1");
				// Subtotal
				var singelSumElement = obj.parentElement.parentElement.children[5];
				singleSubTotal(singelSumElement);
				// Precio total
				allShopPriceTotal();
				// puntos totales
				allIntegralTotal();
			}
			// Incrementa el número de
			function plus(obj){
				var textElement = obj.parentElement.children[1];
				textElement.value = eval(textElement.value + "+1");
				// Subtotal
				var singelSumElement = obj.parentElement.parentElement.children[5];
				singleSubTotal(singelSumElement);
				// Precio total
				allShopPriceTotal();
				// puntos totales
				allIntegralTotal();
			}

			// Inicializar todos los subtotales de productos
			function singleAllSubTotal(){
				var obj = document.getElementsByClassName("shopCount");
				for(shopCount of obj){
					singleSubTotal(shopCount);
				}
			}
			// Calcula el subtotal de un solo producto
			function singleSubTotal(obj){
				var price = obj.parentElement.children[3].innerHTML;
				var count = obj.parentElement.children[4].children[1].value;
				obj.innerHTML = eval(price + "*" + count);
			}
			// El precio total de todos los bienes
			function allShopPriceTotal(){
				var obj = document.getElementById("resultTotalMoney");
				var allSingelSubElement = document.getElementsByClassName("shopCount");
				var sum = "0";
				for (singelSubElement of allSingelSubElement){
					if (sum != ""){
						sum += "+";
					}
					sum += singelSubElement.innerHTML;
				}
				obj.innerHTML = eval(sum);
			}
// Compra ahora
function buyNow(){
		var result = confirm("Listo para finalizar tu compra?");
		if (result == false){
		return
}
	var obj = document.getElementById("mytable");
	obj.innerHTML = "";
// Precio total
	allShopPriceTotal();
	alert("¡Compra exitosa!");
			}
			
			// Añadir al carrito
			function addToCart(obj){
				var result = confirm('¿Añadir este producto al carrito de la compra? ');
				if (result == false){
					return;
				}
				// Formulario de carrito de compras
				var cartBox = document.getElementById("mytable");
				// Objeto de mercancía
				var shop = {
					shopImg:obj.children[0].src,
					shopIntegral:parseInt(eval(obj.children[2].innerHTML + "/20")),
					shopPrice:obj.children[2].innerHTML
				}
				// Determine si el producto existe
				var img = document.getElementsByClassName("imgbackground");
				var result = "-1";
				for (var i = 0;i < img.length;i++){
					if (shop.shopImg == img[i].children[0].src){
						result = i;
					}
				}
				if (result != "-1"){
					var count = img[result].parentElement.children[4].children[1];
					count.value = eval(count.value + "+1");
					// Recalcular el subtotal
					singleAllSubTotal();
				}else{
					// Crea un objeto de carrito de compras
					var tr = document.createElement("tr");
					var td1 = document.createElement("td");
					td1.innerHTML = '<input type="checkbox"  class="selectOne" />';
					var td2 = document.createElement("td");
					td2.className = "imgbackground";
					td2.innerHTML = '<img src="'+ shop.shopImg +'" height="100" width="100"/>';
					var td3 = document.createElement("td");
					td3.className = "integral";
					td3.innerHTML = shop.shopIntegral;
					var td4 = document.createElement("td");
					td4.innerHTML = shop.shopPrice;
					var td5 = document.createElement("td");
					td5.innerHTML = '<button οnclick="reduce(this)">-</button>&nbsp;'
								+ '<input type="text" size="1" readonly="true" value="1"/>'
								+ '&nbsp;<button οnclick="plus(this)">+</button>';
					var td6 = document.createElement("td");
					td6.className = "shopCount";
					td6.innerHTML = parseInt(shop.shopPrice);
					var td7 = document.createElement("td");
					td7.innerHTML = '<a href="#" class="delete" οnclick="deleteChild(this)"> Eliminar </a>';
					tr.appendChild(td1);
					tr.appendChild(td2);
					tr.appendChild(td3);
					tr.appendChild(td4);
					tr.appendChild(td5);
					tr.appendChild(td6);
					tr.appendChild(td7);
					// Añadir al carrito
					cartBox.appendChild(tr);
				}
				
				// Precio total
				allShopPriceTotal();
				// puntos totales
				allIntegralTotal();
				// cambiar de color
				changeBackground();
			}
			// El movimiento del mouse cambia el color de fondo
			function changeBackground(){
				var imgtd = document.getElementsByClassName("imgbackground");
				for (singeltd of imgtd){
					singeltd.onmousemove = function(){
						this.style.backgroundColor = "orange";
					}
					singeltd.onmouseleave = function(){
						this.style.backgroundColor = "white";
					}
				}
			}
			// Inicializar el contenido de la interfaz
			window.onload = function(){
				changeBackground();
				singleAllSubTotal();
				allShopPriceTotal();
				allIntegralTotal();
			}

