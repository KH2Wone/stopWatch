const startB = document.getElementById('start_btn'),
    stopB = document.getElementById('stop_btn'),
    resetB = document.getElementById('reset_btn');
const watch = document.getElementById('nums');

let hou = min = sec = 0;
let timeRecord;

let moveClock = () => {
    if (sec !== 59) {
        // 
        sec++;
    } else {
        // 이제 분 추가
        min++;
        if (min === 60) {
            // 이제 시간 추가
            hou++;
            if (hou === 1) {
                alert(`hey, It's been 24 hours. are you alive?`);
                clearInterval(timeRecord);
            }
            min = 0;
        }
        sec = 0;
    }
    watch.innerText = `${hou < 10 ? "0"+hou : hou} : ${min < 10 ? "0"+min : min} : ${sec < 10 ? "0"+sec : sec}`;
}

let startWatch = () => {
    timeRecord = setInterval(moveClock, 1000);
}

let stopWatch = () => {
    clearInterval(timeRecord);
}

let resetWatch = () => {
    clearInterval(timeRecord);
    hou = min = sec = 0;
    watch.innerText = '00 : 00 : 00';
};

startB.addEventListener('click', startWatch);
stopB.addEventListener('click', stopWatch);
resetB.addEventListener('click', resetWatch);