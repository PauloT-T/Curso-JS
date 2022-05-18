function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas` 
    if ( hora >= 0 && hora < 12) {
        img.src='manha.png'
        document.body.style.background = '#68bae2'
        //BOM DIA!
    }else if( hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#b33e04'
    }else {
        //BOA NOITE!
        img.src = 'NOITE.png'
        document.body.style.background = '#4d3653'
    }

}
