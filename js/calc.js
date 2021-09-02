const isNum = false;
const pRes = document.querySelector('p');
var fo = document.querySelector('#fomula');

function addNum(n) {
    // 숫자 입력시 화면 출력
    if(fo.value == '' && n == 0) return;
    fo.value += n;
    isNum = true;
}

function addOper(oper) {
    // 연산자 입력시 계산
    if(!isNum) return;
    fo.value += oper;
    isNum = false;
}

function clac() {
    pRes.innerText(eval(fo.value));
}