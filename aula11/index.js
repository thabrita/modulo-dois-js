function adicionar() {
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    document.getElementById('lista').innerHTML += `<p>Nome: ${nome} - Idade: ${idade}</p>`
}

