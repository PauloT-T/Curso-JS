var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Está de manhã, bom dia ^^')
}else if(hora > 12 && hora <= 18){
    console.log('Esta de tarde, boa tarde ^^')
}else if(hora >= 20 && hora <= 23){
    console.log('Ja esta de noite, boa noite >w<')
}else if(hora > 23){
    console.log('Esta quase de madrugada')
}