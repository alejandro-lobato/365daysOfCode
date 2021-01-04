function celsiusToFahrenheit(degrees) { return degrees * 1.8 + 32; }
function fahrenheitToCelsius(degrees) { return (degrees - 32) / 1.8 }

function convert()
{
    let cToF = document.getElementById("cToFRadio");
    let fToC = document.getElementById("fToCRadio");
    
    if(fToC.checked){
        let fahrenheitDegrees = document.getElementById("fahrenheitInput").value;
        console.log(fahrenheitDegrees);
        document.getElementById("resultText").textContent = fahrenheitToCelsius(fahrenheitDegrees);
        document.getElementById("resultText").textContent = parseFloat(fahrenheitToCelsius(fahrenheitDegrees)).toFixed(2) + " C";

    }
    else if(cToF.checked){
        let celsiusDegrees = document.getElementById("celsiusInput").value;
        console.log(celsiusDegrees);
        document.getElementById("resultText").textContent = parseFloat(celsiusToFahrenheit(celsiusDegrees)).toFixed(2) + " F";
    }
}

function disableCelsiusInput(){
    document.getElementById("fahrenheitInput").disabled = false;
    document.getElementById("celsiusInput").disabled = true;
}

function disableFahrenheitInput(){
    document.getElementById("celsiusInput").disabled = false;
    document.getElementById("fahrenheitInput").disabled = true;
}