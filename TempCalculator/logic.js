function celsiusToFahrenheit(degrees) { return degrees * 1.8 + 32; }
function fahrenheitToCelsius(degrees) { return (degrees - 32) / 1.8 }

function convert()
{
    let cToF = document.getElementById("cToFRadio");
    let fToC = document.getElementById("fToCRadio");
    
    if(fToC.checked){
        let fahrenheitDegrees = document.getElementById("fahrenheitInput").value;
        if(fahrenheitDegrees != "")
        document.getElementById("resultText").textContent = parseFloat(fahrenheitToCelsius(fahrenheitDegrees)).toFixed(2) + " C";

    }
    else if(cToF.checked){
        let celsiusDegrees = document.getElementById("celsiusInput").value;
        if(fahrenheitDegrees != "")
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

function setBackground(){
    document.body.style = "background: lineargradi url(" + "https://picsum.photos/1000/1000/?blur);";
}