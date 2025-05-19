const today = new Date();
const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = `${today.getFullYear()}`;

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Modification: ${oLastModif}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

