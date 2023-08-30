const myNumber = document.getElementById("txtMyNumber");
const btnSubmit = document.getElementById("btnSubmit");
const resultNumber = document.getElementById("number-result");

//Generate a random number between 1 and 10
const rnd = Math.floor((Math.random() * 10) + 1);

//Add a click event listener to the button
btnSubmit.addEventListener("click", function() {
    //Parse the string value into an integer
    const number = parseInt(myNumber.value);
    //Check if the number guessed is greater than the rnd number
    if(number > rnd) {
        resultNumber.textContent = "The number is less than " + `${number}`;
    }
    //Check if the number guessed is less than the rnd number
    else if (number < rnd){
        resultNumber.textContent = "The number is greater than " + `${number}`;
    }
    //Else the number guessed is equal to the rnd number
    else {
        resultNumber.textContent = "Congratulations! You picked the correct number!"
    }
});