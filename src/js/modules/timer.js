const timer = (daysId, hoursId ,minutesId , secondsId, needDate) => {
    
    const daysEl = document.getElementById(daysId),
        hoursEl = document.getElementById(hoursId),
        minutesEl = document.getElementById(minutesId),
        secondsEl = document.getElementById(secondsId);
    
    const dateX = Date.parse(needDate);

    const zeroTime = (time) => {
        if (time < 10) return `0${time}`;
        return time;
    }
    
    function showTime() {
        const dateNow = new Date();
        const dateDif = (dateX - dateNow) / 1000;

        const days = Math.floor(dateDif / 60 / 60 / 24);
        const hours = Math.floor(dateDif / 60 / 60 % 24);
        const minutes = Math.floor(dateDif /60 % 60);
        const seconds = Math.floor(dateDif % 60);

        if (dateDif > 0) {
            daysEl.textContent = zeroTime(days);
            hoursEl.textContent = zeroTime(hours);
            minutesEl.textContent = zeroTime(minutes);
            secondsEl.textContent = zeroTime(seconds);
        } else {
            clearInterval(startTime);
        }
    }

    const startTime = setInterval(showTime, 1000);
    showTime();
}

export default timer;