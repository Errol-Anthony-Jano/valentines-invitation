const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");
const warningSection = document.querySelector(".warning-section");
const content = document.querySelector(".content");
const container = document.querySelector(".container");

const yayGif = document.querySelector(".yay");
const defaultGif = document.querySelector(".default");

yayGif.style.display = "none";

noBtn.addEventListener("click", () => {
    alert("This action is not allowed.");
})

const warning = document.createElement("p");
warning.innerText = "WARNING: This will make the developer sad :(";
warning.style.color = "red";

const happy = document.createElement("h1");
happy.innerText = "YAYYYY!!!";

const happySubtext = document.createElement("p");
happySubtext.innerText = "Thank you for saying yes 😘"

noBtn.addEventListener("mouseenter", () => {
    warningSection.appendChild(warning);
})

noBtn.addEventListener("mouseleave", () => {
    warningSection.removeChild(warning);
})

yesBtn.addEventListener("click", () => {
    content.replaceChildren(happy, happySubtext);
    yayGif.style.display = "flex";
    defaultGif.style.display = "none";
})