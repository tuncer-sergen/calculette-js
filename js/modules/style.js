let body = document.querySelector('body')

let div = body.appendChild(document.createElement('div'))
body.prepend(div)
div.style.height = '700px'
div.style.width = '550px'
div.style.border = 'black 1px solid'
div.style.display = 'block'
div.style.margin = 'auto'
div.style.background = 'black'

let p = div.appendChild(document.createElement('p'))
p.style.color = 'white'
p.style.textAlign = 'right'
p.style.fontSize = '30px'

let input = div.appendChild(document.createElement('input'))
input.style.border = 'solid 5px black'
input.style.height = '70px'
input.style.width = '400px'
input.style.display = 'block'
input.style.margin = 'auto'
input.style.fontSize = '40px'
input.style.marginTop = '20px'
input.setAttribute('type','number')



let divButton = div.appendChild(document.createElement('div'))
let tabButton = [1,2,3,'+',4,5,6,'-',7,8,9,'*','C',0,'=','/']
tabButton.forEach(element => {
    let button = divButton.appendChild(document.createElement('button'))
    button.innerText = element
    button.style.padding = '35px'
    button.style.fontSize = '30px'
    if(button.innerText == '+' || button.innerText == '-' || button.innerText == '*' || button.innerText == '/' ){
        button.style.background = 'blue'
        button.style.border = 'none'
    }else if(button.innerText == 'C'){
        button.style.background = 'red'
        button.style.border = 'none'
    }else if(button.innerText == '='){
        button.style.background = 'green'
        button.style.border = 'none'
    }
});

divButton.style.display ='grid'
divButton.style.gridTemplateColumns = 'auto auto auto auto'
divButton.style.marginTop = '40px'