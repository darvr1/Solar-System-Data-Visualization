{ // Navigation
let box = document.querySelector("nav div");
let isOpen = false;

function planetDropdown() {
    isOpen = !isOpen;
    if (isOpen) {
        box.style.height = "256px";
    } else {
        box.style.height = "0px";
    }
    sessionStorage.setItem("buttonState", isOpen);
}
    
window.addEventListener("load", () => {
    // Need to come up with a better name
    const PLACEHOLDERNAME = sessionStorage.getItem("buttonState");
    box.style.transition = "none";
    if (PLACEHOLDERNAME == "true") {
        planetDropdown();
    }
    window.setTimeout(() => {box.style.transition = "height 0.5s"}, 100)
});
}