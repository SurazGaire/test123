let buffer = "0";
let runningTotal = 0;
let previousOperator;

let screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(parseInt(value))){
        handleSymbol(value);
    }
    else{
        handleNum(value);
    }
    rerender();
}

function handleNum(value){
    console.log(value);
    if(buffer === "0"){
        buffer = value;
    }else
    {
        buffer += value;
    }
}

function handleMath(value){
if(buffer === "0"){
    return;
}
const intBuffer = parseInt(buffer);
}

function flushOperation(intBuffer){
    if(previousOperator === "+"){
        runningTotal += intBuffer;
    }
    else if(previousOperator === "-"){
        runningTotal -= intBuffer;
    }
    else if(previousOperator === "×"){
        runningTotal *= intBuffer;
    }
    else{
        runningTotal  /= intBuffer;
    }
}

function handleSymbol(value){
    switch(value){
        case "C" :
            buffer = "0";
            runningTotal = 0;
            break;
        case "=" :
            if(previousOperator === null){
                return;
            }
            flushOperation(parseInt(buffer));

            buffer = +runningTotal;

            buffer = "0";
            break;
        case "←":
            if(buffer.length === 1){
                buffer = 0;
            }else{
                buffer = buffer.substr(0,buffer.length-1);
            }
            break;
        case "+":
        case "-":
        case "×":
        case "/":
            handleMath(value);
        break;


    }
}


function rerender(){
    screen.innerText = buffer;
}

function start(){
    document.querySelector('.calc-buttons').addEventListener('click',function(event){
        buttonClick(event.target.innerText);
    });
}
start();