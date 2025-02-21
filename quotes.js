document.addEventListener('DOMContentLoaded', function() {
// Rain effect
const rainContainer = document.getElementById('rain');
const dropCount = 100; // Number of raindrops

function createDrop() {
    const drop = document.createElement('div');
    drop.className = 'drop';
    
    // Randomize the position and animation duration
    const xPosition = Math.random() * window.innerWidth; // Random horizontal position
    const duration = Math.random() * 1 + 0.5; // Random duration between 0.5s and 1.5s

    drop.style.left = `${xPosition}px`;
    drop.style.animationDuration = `${duration}s`;

    rainContainer.appendChild(drop);

    // Remove the drop after the animation ends to prevent memory leaks
    drop.addEventListener('animationend', () => {
        drop.remove();
    });
}

// Create multiple drops at intervals
setInterval(createDrop, 200); // Create a new drop every 200 milliseconds

// Reveal quote functionality
document.getElementById('revealQuoteBtn').addEventListener('click', function() {
    const quotes = [
        "The greatest pain is to feel alone without you.",
        "Tears are words the heart can't express.",
        "i don't want to lose you, i only want you.",
        "Still love you even if you ghost me ",
        "The only thing more exhausting than being sad is pretending that i am not.",
        "i am waiting for you , with the memories of you",
        "i still and only Love you"
    ];
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = quotes[randomIndex];
    quoteElement.classList.remove('hidden');
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
     const fonts = ["Arial", "Verdana", "Georgia", "Courier New", "Times New Roman", "Comic Sans MS", "Impact", "Trebuchet MS"];
            
            // Select a random font
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            document.body.style.fontFamily = randomFont;
});
});
