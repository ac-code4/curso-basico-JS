//Opcion 1 reto
//Funcion de construccion
function auto(marca, modelo, anno){
    this.marca = marca;
    this.modelo = modelo;
    this.anno = annio;
}
//Variable de objeto (Arreglo)
//Con el operador bucle FOR 
var autos = [];

for(let i = 0; i < 5; i++){
    var marca = prompt("ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del Auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto(marca, modelo, annio));
}

for(let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}

// Opcion 2 para el reto

//Iniciando variables a manejar
var autos = [];
var cantidadAutos = 0;
var cantRegis = 0;

//Funcion de construccion de autos
function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.anno = annio;
}

//Solicitamos al usuario la cantidad de autos a registrar
cantidadAutos = prompt("Cuantos autos desea registrar");

//Ejecutamos un ciclo para el registro de autos
// Hasta la cantidad de autos deseados
while(cantRegis < cantidadAutos){
    let marca = prompt("Marca del auto");
    let modelo = prompt("Modelo del auto");
    let annio = prompt("Año del auto");

    var autoNuevo = new auto(marca, modelo, annio);

    autos.unshift(autoNuevo);

    cantRegis++;
}
console.log(autos);
