/*USAR QUERY SELECTOR PARA ALTERAR EL TÍTULO
var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = "Mala vida nutrición";*/


/*CALCULAR EL IMC DEL PRIMER PACIENTE
var paciente = document.querySelector("#primer-paciente");
var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = document.querySelector(".info-imc");
var imc = peso / (altura * altura);
tdImc.textContent = imc;*/


//CALCULAR EL IMC DE TODOS LOS PACIENTES CON querrySelectorAll
var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);
for(var i = 0;i < pacientes.length;i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    tdImc.textContent = calcularIMC(peso,altura);
    tdImc.classList.add("imc-color");//para aplicar una clase que no estaba en nuestro html
}

function calcularIMC(peso,altura){
    var imc = peso / (altura * altura);
    return imc.toFixed(2);
}