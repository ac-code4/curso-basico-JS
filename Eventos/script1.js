// Eventos
// Interactuando con usuarios

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('btnCalcular');
const pResult = document.querySelector('#result');
const pResult2 = document.querySelector('#result2');

function btnOnClick(){
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
    const suma = input1.value + input2.value;
    pResult2.innerText = Number(input1.value) + parseInt(input2.value);
}