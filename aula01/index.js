
function voto (idade) {
    if (idade >= 18 && idade < 70) {
        console.log('Voce pode votar e o voto é obrigatorio')
    } else if (idade >= 16 && idade < 18 || idade >= 70) {
        console.log('Voce pode votar, mas nao e obrigatorio')
    } else {
        console.log('Voce nao pode votar')
    }
}

voto(15)
voto(18)
voto(35)
voto(80)


function somar (num1, num2) {
    const resultado = num1 + num2
    console.log(resultado)
}

function bemVinda (nome, idade) {
    console.log('Bem-vinda, ' + nome + '. Parabens pelos ' + idade + ' anos!')
}

bemVinda('Thais', '27')