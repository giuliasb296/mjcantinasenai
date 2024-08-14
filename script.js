//variável para a div de antendimento antecipado
 var atmAntecipado = window.document.querySelector('div#atendimentoP')
 atmAntecipado.addEventListener('mouseenter', entrar1)

 //variável para a div de agendamento
var agendamento = window.document.querySelector('div#agendamentoP')
agendamento.addEventListener('mouseenter', entrar2)


//variável para a div aproveitamento
var aproveitamento = window.document.querySelector('div#aproveitamento')
aproveitamento.addEventListener('mouseenter', entrar3)


//funções para quando passar o mouse em cima dos containers.
function entrar1(){
     atmAntecipado.innerText = 'Chega de filas grandes na hora de fazer seu pedido! Com o aplicativo da Cantina, você evitará esse transtorno!'
     atmAntecipado.style.textAlign = 'center'
 }

 function entrar2(){
     agendamento.innerText = 'Essa funcionalidade ajudará a equipe da cozinha a saber quais pedidos e em quais horários devem estar prontos, dessa forma, agilizando as entregas e evitando frustrações dos clientes.'
     agendamento.style.textAlign = 'center'
 }

 function entrar3 (){
     aproveitamento.innerText = 'Aumentando a eficiência dos pedidos com nosso app, você não perderá mais desnecessariamente, seu tempo, nos intervalos!'
     aproveitamento.style.textAlign = 'center'
 }

