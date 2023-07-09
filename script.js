const mainContainer = document.querySelector('#main-container');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const calc = document.createElement('div');
calc.setAttribute('id', 'calc');

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const screen = document.createElement('div')
screen.setAttribute('id', 'screen');
calc.appendChild(screen);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const bigBtn = document.createElement('div');
bigBtn.setAttribute('id', 'bigBtn');

const acBtn = document.createElement('button');
acBtn.setAttribute('id', 'acBtn');
acBtn.classList.add('classBigBtn');
acBtn.innerHTML = 'AC';
bigBtn.appendChild(acBtn)

const delBtn = document.createElement('button');
delBtn.setAttribute('id', 'delBtn');
delBtn.classList.add('classBigBtn');
delBtn.innerHTML = "DEL"
bigBtn.appendChild(delBtn)


calc.appendChild(bigBtn)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const smallBtnArr = [[7, 8, 9, '&#247;'], [4, 5, 6, '&#215;'], [1, 2, 3, '-'], [ '.', 0, '=', '+']];
const smallBtn = document.createElement('div');
smallBtn.setAttribute('id', 'smallBtn');

for(let i = 0; i < smallBtnArr.length; ++i){
    const line = document.createElement('div');
    line.setAttribute('id', `sbLine${i+1}`);
    for (let j = 0; j < smallBtnArr[i].length; ++j){
        const sBtn = document.createElement('button');
        sBtn.setAttribute('id', smallBtnArr[i][j]);
        sBtn.innerHTML = smallBtnArr[i][j];
        line.appendChild(sBtn);
    }
    smallBtn.appendChild(line)
}

calc.appendChild(smallBtn)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

mainContainer.appendChild(calc);