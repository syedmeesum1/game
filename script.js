// months name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const correctMonth = months[Math.floor(Math.random() * months.length)];
const hint = correctMonth.charAt(0);

// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startButton = document.getElementById('start-game');
const submitButton = document.getElementById('submit-guess');
const monthInput = document.getElementById('month-input');
const hintElement = document.getElementById('hint');
const resultMessage = document.getElementById('result-message');
const winScreen = document.getElementById('win-screen');
const loseScreen = document.getElementById('lose-screen');
const winVideo = document.getElementById('win-video');
const loseVideo = document.getElementById('lose-video');

// Game start
startButton.addEventListener('click', () => {
    welcomeScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    hintElement.innerText = `Hint: The month starts with "${hint}"`;
});

// Handle guess submission
submitButton.addEventListener('click', () => {
    const userGuess = monthInput.value.trim();
    if (userGuess.toLowerCase() === correctMonth.toLowerCase()) {
        // Show win screen and play win video
        gameScreen.classList.add('hidden');
        winScreen.classList.remove('hidden');
        winVideo.play();
    } else {
        // Show lose screen and play lose video
        gameScreen.classList.add('hidden');
        loseScreen.classList.remove('hidden');
        loseVideo.play();
    }
});
