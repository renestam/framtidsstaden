// bildspel
let modelImages = [
    "assets/model/medium_image_4.jpg", 
    "assets/model/medium_image_1.jpg", 
    "assets/model/medium_image_2.jpg", 
    "assets/model/medium_image_3.jpg",
    "assets/model/medium_image_5.jpg"
];
let overdeckingImages = [
    "assets/overdecking/medium_image_1.jpg", 
    "assets/overdecking/medium_image_2.jpg", 
    "assets/overdecking/medium_image_3.jpg",
    "assets/overdecking/medium_image_4.jpg"
];
let inActionImages = [
    "assets/in_action/medium_image_1.jpg", 
    "assets/in_action/medium_image_2.jpg", 
    "assets/in_action/medium_image_3.jpg",
    "assets/in_action/medium_image_4.jpg",
    "assets/in_action/medium_image_5.jpg"
];
let currentSiteImages = [
    "assets/current_site/medium_image_1.jpg", 
    "assets/current_site/medium_image_2.jpg", 
    "assets/current_site/medium_image_3.jpg",
    "assets/current_site/medium_image_4.jpg",
];

let imageIndex = 0;
function changeImage(prefix, imageArray, currentImage, increment) {
    let images = modelImages;
    if (imageArray == 'overdecking') {
        images = overdeckingImages;
    }
    else if (imageArray == 'in_action') {
        images = inActionImages;
    }
    else if (imageArray == 'current_site') {
        images = currentSiteImages;
    }

    imageIndex += increment;
    if (imageIndex < 0 || imageIndex >= images.length) {
        imageIndex += images.length*increment*-1;
    }

    document.getElementById(currentImage).src = prefix + images[imageIndex];
}

// dark theme
function loadTheme() {
    if (localStorage.getItem("darkMode") == "dark") {
        // sätt variabel till "light", den kommer sedan ändras till "dark" när changeTheme kallas
        localStorage.setItem("darkMode", "light");
        changeTheme();
    }
}

// om vi inte har sparat data för dark mode, sätt automatiskt variabel till false
if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "light");
}

function changeTheme() {
    if (localStorage.getItem("darkMode") == "dark") {
        localStorage.setItem("darkMode", "light");

        let elements = [...document.getElementsByClassName('dark')];
        elements.forEach(element => {
            let className = element.className;

            // ta bort 'dark' från strängen
            className = className.slice(0, -4);

            // lägg till 'light' i strängen
            className += 'light';

            element.className = className;
        });
    } 
    else { 
        localStorage.setItem("darkMode", "dark");

        let elements = [...document.getElementsByClassName('light')];
        elements.forEach(element => {
            let className = element.className;

            // ta bort 'light' från strängen
            className = className.slice(0, -5);

            // lägg till 'dark' i strängen
            className += 'dark';

            element.className = className;
        });
    }   
}

function copyToClipboard(button, textAfterCopy) {
    let text = button.innerHTML;

    // koppiera knappens text
    navigator.clipboard.writeText(text);

    // spara ursprungliga bredd av div
    let width = window.getComputedStyle(button).width;
    
    // ändra bredd och sedan innehåll
    button.style.width = width;
    button.innerHTML = textAfterCopy;

    setTimeout(function() {
        // ändra tillbaka till ursprungliga text
        button.innerHTML = text;
    }, 1000);
}