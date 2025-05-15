const today = new Date();
const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = `${today.getFullYear()}`;

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Modification: ${oLastModif}`;



