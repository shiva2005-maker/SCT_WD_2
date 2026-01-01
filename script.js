let timer_display = document.querySelector('.timer-display');

let start_btn = document.getElementById('start-btn');
let stop_btn = document.getElementById('stop-btn');
let reset_btn = document.getElementById('reset-btn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

start_btn.addEventListener('click',function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10)
});

stop_btn.addEventListener('click',function(){
    clearInterval(timerId);
});

reset_btn.addEventListener('click',function(){
    clearInterval(timerId);
    timer_display.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 0;
});


function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;

        if(secs == 60){
            secs = 0;
            mins++
        }
    }

    let msec_string = msec < 10 ? `0${msec}` : msec;
    let secs_string = secs < 10 ? `0${secs}` : secs;
    let mins_string = mins < 10 ? `0${mins}` : mins;
    
    timer_display.innerHTML = `${mins_string} : ${secs_string} : ${msec_string}`; 
}