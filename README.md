💔 Quotes - Emotional Theme Project
This is a simple web project with a sad, emotional theme that displays random, melancholic quotes upon button press, accompanied by a simulated rain effect. The project demonstrates basic DOM manipulation, CSS animations, and event handling in JavaScript.

✨ Features
Emotional Ambiance: A dark background and subtle rain animation set a somber mood.

Rain Effect: A continuous background effect of falling raindrops implemented purely with CSS and JavaScript.

Quote Revelation: Clicking the "Reveal a Quote" button displays a randomly selected sad quote.

Dynamic Styling: Upon revealing a quote, the page's background color and font change randomly for an unpredictable visual experience.

⚙️ Technologies Used

- HTML5

- CSS3 (with @keyframes for the rain animation)

- JavaScript (for DOM manipulation, event listeners, and dynamic styling)

🛠️ How to Run
Save the files: Ensure all three files (quotes.html, quotes.css, quotes.js) are in the same directory.

Open in Browser: Double-click quotes.html to open it in your web browser, or use a Live Server extension if you are using a code editor like VS Code.

⚙️ Technologies Used
HTML5

CSS3 (with @keyframes for the rain animation)

JavaScript (for DOM manipulation, event listeners, and dynamic styling)

📜 JavaScript Functionality (quotes.js)
1. Rain Effect
The createDrop function:

-Generates a new div element with the class drop.

-Assigns a random horizontal position (left) and a random animation duration (animationDuration) to each drop.

-An setInterval calls createDrop every 200 milliseconds to maintain a continuous, random rain shower.

2. Quote Reveal
The revealQuoteBtn click listener:

-Selects a random quote from the predefined quotes array.

-Updates the text content of the <p id="quote"> element.

-Removes the hidden class to make the quote visible.

-Generates a random hexadecimal color code and applies it as the new document.body.style.backgroundColor.

-Selects a random font from a list and applies it to document.body.style.fontFamily.

📝 Quotes Included
The following quotes are featured in the JavaScript file:

"The greatest pain is to feel alone without you."

"Tears are words the heart can't express."

"i don't want to lose you, i only want you."

"Still love you even if you ghost me "

"The only thing more exhausting than being sad is pretending that i am not."

"i am waiting for you , with the memories of you"

"i still and only Love you"
