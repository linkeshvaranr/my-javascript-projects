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

document.addEventListener("keypress",function(event){
    if(event.key == "s"){
        startTimer()

    }
    if(event.key == "p"){
        pause()

    }
    if(event.key == "l"){
        lapfunc()

    }
    if(event.key == "c"){
        clear()

    }
})



var timer
var sec =0
var min =0
var hor =0

function pause(){
    clearInterval(timer)
    startButton.disabled=false 
    pauseButton.disabled=true 
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
    lapCount=1


}


function startTimer(){  
startButton.disabled=true
pauseButton.disabled=false
    

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
let lapCount =1
function lapfunc(){
    emptyDoc.innerHTML += `<div style="text-align: center;font-size: 20px; font-family:cursive" > ${(lapCount++) +") "+ (hor<10 ?"0"+hor : hor) + " : " + (min<10?"0"+min:min) + "min : " + (sec<10?"0"+sec:sec)+"s"} </div> <hr>`
    
}

