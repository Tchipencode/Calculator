let number="";
let firstNumber="";
let lastNumber="";
let currentOperator=null;
let currentOperation=null;
let result="";
let display=document.querySelector(".display");
let numbers=document.querySelectorAll(".num");
let operators=document.querySelectorAll(".operator");
let equalButton=document.querySelector(".equal");
let clearButton=document.querySelector(".clear");
let deleteButton=document.querySelector(".delete");
let decimal=document.querySelector("#decimal");


//when clicked on a number
numbers.forEach(function(btn){
   btn.addEventListener("click", function(e){
      /*number=e.target.textContent;
      display.textContent+=number;*/
      
      if(!currentOperator){
         firstNumber+=e.target.textContent;
      }
      else if(firstNumber!==""&& currentOperator!=""){
         lastNumber+=e.target.textContent;
      }
      else if(firstNumber==""&& currentOperator!=""){
         //firstNumber=0;
         lastNumber=e.target.textContent;
         
      }  

      if(display.textContent=="" && e.target.textContent=="." && !display.textContent.includes("0.")){
         display.textContent= e.target.textContent;
      }
      if(display.textContent.includes(".")&& e.target.textContent=="."){
         decimal.disabled=true;
         //console.log("decimal already exist");
      }
      else{
         display.textContent+=e.target.textContent;
      }
      
   });
});

//When clicked on an operator
operators.forEach(function(op){
   op.addEventListener("click", function(e){
      /*
      if(!firstNumber){
         firstNumber+=Number(number);
         currentOperator=e.target.textContent;
         display.textContent+=currentOperator;

      }
      else if(number.length===0){
         currentOperator=e.target.textContent;
      }
      else{
         lastNumber+=Number(number);
         //currentOperator=e.target.textContent;
         //display.textContent+=currentOperator;
         currentOperation=operate(firstNumber, currentOperator, lastNumber);
         clearScreen();
         firstNumber=currentOperation;
         //number="";
         lastNumber="";
         display.textContent+=firstNumber;
         currentOperator=e.target.textContent;
         display.textContent+=currentOperator;  
      }*/

      if(!firstNumber){
         firstNumber="0";
         currentOperator=e.target.textContent;
         display.textContent+=firstNumber
         display.textContent+=currentOperator;
      }

      else{
         currentOperator=e.target.textContent;
         display.textContent+=e.target.textContent;
         if(currentOperator!=="" && lastNumber==""){
            clearScreen();
            display.textContent+=firstNumber;
            display.textContent+=currentOperator; 
         }
         /*if(e.target.textContent.length===0){
            currentOperator=e.target.textContent;
         }*/
         else{
            //currentOperator="";
            currentOperation=Math.round(operate(firstNumber, currentOperator, lastNumber)*100)/100;
            clearScreen();
            //currentOperator=e.target.textContent
            firstNumber=currentOperation;
            lastNumber="";
            display.textContent+=firstNumber;
            //currentOperator=e.target.textContent;
            display.textContent+=currentOperator;
         }   
 
      }
   });
});

equalButton.addEventListener("click", function(){
   if(currentOperator){
      currentOperation=Math.round(operate(firstNumber, currentOperator, lastNumber)*100)/100;
      clearScreen();  
      display.textContent=currentOperation;
      firstNumber=currentOperation;
      lastNumber="";
   }
})

function clearCalScreen(){
   firstNumber="";
   lastNumber="";
   currentOperator=null;
   display.textContent="";
   display.textContent="";
   decimal.disabled=false;
   number="";

}
function clearScreen(){
   display.textContent="";
}

clearButton.addEventListener("click", clearCalScreen);

deleteButton.addEventListener("click", function(){
   let del=display.textContent;
   if(del.length<2){
      Cal();
   }
   else{
      del=del.substring(0, del.length -1);
      display.textContent=del;
   }
});

//Addition
function add(a, b){
   return parseFloat(a)+parseFloat(b);
}

//Subtraction
function subtract(a, b){
   return parseFloat(a)-parseFloat(b);
}

//Multiplication
function multiply(a, b){
   return parseFloat(a)*parseFloat(b);
}

//Division
function divide(a, b){
   if(b===0 || a===0){
      return "Error";
   }
   else{
      return parseFloat(a)/parseFloat(b);
   }
   
}

//Percentage
function percentage(a){
   return parseFloat(a)/100;
}

//Create operate function
function operate(a, op, b){
   switch(currentOperator){
      case "+":
         result=add(a, b);
         break;
      case "-":
         result=subtract(a, b);
         break;
      case "x":
         result=multiply(a, b);
         break;
      case "/":
         result=divide(a, b);
         break;
      case"%":
      result=percentage(a);
   }
   return result;
}


