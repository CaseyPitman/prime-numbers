//App to determine if a given number is prime or composite

const resetButton = document.getElementById("reset-button");
let message = "";

//Function to test if a number is prime or composite

const primeTest = function(inputNumber){
    let i=2; //increments to input, checking for divisibility each time through
    
    while (i<inputNumber){ //increments through divisors checking for divisibility
      let remainder = inputNumber%i;
      if (remainder===0){
        message = inputNumber + " is COMPOSITE.";
        return message;
      }
      else if (remainder>0){ //check if inputNumber is divisible by next increment
        i++;
      }
    }//end while loop

    message = inputNumber + " is PRIME."
    return message;
};

//Calls and executes the primeTest function and then displays results on the page
const execute = function(){
    let inputNumber = document.getElementById("input-number").value;
    primeTest(inputNumber);
    let outputNumber = document.getElementById("output-number");
    outputNumber.value = message;
}

document.getElementById("submit-button").addEventListener("click", execute);
  
//Resets the form
const reset = function(){
  document.getElementById("output-number").value=" ";
  document.getElementById("input-number").value=" ";
};

//calls reset function
document.getElementById("reset-button").addEventListener("click", reset);