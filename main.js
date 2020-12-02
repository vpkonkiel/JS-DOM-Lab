//functions
function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit-32) * 5/9;
    return celsius;
}

function convertToKelvin(fahrenheit) {
    let kelvin = (fahrenheit-32) * 5/9 + 273.15;
    return kelvin;
}

function convertToRankine(fahrenheit) {
    let rankine = (fahrenheit + 459.67);
    return rankine;
}

//Calculate button
let button = document.getElementsByClassName("calculate-button");

button[0].addEventListener("click", () => {
    //converting and displaying celsius
    let userInput = document.getElementsByTagName("input");
    let fahrenheit = userInput[0].value;
    let celsius = convertToCelsius(fahrenheit);
    let celsiusOutput = document.getElementsByClassName("celsius-value");
    celsiusOutput[0].textContent = celsius.toFixed(2) + " C";

    //displaying fahrenheit
    let fahrenheitOutput = document.getElementsByClassName("fahrenheit-value");
    fahrenheitOutput[0].textContent = fahrenheit + " F";

    //converting and displaying kelvin
    let kelvin = convertToKelvin(fahrenheit);
    let kelvinOutput = document.getElementsByClassName("kelvin-value");
    kelvinOutput[0].textContent = kelvin.toFixed(2) + " K";

    //converting and displaying rankine
    let rankine = convertToRankine(parseInt(fahrenheit));
    let rankineOutput = document.getElementsByClassName("rankine-value");
    rankineOutput[0].textContent = rankine.toFixed(2) + " R";
});