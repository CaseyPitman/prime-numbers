//App to determine if a given integer is prime or composite

const resetButton = document.getElementById("reset-button");
let message = "";

//Function to test if an integer is prime or composite

const primeTest = function(inputNumber){
    let i=2; //increments to input, checking for divisibility each time through
    
    while (i<inputNumber/2){ //increments through divisors checking for divisibility
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
    if (inputNumber<0){ //user inputs a negative number
      alert("Negative numbers do not meet the definition of either prime or composite.\nPlease enter a positive integer.")
    }
    else if(inputNumber.toString().includes(".")){ //User inputs a decimal number
      alert("Integers are whole numbers only. No decimals, please.") 
    }
    else if (inputNumber==0){ //user inputs zero
      message="Zero is neither prime nor composite."
    }
    else if (inputNumber==1){ //user inputs one
      message="One is neither prime nor composite."
    }
    else{ //user inputs a prime or composite integer
    primeTest(inputNumber);
    }
    let outputNumber = document.getElementById("output-number");
    outputNumber.value = message;
}

//calls the execute function
document.getElementById("submit-button").addEventListener("click", execute);
  
//Resets the input & output fields
const reset = function(){
  document.getElementById("output-number").value=" ";
  document.getElementById("input-number").value=" ";
};

//calls reset function
document.getElementById("reset-button").addEventListener("click", reset);