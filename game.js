let gold = 0; // Initialize the gold counter

const goldCounter = document.getElementById('goldCounter');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

// Update the gold display
function updateGoldCounter() {
    goldCounter.textContent = `Gold: ${gold}`;
}

// Event listener for the "Mine Gold" button
clickButton.addEventListener('click', () => {
    gold++;
    updateGoldCounter();
});

// Event listener for the "Reset" button
resetButton.addEventListener('click', () => {
    gold = 0;
    updateGoldCounter();
});

// Initialize the game display
updateGoldCounter();
