function novaLinha() {
  var row = document.querySelector("tbody tr");
  var table = document.querySelector("table tbody");
  var clone = row.cloneNode(true);
  var inputsClone = clone.getElementsByTagName('input'); // todos os inputs clonados
  for (var i = 0; i < inputsClone.length; i++) {
    inputsClone[i].value = '';
  }
  table.appendChild(clone);
}

var vTempoMin = document.getElementsByTagName('form')
var vContentTempoMin = vTempoMin.value
console.log(vContentTempoMin)

function calcula(){
  // var tabela = document.getElementById('tabela')
  // var linhas = tabela.getElementsByTagName('tr')
  // console.log(linhas.length)
  // for (var i=1; i < (linhas.length - 1); i++){
    let result1 = 10
    let result2 = 20
    document.getElementById("resultCom").innerHTML = ("R$ " + result1.toFixed(2));
    document.getElementById("resultSem").innerHTML = ("R$ " + result2.toFixed(2));
  // }
}

// DIFICULDADES QUE TIVE... O QUE NÃO CONSEGUI FAZER
// Nunca tinha trabalhado em tabelas em HTML então não consegui uma forma de indexar as linhas
// Por algum motivo não consigo trazer o atributo "value" dos campos de entrada


// FALTOU CODIFICAR
// * Buscar lista de DDDs em json
// * Validar se os campos de entrada foram preenchidos
// * Validar se os DDDs de Origem e Destino não são iguais
// * Validar se os minutos digitados ultrapassam o plano escolhido


