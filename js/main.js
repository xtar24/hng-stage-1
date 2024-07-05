document.addEventListener('DOMContentLoaded', ()=>{
    const updateTime = () => {
        const now =new Date();
        document.getElementById('currentTime').textContent=now.toUTCString();
        document.getElementById('currentDay').textContent=now.toLocaleString('en-US',{weekday:'long'});
    }
})