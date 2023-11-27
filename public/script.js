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
        setTimeout(() => {
            planetDropdownBox.style.overflowY = "scroll";
        }, 500);
        planetDropdownBox.style.height = "256px";
    } else {
        planetDropdownBox.style.overflowY = "hidden";
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
        // Re-apply initial overflow propert when transition is finished
        setTimeout(() => {
            nav.style.overflow = "scroll";
        }, 500);
        setTimeout(() => {
            navButton.textContent = "→";
        }, 250);
    } else {
        navButton.style.right = "5px";
        nav.style.width = "0px";
        // Hide scrollbar during transition
        nav.style.overflow = "hidden";
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