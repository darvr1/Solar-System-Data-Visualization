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
    console.log(sessionStorage.getItem("buttonState", isOpen));
}

window.onload = () => {
    const PLACEHOLDERNAME = sessionStorage.getItem("buttonState");
    box.style.transition = "none";
    if (PLACEHOLDERNAME == "true") {
        planetDropdown();
    }
    window.setTimeout(() => {box.style.transition = "height 0.5s"}, 0)
}
}