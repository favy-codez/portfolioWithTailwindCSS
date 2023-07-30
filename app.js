const hamburger = document.querySelector("#hamburger"); 
const menu = document.querySelector("#menu");
const hamtext = document.querySelector("#hamtext");

hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    // hamburger.classList.toggle("bg-white")
    hamtext.classList.toggle("bg-white")
})