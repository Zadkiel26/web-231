//Set the HTML elements to variables
const sequenceSelection = document.getElementById('sequence');
const btnDisplaySequence = document.getElementById('btnDisplaySequence');
const resultText = document.getElementById('result-text');

//Create the event listener 'click' for the btn
btnDisplaySequence.addEventListener('click', function() {
    //Create the 'choice' variable equal to the sequence chosen
    const choice = sequenceSelection.value;

    //If the choice is equal to 'select', then prompt an alert
    if(choice === 'select')
        alert("Invalid selection, please try again!");
    //Else if the choice is equal to 'fibonacci'
    else if (choice === 'fibonacci') {
        //Create the variables for the while loop
        let num1 = 0;
        let num2 = 1;
        let next;

        //Create the result string variable
        let fibonacciSequenceText = "";

        //Generate the Fibonacci Sequence
        while(num1 < 40) {
            //Update the result text with num1
            fibonacciSequenceText += num1 + ", ";

            //Calculate the next Fibonacci number
            next = num1 + num2;

            //Update num1 and num2
            num1 = num2;
            num2 = next;
        }

        //Display the result text
        resultText.style.display = 'block';
        resultText.textContent = fibonacciSequenceText.slice(0, -2);
    }
    //Else if the choice is equal to 'even'
    else if (choice === 'even') {
        //Create the variable for do-while loop
        let num = 1;
        
        //Create the result string variable
        let evenSequenceText = "";

        //Generate the Even Sequence
        do {
            //Mod the num by 2 and if it is equal to 0 then is even
            if(num % 2 === 0) 
                //Update the result text with num
                evenSequenceText += num + ", ";
            //Increase num + 1
            num++;  
        } while(num < 20); //Break point when num equals 20

        //Display the result text
        resultText.style.display = 'block';
        resultText.textContent = evenSequenceText.slice(0, -2);
    }
    //Else if the choice is equal to 'odd'
    else if(choice === 'odd') {
        //Create the result string variable
        let oddSequenceText = "";

        //For loop starting at 1 and adding 2 every loop
        for(let num = 1; num < 20; num += 2) {
            //Update the result string with num
            oddSequenceText += num + ", ";
        }

        //Display the result text
        resultText.style.display = 'block';
        resultText.textContent = oddSequenceText.slice(0, -2);
    }
});