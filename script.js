

    var inputs = [];
    var total = 0;
    var operation = "";
    var memory = 0;
    var currentInput;

 document.getElementById('subtract').addEventListener('click',subtract);
 document.getElementById('add').addEventListener('click',add);
 document.getElementById('divide').addEventListener('click',divide);
 document.getElementById('multiply').addEventListener('click',multiply);
 document.getElementById('equal').addEventListener('click',equal);
 document.getElementById('clearAll').addEventListener('click',clearAll);
 document.getElementById('ce').addEventListener('click',CE);
 document.getElementById('changeSign').addEventListener('click',changeSign);
 
 document.getElementById('number1').addEventListener('click',getInput);
 document.getElementById('number2').addEventListener('click',getInput);
 document.getElementById('number3').addEventListener('click',getInput);
 document.getElementById('number4').addEventListener('click',getInput);
 document.getElementById('number5').addEventListener('click',getInput);
 document.getElementById('number6').addEventListener('click',getInput);
 document.getElementById('number7').addEventListener('click',getInput);
 document.getElementById('number8').addEventListener('click',getInput);
 document.getElementById('number9').addEventListener('click',getInput);
 document.getElementById('number0').addEventListener('click',getInput);
 document.getElementById('decimalPoint').addEventListener('click',getInput);

 function getInput(){
    if(this.value ==='.'){
        if(!inputs.includes('.')){
            inputs.push(this.value);
        }
    }   else{
        inputs.push(this.value);
        currentInput = +(inputs.join(''));
        updateDisplay(currentInput);
    }
}

function add(){
    if(inputs.length !==0){
        calculate();
    }
    operation = "+";
}

function subtract(){
   if(inputs.length !== 0){
       calculate();
   }
   operation = "-";
}

function multiply(){
    if(inputs.length !==0){
        calculate();
    }
  operation ="*";
}

function divide(){
     if(inputs.length !==0)
     {
         calculate();
     }
    operation ="/";
}

function changeSign(){
   if(+(inputs.join('')) !=0){
       inputs[0] = -inputs[0];
       current_input = +(inputs.join(''));
       updateDisplay(currentInput);
   }else{
       total = -total;
       calculate();
   }
}

function equal(){
    calculate();
    updateDisplay(total);
    operation ="=";
    inputs = [];
}

function calculate(){
    currentInput = +(inputs.join(''));
    if(operation ===''){
        if(inputs.length == 0 && total ==0){
            memory = 0;
        }else if(inputs.length == 0){
            memory =total;
        }else{
            total = +(inputs.join(''));
        }
    }else if(operation =="+"){
        total = +(memory + currentInput).toFixed(12);
    }else if(operation == "-"){
        total = +(memory - currentInput).toFixed(12);
    }else if(operation == "*"){
        total = +(memory * currentInput).toFixed(12);
    }else if(operation =="/"){
        if(currentInput == 0){
            clearAll();
            total = "cannot divide by 0";
        }else{
        total = +(memory /currentInput).toFixed(12);
    }
}
updateDisplay(total);
memory = total; // update memory for next operation

// reset raw inputs and currentInput for next operations:
inputs = [];
current_input = 0;
}


function clearAll() {
    inputs = [];
    total = 0;
    operation = "";
    memory = 0;
    current_input = 0;
    updateDisplay(total);
}

function CE() {
    inputs = [];
    updateDisplay("0");
}

// update display with input and output numbers
function updateDisplay(output) {
    if (typeof output === 'number' && output.toString().length > 12) {
        document.getElementById("display").value = output.toExponential(7);  //convert to exponential notation with 7 digit precision.
    } else {
        document.getElementById("display").value = output;
    }
}







