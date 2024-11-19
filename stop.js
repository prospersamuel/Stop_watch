let [seconds, minutes, hours, milleSeconds] = [0,0,0,0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch(){
    milleSeconds++;
    if(milleSeconds == 60){
        milleSeconds = 0;
        seconds++;
    }
    if(seconds == 60){
        seconds = 0;
        minutes++
        if (minutes == 60){
            minutes = 0;
            hours++
        }
    } 

let h = hours < 10 ? "0" + hours : hours;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds;
let ms = milleSeconds < 10 ? "0" + milleSeconds : milleSeconds;


    displayTime.innerHTML = h + " : " + m + " : "+ s + " : " + ms;
}

function watchStart(){
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 18);
}

function watchStop(){
    clearInterval(timer)
}

function watchReset(){
    [seconds, minutes, hours, milleSeconds] = [0,0,0,0];
    displayTime.innerHTML = "00 : 00 : 00 : 00";
    clearInterval(timer)


}