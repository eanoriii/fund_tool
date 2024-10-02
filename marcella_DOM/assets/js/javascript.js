//aparece assim q entra na pagina
//Window.alert(`bem vindo ao meu site!`)

//da opcoes de ok e cancelar
//Window.confirm(`quer receber informacoes sobre noso site?`)


//window.console(`informaçao do usuario recebida,sucesso!`)
//document.quaryselector
// Document.getElementeById('add-item-btn') .addEventListener('click', function() {
//     var newItem = document.createElent('li');
//     newItem.textContent = 'afro samurai';
//     document.getElementById('dynamic-list').appendChild(newItem);
// })
//  document.getElementById('change-color-btn') .addEventListener('click', function() {
//     document.body.style.backgroundColor ='green';
//  });

// document.getElementById('change-color-btn').addEventListener('click', function () {
//    document.body.style.backgroundColor = 'red';
// });

document.getElementById('user-form').addEventListener('submit', function(e) {
   var name = document.getElementById('name').value;
   if(name === '') {
      e.preventDefault();
      document.getElementById('error-message').style.display  = 'block';
   }
});
//essa linha faz que se o usuario nao preencha  o campo de nome, apareça  uma mensagem de erro

