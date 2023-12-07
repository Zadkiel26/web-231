//Create the variables 
var fahrenheitText = document.getElementById("txtFahrenheit");
var convertButton = document.getElementById("btn-ConvertTemperature");
var resultText = document.getElementById("conversion-result");

//Create the event listener for the button
convertButton.addEventListener("click", function(){
    //Parse the string argument into a float
    var fahrenheit = parseFloat(fahrenheitText.value);
    //Do Celsius calculations
    var celsius = (fahrenheit - 32) / 1.8;
    //Write the result
    resultText.textContent = `${celsius.toFixed(2)}`;
});


