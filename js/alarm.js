const alarmHour = document.querySelector('.alarmHour');
const alarmMin = document.querySelector('.alarmMin');
const alarmRing = document.querySelector('.alarm-ringing');
var ringing;
var flag = false;

function alarmRegister() {
    var hour = alarmHour.value;
    var min = alarmMin.value;
    var alarmArr = {hour, min};

    if((isNaN(hour) || isNaN(min)) || (hour < 0 || hour > 23 || min < 0 || hour > 59)) {
        alert('알맞은 시간을 입력해주세요.');
        alarmHour.value = '';
        alarmMin.value = '';
        return;
    }

    localStorage.removeItem('alarm');
    localStorage.setItem('alarm', JSON.stringify(alarmArr));
    const message = `${hour}시 ${min}분 알람이 저장되었습니다.`;
    alert(message);

    flag = false;
    alarmHour.value = '';
    alarmMin.value = '';
}

function alarmOper() {
    const nowTime = new Date();
    const saveTime = JSON.parse(localStorage.getItem("alarm"));
    const saveHour = saveTime.hour;       // 시간
    const saveMin = saveTime.min;        // 분
    
    if(nowTime.getHours() == parseInt(saveHour)
    && nowTime.getMinutes() == parseInt(saveMin) && !flag) {
        flag = true;
        alarmRing.innerHTML += `
            <img class = "ringing" src="/alarm2.png" >
        `;
        ringing = document.querySelector('.ringing');
        setTimeout(removeAlarmIcon, 4000);
    }
}

function removeAlarmIcon() {
    alarmRing.removeChild(ringing);
}

function init() {
    alarmOper();
    setInterval(alarmOper, 1000);
}

init();