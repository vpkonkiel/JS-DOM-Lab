//functions
function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit-32) * 5/9;
    return celsius;
}

//farenheit to celsius
let userInput = document.getElementsByTagName("input");
let button = document.getElementsByClassName("calculate-button");

button[0].addEventListener("click", () => {
    let fahrenheit = userInput[0].value;
    let celsius = convertToCelsius(fahrenheit);
    let celsiusOutput = document.getElementsByClassName("celsius-value");
    celsiusOutput[0].textContent = celsius;
});