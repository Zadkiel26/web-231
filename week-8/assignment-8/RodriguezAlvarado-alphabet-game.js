document.addEventListener('DOMContentLoaded', function () {
    const letterPositionElement = document.getElementById('txtPosition');
    const btnFindLetterElement = document.getElementById('btnFindLetter');
    const resultTextElement = document.getElementById('resultText');

    //Create an array of all the English alphabet letters
    const alphabet = Array.from({length: 26}, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i));
    //Create a variable string called alphabetOutput
    let alphabetOutput = '';
    //Using the for/in loop to iterate over the alphabet array and build the alphabetOutput string
    for(let letter in alphabet) {
        alphabetOutput += alphabet[letter] + ', ';
    }
    //Bind the alphabetOutput string to the alphabet div
    const alphabetDiv = document.querySelector('.card-content');
    alphabetOutput = alphabetOutput.slice(0, -2);
    alphabetDiv.textContent = alphabetOutput;

    btnFindLetterElement.addEventListener('click', function() {
        //Create a variable called pos and bind it to the value entered
        const pos = parseInt(letterPositionElement.value);
        //Find the alphabet letter in the array that matches the entered value
        const letter = alphabet[pos - 1];
        //Check if the letter is equal to undefined
        if(letter === undefined) {
            resultTextElement.textContent = `There are not ${pos} letters in the alphabet.`;
        }
        //Else write on the result card what letter is in that pos
        else {
            resultTextElement.textContent = `${letter} is at position ${pos} in the alphabet.`
        }
    });
});