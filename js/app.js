window.onload = ()=>{
    h= 0; m= 0; s= 0; mls= 0; startTime= 0;
    time = document.getElementById('time');
    bStart = document.getElementById('boton-start');
    bStop = document.getElementById('boton-stop');
    bReset = document.getElementById('boton-reset');
   
    button(); 
};
function button(){
    bStart.addEventListener("click", start);
    bStop.addEventListener("click", stop);
    bReset.addEventListener("click", reset);
}
function loop(){
    let hTime, mTime, sTime, mlsTime;
    mls++;

    if(mls > 99){
       s++;
       mls= 0; 
    }
    if(s > 59){
        m++;
        s= 0;
    }
    if(m > 59){
        h++; 
    }

    mlsTime = ('0' + mls).slice(-2);
    sTime = ('0' + s).slice(-2);
    mTime = ('0' + m).slice(-2);
    hTime = ('0' + h).slice(-2);

    time.innerHTML = `${hTime}:${mTime}:${sTime}:${mlsTime}`; 
}
function start(){
    loop();
    startTime = setInterval(loop, 10);
    bStart.removeEventListener('click', start);
}
function stop(){
    clearInterval(startTime);
    bStart.addEventListener('click', start);
}
function reset(){
    clearInterval(startTime);
    time.innerHTML = "00:00:00:00";
    h= 0; m= 0; s= 0; mls= 0;
    bStart.addEventListener('click', start);
}