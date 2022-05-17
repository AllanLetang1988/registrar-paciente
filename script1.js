//1-VAMOS A ADICIONAR NUEVOS PACIENTES Y TAMBIEN CALCULAR EVENTOS USANDO "addEventListener"
var botonAdicionar = document.querySelector("#adicionar-paciente");

botonAdicionar.addEventListener("click",function(event){
    event.preventDefault();

    //2-creando etiquetas de html en js. una etiqueta <tr> y cinco etiquetas <td>
    var form = document.querySelector("#form-adicionar")
    
    var nombre = form.nombre.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;


    var tabla = document.querySelector("#tabla-pacientes");//parte del comentario 3

    pacienteTr = document.createElement("tr");
    nombreTd = document.createElement("td");
    pesoTd = document.createElement("td");
    alturaTd = document.createElement("td");
    gorduraTd = document.createElement("td");
    imcTd = document.createElement("td");

    //3-adicionando pacientes en la tabla con appendChild
    nombreTd.textContent = nombre;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calcularIMC(peso,altura);

    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    tabla.appendChild(pacienteTr);
})

