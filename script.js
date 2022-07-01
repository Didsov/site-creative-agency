document.querySelector(".header__burger").addEventListener("click", ()=>{
    document.querySelector(".header__header").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
})