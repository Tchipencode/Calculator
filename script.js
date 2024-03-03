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
         firstNumber=this.value;
      }
      else{
         lastNumber=this.value;
      } 
      
      display.value+=this.value;
   });
});
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
   });
});

clearButton.addEventListener("click", function(){
   firstNumber="";
   lastNumber="";
   currentOperator=null;
   display.value="";
})
equalButton.addEventListener("click", function(){
   if(currentOperator){
      display.value+=operate(firstNumber, currentOperator, lastNumber);
      firstNumber=display.value;
      lastNumber="";
   }
})
deleteButton.addEventListener("click", function(){
   display.value-=numbers.value.slice("");
})

//Addition
function add(firstNumber, lastNumber){
   return firstNumber+lastNumber;
}
console.log(add(firstNumber, lastNumber));

//Subtraction
function subtract(firstNumber, lastNumber){
   return firstNumber-lastNumber;
}

//Multiplication
function multiply(firstNumber, lastNumber){
   return firstNumber*lastNumber;
}

//Division
function divide(firstNumber, lastNumber){
   return firstNumber/lastNumber;
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

