let mainStr;
mainStr = prompt('Введите номер карты');

vis = mainStr.slice(-4),
countNum = '';

for(let i = (mainStr.length)-4; i>0; i--){
    countNum += '*';
}

alert(countNum+vis);


