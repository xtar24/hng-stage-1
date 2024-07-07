function updateDateTime() {
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' });
    const time = now.toLocaleTimeString('en-US', { hour12: false });
    const date = now.toLocaleDateString('en-US');

    document.getElementById('currentDay').textContent = `Current UTC Time: ${time} | Date: ${date} | Day: ${dayOfWeek}`;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately when the page loads
updateDateTime();




const hamburgerButton = document.querySelector('.hamburger-button');

const mainMenu = document.querySelector('.main-menu');

hamburgerButton.addEventListener('click', ()=> {
    hamburgerButton.classList.toggle('active');
    mainMenu.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButton = document.querySelector(".hamburger-button");
    const mainMenu = document.querySelector(".main-menu");
  
    hamburgerButton.addEventListener('click', () =>{
        mainMenu.classList.toggle("active")
    });
  });