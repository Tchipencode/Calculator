let firstNumber=0;
let lastNumber=0;
let currentOperator=null;
let currentOperation=null;
let result=0;
let display=document.querySelector(".userInput");
let numbers=document.querySelectorAll(".keypad");
let operators=document.querySelectorAll(".operator");
let equalButton=document.querySelector(".equal");
let clearButton=document.querySelector(".clear");
let deleteButton=document.querySelector(".delete");
numbers.forEach(function(btn){
   btn.addEventListener("click", function(e){
      if(!currentOperator){
         firstNumber+=this.value;
      }
      else{
         lastNumber+=this.value;
      } 
      
      display.value+=this.value;
   });
});
//console.log(typeof Number(numbers.this.value));
operators.forEach(function(op){
   op.addEventListener("click", function(){
      if(this.value==="+"){
         currentOperator=this.value;
         display.value+=this.value;  
      } 
      else if(this.value==="-"){
         currentOperator=this.value;
         display.value+=this.value;
      }
      else if(this.value==="x"){
         currentOperator=this.value;
         display.value+=this.value;
      }
      else if(this.value==="/"){
         currentOperator=this.value;
         display.value+=this.value;
      }
      if(currentOperator && lastNumber==="0"){
         currentOperator=""
      }
   });
});

equalButton.addEventListener("click", function(){
   if(currentOperator){
      currentOperation=operate(firstNumber, currentOperator, lastNumber);
      clearScreen();
      display.value=currentOperation;
      
      //firstNumber=display.value;
      //lastNumber="";
   }
})

function clearScreen(){
   firstNumber="";
   lastNumber="";
   currentOperator=null;
   display.value="";
   display.value="";
}

clearButton.addEventListener("click", clearScreen);

deleteButton.addEventListener("click", function(){
   let del=display.value;
   if(del.length<2){
      clearScreen();
   }
   else{
      del=del.substring(0, del.length -1);
      display.value=del;
   }
});

//Addition
function add(firstNumber, lastNumber){
   return parseFloat(firstNumber)+parseFloat(lastNumber);
}
console.log(add(firstNumber, lastNumber));

//Subtraction
function subtract(firstNumber, lastNumber){
   return parseFloat(firstNumber)-parseFloat(lastNumber);
}

//Multiplication
function multiply(firstNumber, lastNumber){
   return parseFloat(firstNumber)*parseFloat(lastNumber);
}

//Division
function divide(firstNumber, lastNumber){
   return parseFloat(firstNumber)/parseFloat(lastNumber);
}

//Create operate function
function operate(firstNumber, currentOperator, lastNumber){
   switch(currentOperator){
      case "+":
         result=add(firstNumber, lastNumber);
         break;
      case "-":
         result=subtract(firstNumber, lastNumber);
         break;
      case "x":
         result=multiply(firstNumber, lastNumber);
         break;
      case "/":
         result=divide(firstNumber, lastNumber);
         break;
   }
   return result;
   //console.log(currentOperation);
}
//console.log(operate(firstNumber, currentOperator, lastNumber));

