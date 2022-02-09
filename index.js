var hr = 0;
var min = 0;
var sec = 0;
var milli = 0;
var timer = false;

function start() {
    timer = true;
    stopwatch();
}

function stop() {
    timer = false;
}

function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    milli = 0;
    document.getElementById("hr").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("milli").innerHTML = milli;

}

function stopwatch() {
    if (timer == true) {
        milli = milli + 1;
    }
    if (milli == 100) {
        sec = sec + 1;
        milli = 0;
    }
    if (sec == 60) {
        min = min + 1;
        sec = 0;
    }
    if (min == 60) {
        hr = hr + 1;
        min = 0;
        sec = 0;
    }
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var milliString = milli;

    if (hr < 10) {
        hrString = "0" + hrString;
    }
    if (min < 10) {
        minString = "0" + minString;
    }

    if (sec < 10) {
        secString = "0" + secString;
    }

    if (milli < 10) {
        milliString = "0" + milliString;
    }



    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("milli").innerHTML = milliString;
    setTimeout("stopwatch()", 10);


}