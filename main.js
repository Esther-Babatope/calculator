
let calculation = '';

function applyNum(num) {
    calculation+=num;
    updateDisplay();
    
}
function applyOperator(operator) {
    calculation+=operator;
    updateDisplay();
    
}
function calculate() {
    const result= eval(calculation);
    calculation=result;
    updateDisplay();
    
}

function clearResult() {
    calculation='';
    updateDisplay();
   
}
function updateDisplay() {
    document.getElementById('display').value= calculation;
    
}
