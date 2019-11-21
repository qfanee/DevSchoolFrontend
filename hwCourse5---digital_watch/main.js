var timeoutOrNot;

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    timeoutOrNot = setTimeout(showTime, 1000);
}

showTime();

function onStartStopClick(){

    const spanText = document.getElementById("buttonText").innerText;

    if (spanText === "STOP"){
        document.getElementById("buttonText").innerText = "START";
        clearTimeout(timeoutOrNot);
    } else {
        document.getElementById("buttonText").innerText = "STOP";
        showTime();
    }
}

document.body.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        onStartStopClick()
    }
});
