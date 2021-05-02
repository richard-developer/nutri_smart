var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){
    // o comportamento padrão de um form, ao clicar no botão é enviar os dados, recarregar página e limpar o formulário.
    event.preventDefault(); // prevê o comportamento padrão do usuário clicar no botão e impede da página ser recarregada.
    
    //seleciona o form com id form-adiciona no HTML:
    var form = document.querySelector("#form-adiciona"); 

    //obtem os dados do formulário selecionado:
    var paciente  = obtemPacienteDoFormulario(form);

    // guarda o array de erros retornados da função:
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return; // return vazio faz ele sair da função anônima ao clicar no botãoAdicionar, evitando assim o cadastro com erros.

    }
    
    adicionaPacienteNaTabela(paciente); // adiciona novo paciente na tabela

    form.reset(); // limpa campos do formulário, para evitar que o usuário insira um novo paciente com os mesmos dados.

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; // limpa as mensagens dee erro.

});
    
    function adicionaPacienteNaTabela(paciente){

        var pacienteTr = montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes"); // seleciona a tabela no HTML
        tabela.appendChild(pacienteTr); // colocando pacienteTr dentro da tabela (tabela-pacientes). Ou seja, pacienteTr é filho de tabela.
    }

    function obtemPacienteDoFormulario(form){

        // criando o objeto e instanciando:
        var paciente = {
            nome: form.nome.value, // caracteristicas / propriedades do objeto
            peso: form.peso.value,
            altura: form.altura.value,
            gordura: form.gordura.value,
            imc: calculaImc(form.peso.value, form.altura.value),

        }
        return paciente;
    }

    function exibeMensagensDeErro(erros){
        var ul = document.querySelector("#mensagens-erro");
        ul.innerHTML = ""; // zera o conteúdo interno da ul, no caso as li's.

        // para cada item do array de erros, faça cada vez que acontecer um erro:
        erros.forEach(function (erro) {
            var li = document.createElement("li"); // crie um li
            li.textContent = erro; // coloca o contúdo do erro no li
            ul.appendChild(li); // coloca o li dentro da ul
        });

    }

    function montaTr(paciente){
    // cria um elemento HTML: tr (table row - linha da tabela)
    var pacienteTr = document.createElement("tr"); 
    //adicionando a class paciente ao tr.
    pacienteTr.classList.add("paciente"); 
     
    // chama a função montaTd passando o campo e a classe da tag e guarda numa variável:
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura, "info-altura");
    var gorduraTd = montaTd(paciente.gordura, "infor-gordura");
    var imcTd = montaTd(paciente.imc, "info-imc");

    // coloque os tds como filho da tr. Dessa forma, todos os td ficam dentro da tr:
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

        return pacienteTr;
    }

    // cria as colunas da tabela:
    function montaTd(campo, classe){
        var td = document.createElement("td"); 
        td.textContent = campo;
        td.classList.add(classe);

        return td;
    }

    function validaPaciente (paciente){
        // declara array de erros:
        var erros = [];

        if(paciente.nome.length == 0){
            erros.push("O campo Nome não pode estar em branco.");
        }

        // se o peso não for válido, coloque no vetor erros uma msg.
        if(!validaPeso(paciente.peso)){
            erros.push("Peso é Inválido.");
        }
        // se a altura não for válida, coloque no vetor erros uma msg.
        if(!validaAltura(paciente.altura)){
            erros.push("Altura é Inválida.")
        }

        // verifica se os campos estão vazios:
        if(paciente.peso.length == 0){
            erros.push("O campo Peso não pode estar em branco.")
        }

        if(paciente.altura.length == 0){
            erros.push("O campo Altura não pode estar em branco.")
        } 

        if(paciente.gordura.length == 0){
            erros.push("O campo % de Gordura não pode estar em branco.");
        }
      
        return erros;

    }
    




