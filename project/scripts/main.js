// ======== INDEX (Hamburger Menu) ======== //
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (hamButton && navigation) {
  hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
  });
}

// ======== EXPERIENCES (Tabs) ======== //
if (window.location.pathname.includes('experiences.html')) {
  const previews = document.getElementById('previews');
  const tabs = document.getElementById('tabs');

  if (previews && tabs) {
    tabs.addEventListener('click', (e) => {
      e.preventDefault();

      const selectedTab = e.target.closest('.tab');
      if (selectedTab) {
        const id = selectedTab.dataset.id;

        const activePreview = previews.querySelector('.active');
        const newPreview = previews.querySelector(`[data-id="${id}"]`);
        if (activePreview && newPreview) {
          activePreview.classList.remove('active');
          newPreview.classList.add('active');
        }

        const activeTab = tabs.querySelector('.active');
        const newTab = tabs.querySelector(`[data-id="${id}"]`);
        if (activeTab && newTab) {
          activeTab.classList.remove('active');
          newTab.classList.add('active');
        }
      }
    });
  }
}

// ======== BOOKINGS (Select Options) ======== //
if (window.location.pathname.includes('bookings.html')) {
  const products = [
    { id: "fc-1888", name: "Sunrise Pyramid Hike", averagerating: 4.5 },
    { id: "fs-1987", name: "Jaguar Tracking & Wildlife Walk", averagerating: 3.5 },
    { id: "ac-2000", name: "Ancient Ritual Sound Bath", averagerating: 3.9 },
    { id: "jj-1969", name: "Eco-Canopy Exploration", averagerating: 5.0 }
  ];

  const selectElement = document.getElementById("product");

  if (selectElement) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      selectElement.appendChild(option);
    });
  }
}

// ======== THANKS PAGE (Visit Counter) ======== //
if (window.location.pathname.includes('thanks.html')) {
  const visitsDisplay = document.querySelector(".visits");

  if (visitsDisplay) {
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    visitsDisplay.textContent = numVisits !== 0
      ? numVisits
      : "This is your first visit. Welcome!";

    numVisits++;
    localStorage.setItem("numVisits-ls", numVisits);
  }
}

// ======== FOOTER (Year & Last Modified) ======== //
const yearSpan = document.getElementById("currentYear");
if (yearSpan) {
  const date = new Date();
  yearSpan.innerHTML = `&copy;${date.getFullYear()}`;
}

const lastModified = document.querySelector("#lastModified");
if (lastModified) {
  lastModified.textContent = `Last Modification: ${document.lastModified}`;
}
