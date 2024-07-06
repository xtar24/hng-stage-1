document.addEventListener('DOMContentLoaded', ()=>{
    const updateTime = () => {
        const now =new Date();
        document.getElementById('currentTime').textContent=now.toUTCString();
        document.getElementById('currentDay').textContent=now.toLocaleString('en-US',{weekday:'long'});
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector (".hamburger-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburgerButton.addEventListener('click', ()=> {
        mobileMenu.classList.toggle("active")
    });
});