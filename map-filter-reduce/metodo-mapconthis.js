/*Pratique a sintaxe de multiplicação de números, uma vez 
utilizando o parâmetro this de um objeto criado por você, e 
depois sem ele*/

const maca = {
    value: 2
}
const laranja = {
    value: 3
}

//com this
function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value
    }, thisArg)
}

const nums = [1, 2]

console.log('this -> maçã', mapComThis(nums, maca))

console.log('this -> laranja', mapComThis(nums, laranja))


//obs1: importante notar que o this foi necessario pq estava trabalhando com uma array de objetos.