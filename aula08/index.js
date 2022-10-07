function bemVinda () {

    if(!document.querySelector('#bemvinda')) {
    const mensagem = document.createElement('h1')
    mensagem.innerHTML = 'Bem vinda, Thais Maria'
    mensagem.id = 'bemvinda'
    document.querySelector('#mensagem').appendChild(mensagem)
    }
}

function mudaCor () {
    let corFonte = document.querySelector('#bemvinda').style.color
    console.log(corFonte)
    if (corFonte == '' || corFonte == '(rgb(0, 0, 0)' ) {
        document.querySelector('#bemvinda').style.color = '#A020F0'
    } else {
        document.querySelector('#bemvinda').style.color = '#000000'
    }
    
}
