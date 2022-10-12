// function escreverMensagem() {
//     const textoDigitado = document.getElementById('nome').value

//     const bemVinda = document.getElementById('bemvinda').innerHTML
//     console.log(bemVinda)
//     if (bemVinda.split(':')[1].length > 1) {
//         console.log(bemVinda.split(':'))
//         document.getElementById('bemvinda').innerHTML = `Bem vinda: ${textoDigitado}`
//     } else {
//         document.getElementById('bemvinda').innerHTML += textoDigitado
//     }
// }

function aparecerNomes() {
    const todosNomes = document.getElementById('nomes').value
    document.getElementById('nomePessoas').innerHTML += `<p>${todosNomes}</p>`
}