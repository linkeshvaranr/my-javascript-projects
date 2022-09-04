let horDoc = document.getElementById('hour-count')
let minDoc = document.getElementById('minute-count')
let secDoc = document.getElementById('second-count')
let emptyDoc = document.getElementById('empty')
let startButton = document.getElementById('start-btn')
let pauseButton = document.getElementById('pause-btn')
let clearButton = document.getElementById('clear-btn')
let lapButton = document.getElementById('lap-btn')
startButton.addEventListener('click',startTimer)
pauseButton.addEventListener('click',pause)
clearButton.addEventListener('click',clear)
lapButton.addEventListener('click',lapfunc)

var timer
var sec =0
var min =0
var hor =0

function pause(){
    clearInterval(timer)   
}
function clear(){
    horDoc.innerHTML="00"
    minDoc.innerHTML="00"
    secDoc.innerHTML="00"
    pause()
    emptyDoc.innerHTML = ""
    sec =0
    min =0
    hor =0


}


function startTimer(){  
    
startButton.innerHTML="pause"
timer = setInterval(() => {
        

        horDoc.innerHTML=hor<10?"0"+hor:hor
        minDoc.innerHTML=min<10?"0"+min:min
        secDoc.innerHTML=sec<10?"0"+sec:sec
        
        console.log(hor+" : "+min+" : "+sec)
        sec++
        if(sec==60){
            sec=0
            min++

        }
        if(min==60){
            sec=0
            min=0
            hor++

        }
        
    }, 1000);


}

function lapfunc(){
    emptyDoc.innerHTML += `<div> ${ (hor<10 ?"0"+hor : hor) + " : " + (min<10?"0"+min:min) + " : " + (sec<10?"0"+sec:sec)} </div>`
    
}

