const readline = require('readline-sync');
const contato = require ('./modelo');

const contatos = [{nome: "jose", telefone: "9999-9999"}];

function listar() {
    contatos.forEach(contato =>
      console.log(contato.nome, '-', contato.telefone));
      readline.question ("Precione enter para continuar");
    }
  
    function Criar() {
      const nome = 
         readline.question('Informe o nome do contato:  ');
      const telefone = 
         readline.question('Informe o telefone do contato:  ');
      const novo = new contato (nome, telefone)
      contatos.push(novo);
      readline.question("Precione enter para continuar");   
    }
  
    function Buscar() {
      const nome = 
        readline.question ("Informe o nome de contato:  ")
      const busarContato =
        contatos.find (contato => contato.nome === nome );
         if (busarContato) {
          console.log (busarContato.nome, '-',
             busarContato.telefone);
         }  else {
          console.log ("Contato não localizado");
         }
         readline.question ("Precione ENTER para continuar");
    }
  
  
  
  function Atualizar() {
    const nome = 
      readline.question ("Informe o nome de contato:  ")
    const busarContato =
      contatos.find (contato => contato.nome === nome );
       if (busarContato) {
        const telefone =
          readline.question ("Informe o novo telefone de contato:  ")
          busarContato.telefone = telefone
       }  else {
        console.log ("Contato não localizado");
       }
       readline.question ("Precione ENTER para continuar");
  }
  
   function Remover () {
  
  const nome =
      readline.question ("Informe o nome de contato: ")
    const posicao = contatos.findIndex (contato => contato.nome === nome) ;
    if (posicao >= 0){
      contatos.splice (posicao, 1);
    } else {
      console.log ("Contato não localizado")
    }
    readline.question ("Pressione ENTER para continuar") ;
   }

   module.exports = {listar, Criar, Buscar, Atualizar, Remover }