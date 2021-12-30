//mesmo enunciado do metodo-mapcomthis

function mapSemthis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

const nums = [2, 4, 6, 8, 10]

console.log(mapSemthis(nums))

console.log(nums)// isto prova que o array nao foi modificado

//esta maneira é mais utilizada no dia a dia