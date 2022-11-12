const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";


const lightAndDarkMode = document.getElementById("lightAndDarkMode");
const header = document.getElementById("header-text")
const sunAndMoonImg = document.getElementById("")
const names = document.getElementById("name");

lightAndDarkMode.addEventListener("click", () => {

    if(lightAndDarkMode.className === "sun"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";

        header.style.color = "white"
        
        names.style.borderColor = "black"

        lightAndDarkMode.src = "./images/moon.png"
        lightAndDarkMode.className = "moon"

    } else if(lightAndDarkMode.className === "moon") {
        document.body.style.backgroundColor = "rgb(30, 30, 30)";
        document.body.style.color = "white";
       
        header.style.color = "black"
       
        names.style.borderColor = "white"
        
        lightAndDarkMode.src = "./images/sun.png"
        lightAndDarkMode.className = "sun"
    }
})