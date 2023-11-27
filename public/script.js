{ // Navigation
// Planet dropdown
const planetDropdownBox = document.querySelector("nav div");
const nav = document.querySelector("nav");
const navButton = document.getElementById("stickButton");
let isDropdownOpen = false;
let isNavOpen = true;

// Alternate between opening and closing dropdown
function planetDropdown() {
    isDropdownOpen = !isDropdownOpen;
    if (isDropdownOpen) {
        planetDropdownBox.style.height = "256px";
    } else {
        planetDropdownBox.style.height = "0px";
    }
    sessionStorage.setItem("planetButtonState", isDropdownOpen);
}

// Open and close navigation bar
function navSwitch() {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
        navButton.style.right = "140px";
        nav.style.width = "135px";
        setTimeout(() => {
            navButton.textContent = "→";
        }, 250);
    } else {
        navButton.style.right = "5px";
        nav.style.width = "0px";
        setTimeout(() => {
            navButton.textContent = "←";
        }, 250);
    }
}

// If the dropdown and/or nav is left open, keep it open if the page changes
window.addEventListener("load", () => {
    // Need to come up with a better name
    const PLACEHOLDERNAME = sessionStorage.getItem("planetButtonState");
    planetDropdownBox.style.transition = "none";
    if (PLACEHOLDERNAME == "true") {
        planetDropdown();
    }
    window.setTimeout(() => {
        planetDropdownBox.style.transition = "height 0.5s";
    }, 100);
});
}