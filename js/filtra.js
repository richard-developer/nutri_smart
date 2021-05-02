var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value); // o this se refere ao dono do evento, nesse caso o campoFiltro.

    var pacientes = document.querySelectorAll(".paciente"); // seleciona todos os pacientes e guarda em uma variável.

    // verifica se algo foi digitado no campoFiltro.
    if(this.value.length > 0){
        
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;

            //criando uma Expressão Regular:
            var expressao = new RegExp(this.value, "i"); // "i" = case insensitive: tanto faz maiúsculo ou minúsculo
    
            // testa se o nome do paciente tem pelo menos um pedaço do que está escrito na expressao campoFiltro(this.value)
            // se não tiver, deixa o campo invisível:
            if(! expressao.test(nome)){
                paciente.classList.add("invisivel");
            }
            // se tiver, remove o invisivel:
            else {
                paciente.classList.remove("invisivel");
            }
        }
        
    }
    // se não tiver nada digitado no campo campoFiltro:
    else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
    
    


});