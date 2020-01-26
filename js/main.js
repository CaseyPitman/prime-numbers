//App to determine if a given number is prime or composite

//tester input
let inputNumber = 22;

//let inputNumber = document.getElementById("input-number").value;
//let outputNumber = document.getElementById("output-number");
//const submitButton = document.getElementById("submit-button");
//const resetButton = document.getElementById("reset-button");

let message = "";

//Function to test if a number is prime or composite

const primeTest = function(inputNumber){
    let i=2;  
    while (i<inputNumber){ //increments through divisors checking for divisibility
      let remainder = inputNumber%i;
      
      if (remainder===0){
        message = "Composite";
        return message;
      }
      else if (remainder>0){
        i++;
      }
    }//end while loop
    message = "Prime"
    return message;
};

const execute = function(){
    primeTest(inputNumber);
    console.log(message);
    
};

//sumbmitButton.addEventListener("click", execute);
execute();
  
  //Resets the form