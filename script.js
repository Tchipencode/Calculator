let firstNumber=0;
let lastNumber=0;
let currentOperator=null;
let currentOperation=null;
let result=0;
let display=document.querySelector(".display");
let numbers=document.querySelectorAll(".num");
let operators=document.querySelectorAll(".operator");
let equalButton=document.querySelector(".equal");
let clearButton=document.querySelector(".clear");
let deleteButton=document.querySelector(".delete");

//when click on a number
numbers.forEach(function(btn){
   btn.addEventListener("click", function(e){
      if(!currentOperator){
         firstNumber+=e.target.textContent;
      }
      else{
         lastNumber+=e.target.textContent;
      } 
      
      display.textContent+=e.target.textContent;
   });
});

//when click on an operator
operators.forEach(function(op){
   op.addEventListener("click", function(e){
      if(e.target.textContent==="+"){
         currentOperator=e.target.textContent;
         display.textContent+=e.target.textContent;  
      } 
      else if(e.target.textContent==="-"){
         currentOperator=e.target.textContent;
         display.textContent+=e.target.textContent;
      }
      else if(e.target.textContent==="x"){
         currentOperator=e.target.textContent;
         display.textContent+=e.target.textContent;
      }
      else if(e.target.textContent==="÷"){
         currentOperator=e.target.textContent;
         display.textContent+=e.target.textContent;
      }
      else if(e.target.textContent==="%"){
         currentOperator=e.target.textContent;
         display.textContent+=e.target.textContent;
      }
      /*if(currentOperator!==null){
 
         clearScreen()
         currentOperator=thiydisplay.textContent;
         display.textContent+=thiydisplay.textContent;
      }*/
   });
});

equalButton.addEventListener("click", function(){
   if(currentOperator){
      currentOperation=operate(firstNumber, currentOperator, lastNumber);
      clearScreen();
      display.textContent=currentOperation;
   }
})

function clearScreen(){
   firstNumber="";
   lastNumber="";
   currentOperator=null;
   display.textContent="";
   display.textContent="";
}

clearButton.addEventListener("click", clearScreen);

deleteButton.addEventListener("click", function(){
   let del=display.textContent;
   if(del.length<2){
      clearScreen();
   }
   else{
      del=del.substring(0, del.length -1);
      display.textContent=del;
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

//Percentage
function percentage(firstNumber){
   return parseFloat(firstNumber)/100;
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
      case"%":
      result=percentage(firstNumber);
   }
   return result;
}


