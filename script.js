console.log('Hello!');

// HENT
const hamburgerIcon = document.querySelector("#hamburgerIcon");
console.log(hamburgerIcon);

// MODIFISER
function hamburgerMenu() {
    console.log("Clicked?")

    // HENT
    const nav = document.querySelector("#nav");
    console.log(nav);

    // MODIFISER
    nav.classList.toggle("headerHamburger");
}

// SEND
hamburgerIcon.addEventListener("click", hamburgerMenu)