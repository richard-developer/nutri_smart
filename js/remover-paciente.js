var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    var resp = confirm("Deseja realmente excluir esse registro?")

    if( resp == true){
        console.log(event.target); // informa quem foi clicado. Ou seja, o alvo do evento.
        var alvoEvento = event.target; // o alvo é uma td
        var paiDoAlvo = alvoEvento.parentNode; //pai do alvo é uma tr ( está acima)
        event.target.parentNode.classList.add("fadeOut"); // adiciona a classe fadeOut

        // segure essa função por um tempo:
        setTimeout(function(){
            paiDoAlvo.remove(); // remove a tr que é o pai do alvo.
        }, 500) // 500 milissegundos
        
    }
    else {
        return;
    }
});


//pacientes.forEach(function(paciente){
//  paciente.addEventListener("dblclick", function(){ //evento de duplo click
//    console.log("Fui clicaod com um duplo click."); 
//  this.remove();
//});

//});