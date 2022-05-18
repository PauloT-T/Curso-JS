function gerar(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Por favor insira um numero')
    } else{
        tab.innerHTML = ''
        let n = Number(num.value)
        let c = 1
        while (c <= 10){
            var item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}




/*function gerar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Por favor insira um valor!')
    } else{
        tab.innerHTML = ''
        var n = Number(num.value)
        var c = 1
        do{
            var item = document.createElement('option')
            item.innerHTML = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }while(c<=10)
    }
}
/*
function gerar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('[ERRO] Por favor insira um número!')
    } else{
        tab.innerHTML = ''
        var n = Number(num.value)
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.innerHTML = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)

            
        }
    }
}*/