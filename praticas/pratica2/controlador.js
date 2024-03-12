const readline = require('readline-sync');

 const Contatos = require ('./modelo');

 const contatos = [];

   function adicionarContatos (nome, telefone, email){
   const novoContato = new Contatos (nome, email, telefone)
   contatos.push (novoContato)
      

   };


function listarContatos (){
    return contatos

}  
  function buscarContatos (nome){
    return contatos.find (contat => contato.nome === nome)

  }
    function atualizarContatos (nome, email, telefone) {
       const contato = buscarContatos (nome);
       if (contato) {
        contato.email = email
        contato.telefone = telefone
       }
        
        
    }
function removerContato (nome){
    const index = contatos.findIndex(contato => contato.nome === nome)
    if (index !== -1) {
      contatos.splice (index, 1)
      }

}

module.exports = {
    listarContatos,
    buscarContatos,
    atualizarContatos,
    adicionarContatos,
    removerContato,
};




