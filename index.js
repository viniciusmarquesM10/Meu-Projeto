const readline = require('readline-sync');
const controlador = require ('./controlador');

const contatos = [{nome: "jose", telefone: "9999-9999"}];

function menu() {
  console.log('1. Listar');
  console.log('2. Criar');
  console.log('3. Buscar');
  console.log('4. Atualizar');
  console.log('5. Remover');
  console.log('6. Sair');
}



function escolherOpcao(opcao) {
  switch(opcao) {
    case '1':controlador.listar   (); break;
    case '2':controlador.Criar (); break;
    case '3':controlador.Buscar (); break;
    case '4':controlador.Atualizar (); break;
    case '5':controlador.Remover (); break;
    case '6': process.exit(0);
    default : console.log('Opção inválida');
  }
}

function main() {
  while(true) {
    menu();
    const opcao = readline.question("Entre com uma opção: ");
    escolherOpcao(opcao);
  }
}

main ();
function list(){
    const contatos = [];
    contatos.forEach ()
 }