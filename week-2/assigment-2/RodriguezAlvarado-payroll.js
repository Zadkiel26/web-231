//Employee 1 Variables (Roberto Lopez)
var firstNameRoberto = document.getElementById("txtFirstNameRoberto");
var lastNameLopez = document.getElementById("txtLastNameLopez");
var addressRoberto = document.getElementById("txtAddressRoberto");
var hireDateRoberto = document.getElementById("txtHireDateRoberto");
var payRateRoberto = document.getElementById("txtPayRateRoberto");

//Employee 2 Variables (Jill Smith)
var firstNameJill = document.getElementById("txtFirstNameJill");
var lastNameSmith = document.getElementById("txtLastNameSmith");
var addressJill = document.getElementById("txtAddressJill");
var hireDateJill = document.getElementById("txtHireDateJill");
var payRateJill = document.getElementById("txtPayRateJill");

//Employee 3 Variables (William Rivera)
var firstNameWilliam = document.getElementById("txtFirstNameWilliam");
var lastNameRivera = document.getElementById("txtLastNameRivera");
var addressWilliam = document.getElementById("txtAddressWilliam");
var hireDateWilliam = document.getElementById("txtHireDateWilliam");
var payRateWilliam = document.getElementById("txtPayRateWilliam");

//Formatting payRate to only one decimal place (Roberto Lopez)
var tempPayRateRoberto = parseFloat(payRateRoberto.innerHTML);
tempPayRateRoberto.toFixed(1);
payRateRoberto.innerHTML = tempPayRateRoberto;

//Formatting payRate to only one decimal place (Jill Smith)
var tempPayRateJill = parseFloat(payRateJill.innerHTML);
tempPayRateJill.toFixed(1);
payRateJill.innerHTML = tempPayRateJill;

//Formatting payRate to only one decimal place (William Rivera)
var tempPayRateWilliam = parseFloat(payRateWilliam.innerHTML);
tempPayRateWilliam.toFixed(1);
payRateWilliam.innerHTML = tempPayRateWilliam;

//Formatting the hireDate as an object and converting the hireDate to a local date string (Roberto Lopez)
var hireDateStringRobert = hireDateWilliam.innerHTML;
var hireDateObjectRoberto = new Date(hireDateStringRobert).toLocaleDateString("en-US");
hireDateRoberto.innerHTML = hireDateObjectRoberto;

//Formatting the hireDate as an object and converting the hireDate to a local date string (Jill Smith)
var hireDateStringJill = hireDateJill.innerHTML;
var hirDateObjectJill = new Date(hireDateStringJill).toLocaleDateString("en-US");
hireDateJill.innerHTML = hirDateObjectJill;

//Formatting the hireDate as an object and converting the hireDate to a local date string (William Rivera)
var hireDateStringWilliam = hireDateWilliam.innerHTML;
var hirDateObjectWilliam = new Date(hireDateStringWilliam).toLocaleDateString("en-US");
hireDateWilliam.innerHTML = hirDateObjectWilliam;

