const tmp = document.querySelector('#tmp')
let sec = 0
let min = 0
let hor = 0
let interval

function digito(digit){
    if(digit < 10) {
        return('0'+ digit)
    }else{
        return(digit)
    }
}

function começa(){
    condar()
    interval = setInterval(condar, 1000)
}

function pausa(){
    clearInterval(interval)
} 

function parar(){
    clearInterval(interval)
    sec = 0
    min = 0
    tmp.innerHTML = "00:00:00"
}


function condar(){
    sec++ 
    if(sec === 60){ 
        min++ 
        sec = 0
        if(min === 60){
            min = 0
            hor++
        }
    }
    tmp.innerHTML = digito(hor) + ':' + digito(min) + ':' + digito(sec)
}