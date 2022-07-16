const secondPointer = document.querySelector(".sec-pointer");
const minutePointer = document.querySelector(".min-pointer");
const hourPointer = document.querySelector(".hour-pointer");

function setDate() {
    const now = new Date();
    console.log(now);
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondPointer.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    console.log(minutes);
    minutePointer.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegress = (hours / 12) * 360 + 90;
    hourPointer.style.transform = `rotate(${hoursDegress}deg)`;
}

setInterval(setDate, 1000);