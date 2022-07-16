const secondPointer = document.querySelector(".sec-pointer");
const minutePointer = document.querySelector(".min-pointer");
const hourPointer = document.querySelector(".hour-pointer");




function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondPointer.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = (minutes / 60) * 360 + 90;
    minutePointer.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegress = (hours / 12) * 360 + 90;
    hourPointer.style.transform = `rotate(${hoursDegress}deg)`;
}

function updateDigitalClock() {
    const now = new Date();

    const seconds = (now.getSeconds() < 10 ? "0" : "") + now.getSeconds();
    const minutes = (now.getMinutes() < 10 ? "0" : "") + now.getMinutes();
    const hours = (now.getHours() < 10 ? "0" : "") + now.getHours();

    const day = now.getDay();
    const month = now.getMonth();
    const dayNumber = now.getDate();
    const year = now.getFullYear();
    const period = hours > 12 ? "PM" : "AM";

    const months = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
    ];

    const weekdays = [
        "Domingo",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
    ];

    const ids = [
        "dayName",
        "dayNumber",
        "months",
        "year",
        "hour",
        "minutes",
        "seconds",
        "period",
    ];

    const values = [
        weekdays[day],
        dayNumber,
        months[month],
        year,
        hours,
        minutes,
        seconds,
        period,
    ];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }
}

function playClock() {
    setInterval(setDate, 1000);
    window.setInterval(updateDigitalClock);
}