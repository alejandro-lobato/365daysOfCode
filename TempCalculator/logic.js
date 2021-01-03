function celsiusToFahrenheit()
{ 
    let celsius = document.getElementById("celsiusInput").value;
    if(celsius == "")
    {
        alert("Please enter a number.");  
    }
    else
    {
        result = celsius * 1.8 + 32;
        document.getElementById("resultText").textContent = result;
    } 
}