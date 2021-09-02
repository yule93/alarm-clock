const dateContainer = document.querySelector(".js-date");
const dateText = dateContainer.querySelector(".YMD");
const dayText = dateContainer.querySelector(".day");

const dayList = ['일', '월', '화', '수', '목', '금', '토'];

function getDate() {
    const date = new Date();  
    const year = date.getFullYear(); // 년도
    const month = date.getMonth() + 1;  // 월
    const th = date.getDate();  // 날짜
    const day = date.getDay();  // 요일
    dateText.innerText = `${year}-${month < 10 ? `0${month}` : month}-${th < 10 ? `0${th}` : th} ${dayList[day]}요일`;
}

getDate();
