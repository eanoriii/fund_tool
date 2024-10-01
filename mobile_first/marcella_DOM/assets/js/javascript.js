//aparece assim q entra na pagina
Window.alert(`bem vindo ao meu site!`)

//da opcoes de ok e cancelar
Window.confirm(`quer receber informacoes sobre noso site?`)


window.console(`informaçao do usuario recebida,sucesso!`)
//document.quaryselector
Document.getElementeById(`add-item-btn`) addEventListener(`click`, function() {
    var newItem = document.createElent(`li`);
    newItem.textContent = 'afro samurai';
    document.getElementById('item-list').appendChild(newItem);
})