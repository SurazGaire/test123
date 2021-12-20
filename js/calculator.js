class Calculator{
 constructor(previousOperand , currentOperand){
     this.previousOperand = previousOperand
     this.currentOperand = currentOperand
     this.clear();
 }

 clear(){
     this.previousOperand = ''
     this.currentOperand = ''
     this.operation = undefined

 }

 delete(){
     this.currentOperand = this.currentOperand.toString().slice(0,-1);

 }

 append_number(number){
    this.currentOperand = this.currentOperand.toString() + number.toString();
 }

 chooseOperation(operation){
    //  console.log(operation);
     if(this.currentOperand === '') return
     if(this.previousOperand !== ''){
         this.compute()
     }
     this.operation = operation;
     this.previousOperand = this.currentOperand;
     this.currentOperand = ''
 }

 compute(){
     let computation;
     const prev = parseInt(this.previousOperand)
     const current = parseInt(this.currentOperand)
     
     if(isNaN(prev) || isNaN(current)) return
     switch(this.operation){
         case '+':
             computation = prev + current
             break;
        case '-':
            computation = prev - current
            break;
        case '*':
            computation = prev * current
            break;
        case '÷':
            computation = prev / current
            break;
        default:
            return;
            
     }
     this.currentOperand = computation
     this.operation = undefined
     this.previousOperand = ''

 }

 updateDisplay(){
     currentOperand.innerText = this.currentOperand; 
     if(this.operation != null){
         previousOperand.innerText = `${this.previousOperand} ${this.operation}`
     }

 }

}




const dataNumbers = document.querySelectorAll('[data-number]');


const operationButtons = document.querySelectorAll('[data-operator');

const equalsButton = document.querySelector('[data-equals');

const clearButton = document.querySelector('[data-clear]');

const deleteButton = document.querySelector('[data-delete]');

const previousOperand = document.querySelector('[previous-operand]');

const currentOperand = document.querySelector('[current-operand]');

const calculator = new Calculator(previousOperand , currentOperand);

dataNumbers.forEach(button => {
    button.addEventListener('click', ()=> {
        calculator.append_number(button.innerText);
        calculator.updateDisplay();
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

clearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})

equalsButton.addEventListener('click', button =>{
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click', button =>{
    calculator.delete();
    calculator.updateDisplay();
})