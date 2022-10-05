let nome = 'Thaís'

fetch('https://cep.awesomeapi.com.br/11256130').then(resposta => resposta.json()).then(dados => console.log(dados.address_name))

function qualquerCoisa() {
    return 10
}

console.log(qualquerCoisa())
console.log(nome)

const curso = 'PretaLab'

document.getElementById('aula').innerHTML = 'trabalhando com DOM no js'

const novaDiv = document.createElement('div')

novaDiv.innerHTML = 'div criada com o DOM'

document.getElementById('aula').appendChild(novaDiv)