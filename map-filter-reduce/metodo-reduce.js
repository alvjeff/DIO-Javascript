/*
1-Some todos os números de um array
2-Crie uma função que recebe uma lista de preços e um 
    número representando o saldo disponível. Calcule qual 
    será o saldo final após subtrair todos os preços da lista
    enviada.*/

//exercicio 1

function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({prev})
        console.log({current})
        return prev + current
    }, 0)//esse 0 foi o parametro colocado como opcional
}

const arr = [1, 2]

console.log(somaNumeros(arr))

//exercicio 2

const lista = [
    {
        name: 'sabao em po',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 20
    }
]

const saldoDisponivel = 100

function calculaSaldo( saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index + 1)
        console.log({prev})
        console.log({current})
        return prev - current.preco
    }, saldoDisponivel)//vai se iniciar com saldoDisponivel
}

console.log(calculaSaldo(saldoDisponivel, lista))

//esse prev tambem chamamos de acumulador