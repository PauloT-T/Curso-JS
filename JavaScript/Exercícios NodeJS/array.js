let n = [5, 8, 2, 9, 3]
n.sort()  // VAI ORDENAR EM ODEM CRESCENTE
n.push(1) // VAI ADICIONAR 1 ELEMENTO NA VARIAVEL


console.log(n) // vai mostrar os elementos dentro da variavel

console.log(`O vetor tem ${n.length} posições`) // vai mostrar quantos elementos tem dentro da variavel
console.log(`o primeiro valor do vetor é ${n[0]}`) // vai mostrar o valor solicitado
n.sort() // Vai ordenar em ordem crescente


console.log(n)
for(let pos = 0; pos < n.length;pos++){
    console.log(`A posição ${pos} tem o valor ${n[pos]}`) //Estrutura de repetição para mostrar todas as posições do vetor e todos os valores dentro dele
} 


console.log(n)
for(let pos in n){
    console.log(`A posição ${pos} tem o valor ${n[pos]}`)   //Estrutura de repetição simplificada que so funciona com arrays e objetos, para mostrar a posição e os valores dentro do vetor
}


let pos = n.indexOf(8) // Comando para encontrar o elemento 8 na sua respectiva posição

if(pos == - 1){
    console.log('O valor não foi encontrado') //Se não houver o valor solicitado dentro da variavel, o JS vai retornar -1 pois ele não encontrou o que lhe foi solicitado
}else{
    console.log(`O valor 8 está na posição ${pos} `)
}