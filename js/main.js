//App to determine if a given number is prime or composite

//tester input
//let inputNumber = 11;

/*
let inputNumber = document.getElementById("input-number").value;
let outputNumber = document.getElementById("output-number");
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button");
*/

//Function to test if a number is prime or composite

const primeTest = function(inputNumber){
    let i=2;  
    while (i<inputNumber){ //increments through divisors checking for divisibility
      let remainder = inputNumber%i;
      
      if (remainder===0){
        console.log("composite: " + "divisible by " + i);
        return;
      }
      else if (remainder>0){
        i++;
      }
    }//end while
    console.log("prime");
    return;
  }
  
  primeTest(313);
  
  //Calls the function to test if a number is prime or composite
  
  //Resets the form