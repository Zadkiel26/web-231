//Get a reference to the HTML element
const txtMyWorld = document.getElementById("txtMyWorld");

//Define the text value to bind
const textValue = "You are now in Rodriguez's world!";

//Bind the text value to the innerHTML property
txtMyWorld.innerHTML = textValue;

//Get a reference to the HTML element
const btnMyCourse = document.getElementById("btnMyCourse");

//Adding onclick event
btnMyCourse.addEventListener("click", () => {
    alert("WEB 231 – Enterprise JavaScript I");
});