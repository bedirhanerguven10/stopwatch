const pause = document.querySelector('#pause');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const display = document.querySelector('#timerDisplay');

let milisecond = 0 , second = 0 , minute = 0 , hour = 0 ;
let loop;

start.addEventListener('click' ,() => {
    clearInterval(loop);
    loop = setInterval(counter,10);
})

pause.addEventListener('click', () =>{
    clearInterval(loop);
})

reset.addEventListener('click', ()=>{
    clearInterval(loop);
    millisecond = 0, second = 0, minute = 0, hour = 0;
    timerDisplay.innerHTML = '00 : 00 : 00 : 000';
})


function counter () {
    milisecond += 10 ;
    if (milisecond === 1000) {
        milisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }


display.innerHTML = `${hour} : ${minute} : ${second} : ${milisecond}`
}