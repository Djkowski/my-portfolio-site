// List of words (NBA players or other 5-letter words)
const words = [
    "APPLE", "PEACH", "MANGO", "GRAPE", "LEMON", "PLUMB", "BEARS", "TIGER", "LIONS", "WOLFS"
];

// Randomly pick a word
const correctWord = words[Math.floor(Math.random() * words.length)];

// Initialize guesses
let guesses = []; 

// Function to display the grid
function createGrid() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 6; i++) {  // 6 guesses
        for (let j = 0; j < 5; j++) {  // 5 letters in a word
            const cell = document.createElement('div');
            grid.appendChild(cell);
        }
    }
}

// Function to make a guess
function makeGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.toUpperCase();

    // Validate guess
    if (guess.length !== 5 || !/^[A-Z]+$/.test(guess)) {
        alert("Please enter a valid 5-letter word!");
        return;
    }

    guesses.push(guess);
    displayGuess(guess);
    guessInput.value = '';  // Reset input field

    // Check for win or lose
    if (guess === correctWord) {
        document.getElementById('resultMessage').innerText = "You win!";
    } else if (guesses.length === 6) {
        document.getElementById('resultMessage').innerText = "Game Over! The word was " + correctWord;
    }
}

// Function to display a guess
function displayGuess(guess) {
    const grid = document.getElementById('grid');
    let guessIndex = guesses.length - 1;
    let guessArray = guess.split('');

    // Loop through each letter in the guess
    for (let i = 0; i < 5; i++) {
        const cell = grid.children[guessIndex * 5 + i];
        cell.innerText = guessArray[i];
        if (guessArray[i] === correctWord[i]) {
            cell.style.backgroundColor = "green";  // Correct letter in correct place
        } else if (correctWord.includes(guessArray[i])) {
            cell.style.backgroundColor = "yellow";  // Correct letter in wrong place
        } else {
            cell.style.backgroundColor = "gray";  // Incorrect letter
        }
    }
}

// Initialize the grid
createGrid();