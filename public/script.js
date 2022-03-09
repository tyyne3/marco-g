const daysEl = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minutesEL = document.getElementById('mins');
const secondEL = document.getElementById('seconds');


let year = new Date().getFullYear();

let birthday = '5 Sep '+year;

function countdown(){
    const newbirthday= new Date(birthday);
    const currentDate = new Date();
    const totalseconds = (newbirthday-currentDate)/1000;

    if(totalseconds <= 0){
        year = year + 1;
        birthday = '5 Sep '+year;
    }

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerText = days;
    hoursEL.innerText = hours;
    minutesEL.innerText = minutes;
    secondEL.innerText = seconds;

    console.log(days, hours, minutes, seconds);
}
countdown();
setInterval(countdown, 1000);

