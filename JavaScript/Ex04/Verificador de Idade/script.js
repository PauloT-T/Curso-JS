function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade >= 0 && idade <11){
                //criança
                img.setAttribute('src', 'criancahomem.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','homemjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','homemadulto.png')
            }else {
                //idoso
                img.setAttribute('src','idoso.png')
            }
        }else if(fsex [1].checked){
            gen = 'Mulher'
            if(idade >= 0 && idade <11){
                //criança
                img.setAttribute('src','criancamulher.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','mulherjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','mulheradulta.png')
            }else {
                //idoso
                img.setAttribute('src','idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos`
        res.appendChild(img)
    }
}