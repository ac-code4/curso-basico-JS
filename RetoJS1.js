// VARIABLES Y OPERACIONES
// 2 Determina el nombre y tipo de dato
nombre "string"
apellido "string"
nombre de usuario en platzi "string"
edad "number"
correo electronico "string"
mayor de edad "boolean"
dinero ahorrado "number"
deudas "number"

// 3 Traduce a codigo JS las variables anteriores
var nombre = "Alvaro";
var apellidos = "Cabrera M";
var usuarioplatzi = "ACingeneieria";
var edad = 35;
var correo = "alvarocm4@prodigy.net.mx";
var mayoredad = true;
var dineroahorado = 5000;
var deudas = 25000;

// 4 Calcula e imprime las variables de lo anterior
var dineroreal = dineroahorado - deudas;
console.log("Mi nombre completo es" + nombre + " " + apellidos);
console.log("Dinero real es" + dineroreal);

//FUNCIONES
// 2 Convertir el siguiente codigo en una funcion
const named = "juan David";
const lastname = "Castro Gallego";
const completename = named + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completename + ", pero prefiero que me digas " + nickname + "." );

// 2.1 Codigo convertido
function card(named, lastname, nickname){
    return console.log("Mi nombre es " named + lastname + nickname);
}

// CONDICIONALES
// 2 Comportamiento del siguiente codigo 
const tipodesuscripcion = "Basic";

switch(tipodesustcripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien mas pueden tomar todos los cursos de Platzi durante un año");
        break;
}

// 2.1 Replicando con condicionles IF, else if, else.
console.log("Los tipos de suscripcion son: Basic, Free, Expert y ExpertPlus");
const tipodesuscripcion = prompt("ingresa el tipo de suscripcion");

if (tipodesuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipodesuscripcion == "Basic"){
    console.log("Pudes tomar casi todos los cuarsos de Platzi durante un mes");
} else if (tipodesuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un año");
} else if (tipodesuscripcion == "ExpertPlus"){
    console.log("Tú y alguien mas pueden tomar todos los cursos de Platzi durante un año");
} else {
    console.log("No tienes ninguna suscripcion")
}

// 2.2 Replicando codigo solo con if
var tipodesuscripcion = ["Free", "Basic", "Expert", "ExpertPlus"];
var info = ["Solo puedes tomar cursos gratis", "Solo puedes tomar cursos durante un mes", "Solo puedes tomar cursos durante un año", "Tú y alguien mas pueden tomar cursos por un año"];
var suscripcion = "Expert";

for (let i = 0; i < tipodesuscripcion.length; i++){
    if (suscripcion == tipodesuscripcion[i]){
        console.log(`Si estas en el plan ${tipodesuscripcion[i]} en el cual ${info[i]}`);
    }
}

// CICLOS
// Comportamiento del siguiente codigo con While
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--){
    console.log("El valor de i es: " + i);
}
// 2 Replicando con While
var i = 0;
while (i < 5){
    i++;
    console.log("El valor de i es:" + i);
}
var i = 10;
while (i >= 2){
    i--;
    console.log("Elvalor de i es: " + i);
}

// 3 Escribe un codigo que pregunte la suma de 2 + 2, si esta bien "felicitaciones" sino empesamos de nuevo.
var pregunta = prompt("Cuanto es 2 + 2 ")
if (pregunta == 4){
    console.log("Felicidades eres un genio")
} else {
    console.log("Sigue intentando");
}

// LISTAS O ARREGLOS
//  2 Escribir una funcion que reciba cualquier array como parametro e imprima su primer elemento
var elementos = [];

function cosa(elemento){
    this.elemento = elemento;
}
for(let i = 0; i < 3; i++){
    var elemento = prompt("ingresa la tipo de elemento");
    elementos.push(new cosa(elemento));
}

function primer(lista){
    console.log(elementos[0]);
}
primer();

// 3 Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
var elementos = [];

function cosa(elemento){
    this.elemento = elemento;
}
for(let i = 0; i < 3; i++){
    var elemento = prompt("ingresa la tipo de elemento");
    elementos.push(new cosa(elemento));
}

function primer(lista){
	for (i = 0; i < elementos.length; i++){
    console.log(elementos[i])};
}
primer();

// 4 Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
var elementos = [];

function cosa(elemento, color, forma){
    this.elemento = elemento;
    this.color = color;
    this.forma = forma;
}
for(let i = 0; i < 3; i++){
    var elemento = prompt("ingresa la tipo de elemento");
    var color = prompt("Ingresa el color del objeto");
    var forma = prompt("Ingresa la forma de las opcines: circular, cuadrado, tirangular");
    elementos.push(new cosa(elemento, color, forma));
}

function primer(lista){
	for (i = 0; i < elementos.length; i++){
    console.log(elementos[i])};
}
primer();