var botaoImportar = document.querySelector("#importar-pacientes");

botaoImportar.addEventListener("click", function(){
    console.log("Buscando pacientes...");

    // objeto que faz requisições HTTP:
    var xhr = new XMLHttpRequest();

    // abri a conexão com a URL:
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    
    // envia a requisição acima:
    xhr.send();

    // escuta até que a requsição seja carregada:
    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        
        // status 200 do AJAX = OK
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel"); //esconde o erro.

            var resposta = xhr.responseText; // guarda a resposta da requisição.
            var pacientes = JSON.parse(resposta); // parseia (converte) o JSON em um objeto JS (Array).

            // para cada paciente do array de pacientes, adicione na tabela.
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
        });
        // se der erro:
        } else {
            erroAjax.classList.remove("invisivel"); // remove o invisivel: torna o erro visível.
        }
       
    });


});

