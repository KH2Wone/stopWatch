const toggleId = document.getElementById('toggle'),
    resetB = document.getElementById('reset_btn');
const watch = document.getElementById('nums');

let hou = min = sec = 0;
let timeRecord;

//////////////////////////////////////////////////////////

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

let toggleSwitch = () => {
    if(toggleId.innerText === 'START') {
        startWatch();
    } else {
        // STOP
        stopWatch();
    }
}

let startWatch = () => {
    timeRecord = setInterval(moveClock, 1000);
    toggleId.innerText = 'STOP';
    watch.style.color = '#333';
}

let stopWatch = () => {
    clearInterval(timeRecord);
    toggleId.innerText = 'START';
    watch.style.color = '#EF0000';
}

let resetWatch = () => {
    // 이미 작동중인 스톱워치에서 reset 버튼 누를 시 START로 돌아오기 및 reset 기능 작동
    if(toggleId.innerText === 'STOP') stopWatch();
    watch.style.color = '#333';

    clearInterval(timeRecord);
    hou = min = sec = 0;
    watch.innerText = '00 : 00 : 00';
};


toggleId.addEventListener('click', toggleSwitch);
resetB.addEventListener('click', resetWatch);