const today = new Date();
const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = `${today.getFullYear()}`;

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Modification: ${oLastModif}`;


const temperature = 45;
const windSpeed = 10;


function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    );
}

const windchillElement = document.getElementById("windchillFactor");

if (temperature <= 50 && windSpeed > 3) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windchillElement.textContent = `${windChill.toFixed(1)} °F`;
} else {
    windchillElement.textContent = "N/A";
}





