var fahrenheitText = document.getElementById("txtFahrenheit");
var convertButton = document.getElementById("btn-ConvertTemperature");
var resultText = document.getElementById("conversion-result");

convertButton.addEventListener("click", function(){
    var fahrenheit = parseFloat(fahrenheitText.value);
    var celsius = (fahrenheit - 32) / 1.8;
    resultText.textContent = `${celsius.toFixed(2)}`;
});


