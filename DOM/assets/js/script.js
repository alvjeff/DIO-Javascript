const button = document.getElementById('mode-selector')
const h1 = document.getElementById('page-title')
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]
const darkmodeClass = 'dark-mode'//sera guardado nesta variavel o texto dar-mode das classes

button.addEventListener('click', changeMode)

function changeMode(){
    changeClasses()
    changeText()
}

function changeClasses(){
    button.classList.toggle(darkmodeClass)//esse toogle cria a classe caso nao exista, se existe, substitui a que foi colocada anteriormente
    h1.classList.toggle(darkmodeClass)
    body.classList.toggle(darkmodeClass)
    footer.classList.toggle(darkmodeClass)
}

function changeText(){

    if(body.classList.contains(darkmodeClass)){//se no button exite darkmode, pra isso que serve o contains
        button.innerHTML = 'Light Mode'
        h1.innerHTML = 'Dark Mode ' + 'ON'
        return // encerra a funcao 
    }

    button.innerHTML = 'Dark Mode'
    h1.innerHTML = 'Light Mode ON'

}