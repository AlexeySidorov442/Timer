const deadline = "2022-01-27"; //Birthday Alex

//get remaining time between current date and birthday
function getRemainingTime(endtime) {
    
    const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60)) % 24),
        minutes = Math.floor((t / (1000 * 60)) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

//Transform date to two symbol format 
function zeroFormat(value) {
    if (value >= 0 && value < 10) {
        return `0${value}`;
    } else
        return value;
}

//Update clock every one second
function setClock(selector, endtime) {

    //Get element from DOM for update their value
    const timer = document.querySelector(selector),
        days = timer.querySelector(".days"),
        hours = timer.querySelector(".hours"),
        minutes = timer.querySelector(".minutes"),
        seconds = timer.querySelector(".seconds"),
        interval = setInterval(updateClock, 1000);

    //First update without delay one seconds
    updateClock();

    function updateClock() {
        const t = getRemainingTime(endtime);

        days.textContent = zeroFormat(t.days);
        hours.textContent = zeroFormat(t.hours);
        minutes.textContent = zeroFormat(t.minutes);
        seconds.textContent = zeroFormat(t.seconds);

        if (t <= 0) {
            clearInterval(interval);
        }
    }
}

//Init clock
setClock(".container", deadline);