//functions
function convertFToCelsius(fahrenheit) {
    let celsius = (fahrenheit-32) * 5/9;
    return celsius;
}

function convertFToKelvin(fahrenheit) {
    let kelvin = (fahrenheit-32) * 5/9 + 273.15;
    return kelvin;
}

function convertFToRankine(fahrenheit) {
    let rankine = (fahrenheit + 459.67);
    return rankine;
}

function convertCToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function convertCToKelvin(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin; 
}

function convertCToRankine(celsius) {
    let rankine = celsius * 9/5 + 491.67;
    return rankine;
}

function convertKToFahrenheit(kelvin) {
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return fahrenheit;
}

function convertKToCelsius(kelvin) {
    let celsius = kelvin - 273.15;
    return celsius;
}

function convertKToRankine(kelvin) {
    let rankine = kelvin * 1.8;
    return rankine;
}

function convertRToFahrenheit(rankine) {
    let fahrenheit = rankine - 459.67;
    return fahrenheit;
}

function convertRToCelsius(rankine) {
    let celsius = (rankine - 491.67) * 5/9;
    return celsius;
}

function convertRToKelvin(rankine) {
    let kelvin = rankine * 5/9;
    return kelvin;
}

//Calculate button
let button = document.getElementsByClassName("calculate-button");
let selectElement = document.getElementById("temperature");
let selection = selectElement.children;

button[0].addEventListener("click", () => {
   
    if(selectElement.value == "fahrenheit") {
    let userInput = document.getElementsByTagName("input");
    let fahrenheit = userInput[0].value;
    let celsius = convertFToCelsius(fahrenheit);
    let celsiusOutput = document.getElementsByClassName("celsius-value");
    celsiusOutput[0].textContent = celsius + " C";

    let fahrenheitOutput = document.getElementsByClassName("fahrenheit-value");
    fahrenheitOutput[0].textContent = fahrenheit + " F";

    let kelvin = convertFToKelvin(fahrenheit);
    let kelvinOutput = document.getElementsByClassName("kelvin-value");
    kelvinOutput[0].textContent = kelvin + " K";

    let rankine = convertFToRankine(parseInt(fahrenheit));
    let rankineOutput = document.getElementsByClassName("rankine-value");
    rankineOutput[0].textContent = rankine + " R";
    } else if(selectElement.value == "celsius") {
        let userInput = document.getElementsByTagName("input");
        let celsius = userInput[0].value;
        let celsiusOutput = document.getElementsByClassName("celsius-value");
        celsiusOutput[0].textContent = celsius + " C";
    
        let fahrenheit = convertCToFahrenheit(celsius);
        let fahrenheitOutput = document.getElementsByClassName("fahrenheit-value");
        fahrenheitOutput[0].textContent = fahrenheit + " F";
    
        let kelvin = convertCToKelvin(celsius);
        let kelvinOutput = document.getElementsByClassName("kelvin-value");
        kelvinOutput[0].textContent = kelvin + " K";
    
        let rankine = convertCToRankine(celsius);
        let rankineOutput = document.getElementsByClassName("rankine-value");
        rankineOutput[0].textContent = rankine + " R";
        } else if(selectElement.value == "kelvin") {
            let userInput = document.getElementsByTagName("input");
            let kelvin = userInput[0].value;
            let kelvinOutput = document.getElementsByClassName("kelvin-value");
            kelvinOutput[0].textContent = kelvin + " K";

            let celsius = convertKToCelsius(kelvin);
            let celsiusOutput = document.getElementsByClassName("celsius-value");
            celsiusOutput[0].textContent = celsius + " C";
        
            let fahrenheit = convertKToFahrenheit(kelvin);
            let fahrenheitOutput = document.getElementsByClassName("fahrenheit-value");
            fahrenheitOutput[0].textContent = fahrenheit + " F";
        
            let rankine = convertKToRankine(kelvin);
            let rankineOutput = document.getElementsByClassName("rankine-value");
            rankineOutput[0].textContent = rankine + " R";
            } else if(selectElement.value == "rankine") {
                let userInput = document.getElementsByTagName("input");
                let rankine = userInput[0].value;
                let rankineOutput = document.getElementsByClassName("rankine-value");
                rankineOutput[0].textContent = rankine + " R";

                let kelvin = convertRToKelvin(rankine);
                let kelvinOutput = document.getElementsByClassName("kelvin-value");
                kelvinOutput[0].textContent = kelvin + " K";
    
                let celsius = convertRToCelsius(rankine)
                let celsiusOutput = document.getElementsByClassName("celsius-value");
                celsiusOutput[0].textContent = celsius + " C";
            
                let fahrenheit = convertRToFahrenheit(rankine);
                let fahrenheitOutput = document.getElementsByClassName("fahrenheit-value");
                fahrenheitOutput[0].textContent = fahrenheit + " F";
                }
});