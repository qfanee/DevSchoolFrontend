// fisier js in care sa punem functii
// - returneaza rezolutia ecranului
// - returneaza data curenta
// - determina pozitia geografica (lat+long)


//tema: ceas centrat horizontal+vertical     sa fie in timp real, cu start/stop       start => merge ceas, stop = stop,    sa mearga si enter si click la start/stop

function getResolution() {
    const x = `${screen.width}x${screen.height}`;

    return x;
}

function getCurrentDate() {
    const utc = new Date().toString();

    return utc;
}

function getGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude.toFixed(2);
        const long = position.coords.longitude.toFixed(2);

        document.getElementById('divGeolocation').innerHTML = `Your coordinates are: latitude=${lat},    longitude=${long}`;
    });
}

function onClickButtonRes() {
    const resolution = getResolution();

    document.getElementById('divResolution').innerHTML = `The page resolution is ${resolution}`;
}


function onClickButtonTime() {
    const currDate = getCurrentDate();

    document.getElementById("divTime").innerHTML = `The current date is ${currDate}`;
}


(function () {
    getGeolocation();
})();