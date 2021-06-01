"use strict";
const returnTime = (time) => (time > 10 ? time : `0${time}`);
const createAndAddSpan = (classname) => {
    const span = document.createElement("span");
    span.classList.add(classname);
    span.style.backgroundColor = "black";
    span.style.color = "darkgreen";
    span.style.padding = "8px 14px";
    span.style.fontSize = "38px";
    span.style.width = "162px";
    span.textContent = "0:00.000";
    document.body.appendChild(span);
};
const START_KEY = "ArrowRight";
const STOP_KEY = "x";
const RESTART_KEY = " ";
const FRUIT_LIMIT = 50;
const SCORE_EL_CLASSNAME = ".HIonyd";
let intervalId;
let minute = 0;
let second = 0;
let millisecond = 0;
createAndAddSpan("timer");
const displayTime = (minute, second, millisecond) => {
    const timerEl = document.querySelector(".timer");
    if (!timerEl) {
        return alert('Something with timer went wrong!');
    }
    timerEl.textContent = `${minute}:${returnTime(second)}.${returnTime(millisecond)}`;
};
const timer = () => {
    if (checkLimit(FRUIT_LIMIT, SCORE_EL_CLASSNAME)) {
        stopCounting();
    }
    millisecond += 10;
    if (millisecond + 10 === 1000) {
        millisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    displayTime(minute, second, millisecond);
};
const stopCounting = () => {
    clearInterval(intervalId);
};
const startCounting = () => {
    intervalId = setInterval(timer, 10);
};
const restartTimer = () => {
    minute = 0;
    second = 0;
    millisecond = 0;
    stopCounting();
    displayTime(minute, second, millisecond);
};
const checkLimit = (limit, className) => {
    const scoreEl = document.querySelector(className);
    return Number(scoreEl?.textContent) === limit;
};
const handleClick = (e) => {
    if (e.key === RESTART_KEY)
        restartTimer();
    else if (e.key === STOP_KEY)
        stopCounting();
    else if (e.key === START_KEY && millisecond === 0)
        startCounting();
};
document.addEventListener("keydown", handleClick);
