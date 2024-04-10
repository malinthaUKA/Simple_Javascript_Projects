window.onload = function(){
    var seconds = 0;
    var tens = 0;
    var appendTens = document.getElementById("tens");
    var appendSecond = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-Stop");
    var buttonReset = document.getElementById("button-Reset");
    var Intervel;

    buttonStart.onclick = function(){

        clearInterval(Intervel);
        Intervel = setInterval(startTimer, 10); 
    }

    buttonStop.onclick = function(){
        clearInterval(Intervel);
    }


    buttonReset.onclick = function(){
        clearInterval(Intervel);

        seconds = 0;
        tens = 0;
        appendSecond.innerHTML = "0" + seconds;
        appendTens.innerHTML = "0" + tens;
    }

    function startTimer(){

        tens++;

        if (tens < 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;

            appendSecond.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSecond.innerHTML = seconds;
        }
    }

}

