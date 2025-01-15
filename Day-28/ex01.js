
function updateCountdown() {
    const newYear2026 = new Date("2026-01-01T00:00:00").getTime();
    
    const now = Date.now();
    
    const distance = newYear2026 - now
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerText = "Chúc Mừng Năm Mới!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
