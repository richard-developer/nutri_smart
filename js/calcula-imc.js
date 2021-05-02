// selecionando um classe e alterando o conteudo da mesma:
//document.querySelector(".titulo").innerHTML = " App NutriSmart";

// querySelector retorna somente um elemento;
// quertSelectorAll retorna um array de elementos, com todos eles;

//var paciente = document.querySelector(".paciente"); 
//console.log(paciente); // imprime apenas o primeiro paciente

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes); // imprime um array com todos os pacientes

// length: propriedade que informa o tamanho do array
// o For vai varrer o vetor do início ao fim, pegando cada paciente do vetor e armazenando numa variável.
for (var i = 0; i < pacientes.length; i++ ){

    var paciente = pacientes[i]; // acessa a posição do array cada vez que entra no for: [0], [1], [2]...
    
var tdPeso = paciente.querySelector(".info-peso"); // . seleciona uma classe
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc"); //selecionado o campo info-imc e guardando em tdImc

var pesoValido = validaPeso(peso); // true or false
var alturaValida = validaAltura(altura); // true or false

// se peso válido for falso (! é negação)
if (!pesoValido){ 
    console.log("Peso Inválido.");
    pesoValido = false;
    tdImc.textContent = "Peso Inválido!";
    //paciente.style.color = "white"; // altera a cor da fonte;
    //paciente.style.backgroundColor = "#FF6347"; // altera a cor de fundo;
    paciente.classList.add("paciente-invalido"); // adiciona uma classe ao objeto paciente e o estilo será modificado no CSS

}

if (!validaAltura){
    console.log("Altura Inválida.");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida!";
    paciente.classList.add("paciente-invalido");
}

if (pesoValido == false && alturaValida == false){ // se ambos forem falsos, infoma outra mensagem;
    tdImc.textContent = "Peso e Alt. Inválidos!";
}

if (pesoValido && alturaValida){ // se ambos forem veradeiros, troque o conteúdo e mostre o valor do IMC
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc; // colocando o valor do IMC como conteúdo do info-imc, com apenas 2 casas após a vírgula.
}

}

// criando a função calculaImc para ser utilizada em outas partes do código:
function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2); // retorna o imc calculado com duas casas decimais após a virgula.
}

// checa se o peso informado é válido:
function validaPeso(peso){
    if(peso >=0 && peso <=500){
        return true;
    }
    else{
        return false;
    }

}

// checa se o peso informado é válido:
function validaAltura(altura){
    if (altura >=0 && altura <=3.0){
        return true;
    }
    else{
        return false;
    }
}




