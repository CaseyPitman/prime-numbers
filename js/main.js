//App to determine if a given number is prime or composite

//tester input
let inputNumber = 11;

/*
let inputNumber = document.getElementById("input-number").value;
let outputNumber = document.getElementById("output-number");
const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button");
*/

//Function to test if a number is prime or composite
let i = inputNumber-1;
const primeTest = function(inputNumber){
    //add functionality to test if input is actually a number.
    

    //try using booleans
    while (i>0){

        if (inputNumber%i===0){
            console.log("composite");
            return;
        }
        else if  (inputNumber%i>=1){
            i--;}
        else{
            console.log("prime");
            return;
        }
    }

    

}

primeTest(inputNumber);


//Calls the function to test if a number is prime or composite


//Resets the form