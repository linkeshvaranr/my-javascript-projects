let horDoc = document.getElementById('hour-count')
let minDoc = document.getElementById('minute-count')
let secDoc = document.getElementById('second-count')
let startButton = document.getElementById('start-btn')
let pauseButton = document.getElementById('pause-btn')
startButton.addEventListener('click',startTimer)
pauseButton.addEventListener('click',pause)

var timer
var sec =0
var min =0
var hor =0

function pause(){
    clearInterval(timer)
    
    
    
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


