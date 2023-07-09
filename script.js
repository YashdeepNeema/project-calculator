const mainContainer = document.querySelector('#main-container');
mainContainer.classList.add('center-component')

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
acBtn.innerHTML = '<h1>AC</h1>';
bigBtn.appendChild(acBtn)

const delBtn = document.createElement('button');
delBtn.setAttribute('id', 'delBtn');
delBtn.classList.add('classBigBtn');
delBtn.innerHTML = "<h1>DEL</h1>"
bigBtn.appendChild(delBtn)


calc.appendChild(bigBtn)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const smallBtnArr = [[7, 8, 9, '&#247;'], [4, 5, 6, '&#215;'], [1, 2, 3, '-'], [ '.', 0, '=', '+']];
const smallBtn = document.createElement('div');
smallBtn.setAttribute('id', 'smallBtn');

for(let i = 0; i < smallBtnArr.length; ++i){
    const line = document.createElement('div');
    line.setAttribute('id', `sbLine${i+1}`);
    line.classList.add('sbLines')
    for (let j = 0; j < smallBtnArr[i].length; ++j){
        const sBtn = document.createElement('button');
        sBtn.setAttribute('id', smallBtnArr[i][j]);
        sBtn.classList.add('smallButtons')
        sBtn.innerHTML = `<h1>${smallBtnArr[i][j]}</h1>`;
        line.appendChild(sBtn);
    }
    smallBtn.appendChild(line)
}

calc.appendChild(smallBtn)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

mainContainer.appendChild(calc);
//================================================================================================

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2
}

function product(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if(num2 != 0) return num1/num2;
    return 'ERORR';
}
//================================================================================================

acBtn.addEventListener('click', ()=>{
    screen.innerHTML = ''
})

for(let i = 0; i < smallBtnArr.length; ++i){
    for(let j = 0; j < smallBtnArr[i].length; ++j){
        if (smallBtnArr[i][j] != "="){
            const pressBtn = document.getElementById(`${smallBtnArr[i][j]}`)
            pressBtn.addEventListener('click', () => {
                if(smallBtnArr[i][j] == '+' || smallBtnArr[i][j] == '-' || smallBtnArr[i][j] == '&#215;' || smallBtnArr[i][j] == '&#247;'){
                    screen.innerHTML += " "+smallBtnArr[i][j]+" "
                }
                else{
                    screen.innerHTML += smallBtnArr[i][j]
                }
                
            })
        }
        else if(smallBtnArr[i][j] == '='){
            const pressBtn = document.getElementById(`${smallBtnArr[i][j]}`)
            pressBtn.addEventListener('click', () => {
                const expressionStr = screen.innerHTML;
                const expressionArr = expressionStr.split(" ")

                alert(expressionArr.length)
            })
        }
    }
}