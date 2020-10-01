let body = document.querySelector('body')
let input = document.querySelector('input')
let p = document.querySelector('p')
let stockValeur1;
let reponse;
let tabOp = ['+','-','*','/','=','Enter']


body.addEventListener('click',(e)=>{
    if(e.target.innerText == parseInt(e.target.innerText)){
        input.value += e.target.innerText
    }else if(e.target.innerText == 'C'){
        input.value = ''
    }else if(e.target.innerText == '+' || e.target.innerText == '-' || e.target.innerText == '*'|| e.target.innerText == '/' || e.target.innerText == '='){
        tabOp.forEach(element => {
            if(e.target.innerText.includes(element)){                
                if(element == "=" && !p.innerHTML.includes('=')){
                    if(p.innerText == stockValeur1+'+'){
                        reponse = parseInt(stockValeur1) + parseInt(input.value)
                    }else if(p.innerText == stockValeur1+'-'){
                        reponse = parseInt(stockValeur1) - parseInt(input.value)                        
                    }else if(p.innerText == stockValeur1+'*'){
                        reponse = parseInt(stockValeur1) * parseInt(input.value)
                    }else if(p.innerText == stockValeur1+'/'){
                        reponse = parseInt(stockValeur1) / parseInt(input.value)
                    }         
                    p.innerText += input.value + '=' 
                    input.value = reponse                    
                }
                else if(element != "="){
                    stockValeur1 = input.value
                    p.innerText = input.value + element
                    input.value = ''  
                }
            }
        });        
    }
})
let clavier = (e)=>{    
    let x = Number(e.key)
    if ( !isNaN(x)) {
    input.value += e.key   
    }else if(e.key == 'Backspace'){
        input.value = ''
    }else if(e.key == '+' || e.key == '-' || e.key == '*'|| e.key == '/' || e.key == '=' || e.key == 'Enter'){
        tabOp.forEach(element => {
            if(e.key.includes(element)){                
                if(element == "=" && !p.innerHTML.includes('=') || element == "Enter" && !p.innerHTML.includes('=')){
                    if(p.innerText == stockValeur1+'+'){
                        reponse = parseInt(stockValeur1) + parseInt(input.value)
                    }else if(p.innerText == stockValeur1+'-'){
                        reponse = parseInt(stockValeur1) - parseInt(input.value)                        
                    }else if(p.innerText == stockValeur1+'*'){
                        reponse = parseInt(stockValeur1) * parseInt(input.value)
                    }else if(p.innerText == stockValeur1+'/'){
                        reponse = parseInt(stockValeur1) / parseInt(input.value)
                    }         
                    p.innerText += input.value + '=' 
                    input.value = reponse                    
                }else if(element != "=" && element != 'Enter'){
                    stockValeur1 = input.value
                    p.innerText = input.value + element
                    input.value = ''    
                }
            }
        })
     }
}
body.addEventListener('keydown',clavier)
input.addEventListener('focus',()=>{
    body.removeEventListener('keydown',clavier)
    body.addEventListener('keydown',(e)=>{
        if(e.key == 'Backspace'){
            input.value = ''
            p.innerHTML = ''
        }else if(e.key == '+' || e.key == '-' || e.key == '*'|| e.key == '/' || e.key == '=' || e.key == 'Enter'){
            tabOp.forEach(element => {
                if(e.key.includes(element)){                
                    if(element == "=" && !p.innerHTML.includes('=') || element == "Enter" && !p.innerHTML.includes('=')){
                        if(p.innerText == stockValeur1+'+'){
                            reponse = parseInt(stockValeur1) + parseInt(input.value)
                        }else if(p.innerText == stockValeur1+'-'){
                            reponse = parseInt(stockValeur1) - parseInt(input.value)                        
                        }else if(p.innerText == stockValeur1+'*'){
                            reponse = parseInt(stockValeur1) * parseInt(input.value)
                        }else if(p.innerText == stockValeur1+'/'){
                            reponse = parseInt(stockValeur1) / parseInt(input.value)
                        }         
                        p.innerText += input.value + '=' 
                        input.value = reponse                    
                    }else if(element != "=" && element != 'Enter'){
                        stockValeur1 = input.value
                        p.innerText = input.value + element
                        input.value = ''    
                    }
                }
            })
        }
    })
})
