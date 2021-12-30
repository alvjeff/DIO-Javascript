/*Filtre e retorne todos os números pares de um array.*/

function filtrapares(arr){
    return arr.filter(callback)//lembrando que quando funcao é passada como argumento, nao se coloca os parenteses ()
}

function callback(item){
    return item % 2 === 0
}//obs: neste caso declaramos a funcao fora e sera chamada com argumento

const meuArray = [1, 0, 23, 55, 67, 30, 2, 4]

console.log(filtrapares(meuArray))