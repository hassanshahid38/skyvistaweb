
function updateTime() {
const timeContainer = document.getElementById('time');
const now = new Date(
);
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
timeContainer.textContent = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000); // Update time every second

// Initialize time immediately
updateTime();

