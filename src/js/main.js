// Import the park data from the module
import { getParkData } from "./parkService.mjs";

// Get the park object
const parkData = getParkData();

// Update the disclaimer link
const disclaimerLink = document.querySelector(".disclaimer > a");
disclaimerLink.href = parkData.url;
disclaimerLink.innerHTML = parkData.fullName;

// Update the page title
document.title = parkData.fullName;

// Update hero image
const heroImage = document.querySelector(".hero-banner > img");
heroImage.src = "images/yellowstone-banner.jpg"; // Keep your local banner image
heroImage.alt = `${parkData.fullName} Banner`;

// Function to create hero content dynamically
function parkInfoTemplate(info) {
  return `
    <a href="${info.url}" class="hero-banner__title">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>
  `;
}

// Update hero title, designation, and states
const heroContent = document.querySelector(".hero-banner__content");
heroContent.innerHTML = parkInfoTemplate(parkData);
