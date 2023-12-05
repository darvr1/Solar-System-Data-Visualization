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
        planetDropdownBox.style.height = "240px";
    } else {
        planetDropdownBox.style.height = "0px";
    }
    sessionStorage.setItem("planetButtonState", isDropdownOpen);
}

// Open and close navigation bar
function navSwitch() {
    isNavOpen = !isNavOpen;
    if (isNavOpen) {
        nav.style.right = "30px";
    } else {
        nav.style.right = "-160px";
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

{ // Plotly
const categoryselect = document.getElementById("category");
const typeselect = document.getElementById("type");

function selectType() {
    return typeselect.value;
}
    
function selectCategory() {
    switch (categoryselect.value) {
        case "Mass":
            massData(selectType());
            break;
        case "Diameter":
            diameterData(selectType());
            break;
        case "Density":
            densityData(selectType());
            break;
        case "Surface":
            surfaceData(selectType());
            break;
        case "Escape":
            escapeData(selectType());
            break;
        case "Rotation":
            rotationData(selectType());
            break;
        case "Length":
            lengthData(selectType());
            break;
        case "Distance":
            distanceData(selectType());
            break;
        case "Perihelion":
            PerihelionData(selectType());
            break;
        case "Aphelion":
            AphelionData(selectType());
            break;
        case "Period":
            PeriodData(selectType());
            break;
        case "Velocity":
            VelocityData(selectType());
            break;
        case "Inclination":
            InclinationData(selectType());
            break;
        case "Eccentricity":
            EccentricityData(selectType());
            break;
        case "Orbit":
            ObliquityData(selectType());
            break;
        case "Moons":
            MoonData(selectType());
            break;
    }
}

// Keep plotly loaded when refreshed if in visualization page
if (window.location.href == "http://localhost:3000/visualization.html") {
    window.addEventListener("load", () => {
        selectCategory();
    });
}

function massData(type) {
    let trace1 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [8.2, 27.4, 28.1, 8.3, 100, 41.4, 29.4, 30.1],
        type: type,
        text: ['Mass: 0.33', 'Mass: 4.87', 'Mass: 5.97', 'Mass: 0.642', 'Mass: 1898', 'Mass: 568', 'Mass: 86.8', 'Mass: 102'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [8.2, 27.4, 28.1, 8.3, 100, 41.4, 29.4, 30.1]
        }
    };

    let data = [trace1];

    let layout = {
        title: 'Mass (10^24kg)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function diameterData(type) {
    let trace2 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [3.2, 8, 8.5, 4.5, 100, 84, 35.6, 34.4],
        type: type,
        text: ['Diameter: 4879', 'Diameter: 12104', 'Diameter: 12756', 'Diameter: 6792', 'Diameter: 142984','Diameter: 120536', 'Diameter: 51118', 'Diameter: 49528'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [3.2, 8, 8.5, 4.5, 100, 84, 35.6, 34.4]
        }
    };

    let data = [trace2];

    let layout = {
        title: 'Diameter (km)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function densityData(type) {
    let trace3 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [89.9, 80.1, 100, 61.8, 26, 10, 25.4, 47.2],
        type: type,
        text: ['Density: 5429', 'Density: 5243', 'Density: 5514', 'Density: 3934', 'Density: 1326', 'Density: 687', 'Density: 1270', 'Density: 1638'],
        mode: 'markers',
        marker: {
            size: [89.9, 80.1, 100, 61.8, 26, 10, 25.4, 47.2],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace3];

    let layout = {
        title: 'Density (kg/m^3)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
    
}

function surfaceData(type) {
    let trace4 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [18.5, 44.5, 49, 18.5, 115.5, 45, 43.5, 55],
        type: type,
        text: ['Surface Gravity: 3.7', 'Surface Gravity: 8.9', 'Surface Gravity: 9.8', 'Surface Gravity: 3.7', 'Surface Gravity: 23.1', 'Surface Gravity: 9', 'Surface Gravity: 8.7', 'Surface Gravity: 11'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [18.5, 44.5, 49, 18.5, 115.5, 45, 43.5, 55]
        }
    };

    let data = [trace4];

    let layout = {
        title: 'Surface Gravity (m/s^2)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function escapeData(type) {
    let trace5 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [4.3, 10.4, 11.2, 5, 59.5, 35.5, 21.3, 23.5],
        type: type,
        text: ['Escape Velocity: 4.3', 'Escape Velocity: 10.4', 'Escape Velocity: 11.2', 'Escape Velocity: 5', 'Escape Velocity: 59.5', 'Escape Velocity: 35.5', 'Escape Velocity: 21.3', 'Escape Velocity: 23.5'],
        mode: 'markers',
        marker: {
            size: [8.6, 20.8, 22.4, 10, 119, 71, 42.6, 47], 
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace5];

    let layout = {
        title: 'Escape Velocity (km/s)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function rotationData(type) {
    let trace6 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [96.1, 10, 48.8, 49.6, 48, 48.1, 48.6, 47.8],
        type: type,
        text: ['Rotation Period: 1407.6', 'Rotation Period: -5832.5', 'Rotation Period: 23.9', 'Rotation Period: 24.6', 'Rotation Period: 9.9', 'Rotation Period: 10.7', 'Rotation Period: -17.2', 'Rotation Period: 16.1'],
        mode: 'markers',
        marker: {
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)'],
            size: [96.1, 10, 48.8, 49.6, 48, 48.1, 48.6, 47.8],
        }
    };

    let data = [trace6];

    let layout = {
        title: 'Rotaion Period (hours)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
    
}

function lengthData(type) {
    let trace7 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [208.2, 127.8, 9, 10.2, 3.6, 6.3, 148.5, 106.2],
        type: type,
        text: ['Length of Day: 4222.6', 'Length of Day: 2802', 'Length of Day: 24', 'Length of Day: 24.7', 'Length of Day: 9.9', 'Length of Day: 10.7', 'Length of Day: 17.2', 'Length of Day: 16.1'],
        mode: 'markers',
        marker: {
            size: [208.2, 127.8, 9, 10.2, 3.6, 6.3, 148.5, 106.2],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace7];

    let layout = {
        title: 'Length of Day (hours)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function distanceData(type) {
    let trace8 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [17.2, 33.6, 50, 74.7, 99.8, 134.7, 192.6, 235.1],
        type: type,
        text: ['Distance from Sun: 57.9', 'Distance from Sun: 108.2', 'Distance from Sun: 149.6', 'Distance from Sun: 228', 'Distance from Sun: 778.5', 'Distance from Sun: 1432', 'Distance from Sun: 2867', 'Distance from Sun: 4515'],
        mode: 'markers',
        marker: {
            size: [17.2, 33.6, 50, 74.7, 99.8, 134.7, 192.6, 235.1],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace8];

    let layout = {
        title: 'Distance from Sun (10^6 km)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function PerihelionData(type) {
    let trace9 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [1, 8.2, 13.2, 19, 50, 109, 175.8, 200],
        type: type,
        text: ['Perihelion: 46', 'Perihelion: 107.5', 'Perihelion: 147.1', 'Perihelion: 206.7', 'Perihelion: 740.6', 'Perihelion: 1357.6', 'Perihelion: 2732.7', 'Perihelion: 4471.1'],
        mode: 'markers',
        marker: {
            size: [1, 8.2, 13.2, 19, 50, 109, 175.8, 200],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace9];

    let layout = {
        title: 'Perihelion (10^6 km)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function AphelionData(type) {
    let trace10 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [22.4, 28.6, 37.6, 51.2, 99.6, 145, 190.4, 200],
        type: type,
        text: ['Aphelion: 69.8', 'Aphelion: 108.9', 'Aphelion: 152.1', 'Aphelion: 249.3', 'Aphelion: 816.4', 'Aphelion: 1506.5', 'Aphelion: 3001.4', 'Aphelion: 4558.9'],
        mode: 'markers',
        marker: {
            size: [22.4, 28.6, 37.6, 51.2, 99.6, 145, 190.4, 200],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace10];

    let layout = {
        title: 'Aphelion (10^6 km)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function PeriodData(type) {
    let trace11 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [1, 3.4, 6.7, 11.2, 35.85, 73.2, 138.25, 288.6],
        type: type,
        text: ['Orbital Period: 46', 'Orbital Period: 107.5', 'Orbital Period: 147.1', 'Orbital Period: 206.7', 'Orbital Period: 740.6', 'Orbital Period: 1357.6', 'Orbital Period: 2732.7', 'Orbital Period: 4471.1'],
        mode: 'markers',
        marker: {
            size: [1, 3.4, 6.7, 11.2, 35.85, 73.2, 138.25, 288.6],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace11];

    let layout = {
        title: 'Orbital Period (days)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function VelocityData(type) {
    let trace12 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [94.8, 70, 59.6, 48.2, 26.2, 19.4, 13.6, 10.8],
        type: type,
        text: ['Orbital Velocity: 47.4', 'Orbital Velocity: 35', 'Orbital Velocity: 29.8', 'Orbital Velocity: 24.1', 'Orbital Velocity: 13.1', 'Orbital Velocity: 9.7', 'Orbital Velocity: 6.8', 'Orbital Velocity: 5.4'],
        mode: 'markers',
        marker: {
            size: [94.8, 70, 59.6, 48.2, 26.2, 19.4, 13.6, 10.8],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace12];

    let layout = {
        title: 'Orbital Velocity (km/s)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function InclinationData(type) {
    let trace13 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [70, 34, 1, 18, 13, 25, 8, 18],
        type: type,
        text: ['Orbital Inclination: 7', 'Orbital Inclination: 3.4', 'Orbital Inclination: 0', 'Orbital Inclination: 1.8', 'Orbital Inclination: 1.3', 'Orbital Inclination: 2.5', 'Orbital Inclination: 0.8', 'Orbital Inclination: 1.8'],
        mode: 'markers',
        marker: {
            size: [70, 34, 1, 18, 13, 25, 8, 18],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace13];

    let layout = {
        title: 'Orbital Inclination (degrees)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function EccentricityData(type) {
    let trace14 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [206, 7, 17, 94, 49, 52, 47, 1],
        type: type,
        text: ['Orbital Eccentricity: 0.206', 'Orbital Eccentricity: 0.007', 'Orbital Eccentricity: 0.017', 'Orbital Eccentricity: 0.094', 'Orbital Eccentricity: 0.049', 'Orbital Eccentricity: 0.052', 'Orbital Eccentricity: 0.047', 'Orbital Eccentricity: 0.01'],
        mode: 'markers',
        marker: {
            size: [206, 7, 17, 94, 49, 52, 47, 1],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace14];

    let layout = {
        title: 'Orbital Eccentricity',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function ObliquityData(type) {
    let trace15 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [55.2, 200, 44.2, 47.4, 34.6, 49.4, 123.2, 51.8],
        type: type,
        text: ['Obliquity to Orbit: 0.206', 'Obliquity to Orbit: 0.007', 'Obliquity to Orbit: 0.017', 'Obliquity to Orbit: 0.094', 'Obliquity to Orbit: 0.049', 'Obliquity to Orbit: 0.052', 'Obliquity to Orbit: 0.047', 'Obliquity to Orbit: 0.01'],
        mode: 'markers',
        marker: {
            size: [55.2, 200, 44.2, 47.4, 34.6, 49.4, 123.2, 51.8],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace15];

    let layout = {
        title: 'Obliquity to Orbit (degrees)',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

function MoonData(type) {
    let trace16 = {
        x: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
        y: [1,1,1,2,79,82,27,14],
        type: type,
        text: ['Number of Moons: 0', 'Number of Moons: 0', 'Number of Moons: 1', 'Number of Moons: 2', 'Number of Moons: 79', 'Number of Moons: 82', 'Number of Moons: 27', 'Number of Moons: 14'],
        mode: 'markers',
        marker: {
            size: [1,1,1,2,79,82,27,14],
            color: ['rgb(53, 159, 168)', 'rgb(238, 200, 81)', 'rgb(50, 77, 255)', 'rgb(226, 50, 15)', 'rgb(255, 184, 112)', 'rgb(248, 235, 208)', 'rgb(191, 253, 254)', 'rgb(8, 22, 255)']
        }
    };

    let data = [trace16];

    let layout = {
        title: 'Number of Moons',
        showlegend: false,
        height: 700,
        width: 950
    };

    Plotly.newPlot('myDiv', data, layout);
}

}