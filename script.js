'use strict';
/* We want to select an element from a HTML page with a class name "message". <-- this means we interact with the DOM.
".message" is an element in our HTML. Just like in CSS we use classes to style things, we use them(classes from HTML) in JavaScript as well and write them like this:*/
//                                                                        console.log(document.querySelector(".message").textContent);
/* "querySelector" is a method that's available on the object "document" - "document" is the HTML document where the element is.
Into this method we need to pass in a selector (class="message"(in html) in this case) - this is exactly how we would select the same element using CSS.
--- If it was an ID not a class, we would use "#", so it'd look like this - document.querySelector("#message").*/

/* --- SELECTING AND MANIPULATING ELEMENTS ---
we already selected the "message" element by using document.querySelector()
then we got the text content from the selected element with ".textContent"

Now we can also set/change the content/text of the element:
.. now the selectors message is: <p class="message">Start guessing...</p>
.. we can change it to "Correct number :))" like this:*/
//                                                                        document.querySelector(".message").textContent = "Correct number :))"; // <-- this already is DOM manipulation because we manipulated the text content of one of the DOM nodes.

// So in first line of code we started by reading the content of the element, which was "Start guessting..."
// In second line of code we changed the content "Start guessting..." to "Correct number :))"

// Let's now do the same with the big "?" in the middle square and also the Score:
//                                                                        document.querySelector(".number").textContent = 13; // Now there's "13" where the "?" was
//                                                                        document.querySelector(".score").textContent = 11; // Now there's "11" where the "20" was

// Let's do the same with input field(it's where we can input data on the webpage). We can also get data from here, and we can also set it:
//                                                                        document.querySelector(".guess").value = 25; // <-- we set this in VSCode and javascript automatically shows this on the page as default number in the "check" input field.
//                                                                        console.log(document.querySelector(".guess").value); // <-- here we read it (see in console the value we set in previous line)
/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

--- HANDLING CLICK EVENTS ---
Let's now make our application actually do something when we click on the "Check" button:
We do it with eventListener:
- Event = something that happens on the page(mouse click, mouse moving, key press, etc.).
- Event listener = waits for a certain event to happen and then reacts to it. 

- In order to listen for events, we first need to select the element where the event should happen (in this case we want to listen to the event on this button element[Check button]).
- When we click on this button, something should happen */
// document.querySelector(".check")/* <-- This will select the button element itself, and will then return an element! / And now we can call the addEventListener method on that element. now we need to tell the eventListener what to do(specify the reaction to the click event.) We do that by defining a function. This function will contain exactly the code that should be executed whenever this click event happens on this check button. This function is called eventHandler. -->*/.addEventListener(/*Here we need to pass in the type of the event - a click in this case. So the name of the event is actually Click. This is the first argument we pass here into this function-->.*/"click",/*Here as a second argument, we now need to pass in a function value as an argument -->*/ function() {
// /*Here we need to specify what should happen: for now we want to log in the console the value that someone puts in this input field on the page. -->*/    console.log(document.querySelector(".guess").value);
// });

/*
Same thing without comments below:

!!! we do not call this function anywhere, we only define the function and then pass it into the event handler. It is the JavaScript engine who'll call this function as soon as the event happens.
!!! the function will only be called as soon as the event happens.
*/
// document.querySelector(".check").addEventListener("click", function() {
//     console.log(document.querySelector(".guess").value); // NOW WHEN I ENTER A NUMBER IN THE PAGE AND CLICK CHECK!, THIS NUMBER SHOWS UP IN THE CONSOLE
//     document.querySelector(".message").textContent = "Correct number :))"; // <-- the message "Start guessing..." will change to "Correct number :))" when we click the button check!
// });

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*NOW LET'S START TO SLOWLY BUILD UP THE GAME:
- in the real game when we click on the "check!" button, the number from the input field will have to get retrieved, so let's start with that:*/

// let secretNumber = Math.trunc(Math.random() * 20) + 1; // <-- the random number that has to be guessed.
// let score = 20; // we use "let" because we need this score to change with every guess
// let highscore = 0; //we start it at 0, because the highscore will always be bigger than 0

// document.querySelector('.check').addEventListener('click', function () {
//     const guess = Number(document.querySelector('.guess').value);
//     console.log(guess, typeof guess);

//     /*Let's start implementing the game logic here:
//         - Let's imagine that there is no guess - someone clicked the "check!" button without typing in a number first. So the input field is empty. The game should show some response to it on the display:*/
//     //WHEN THERE IS NO INPUT/NO GUESS:
//     if (!guess) {
//         document.querySelector('.message').textContent = 'You should enter a number here!'; // <-- .. this should be shown on the screen.
//     //WHEN THE PLAYER WINS:
//     } else if (guess === secretNumber) { //<-- checking if the guessed number is the same as the secret number/the player wins
//         document.querySelector('.message').textContent = 'Correct number :))'; //<-- when the player wins, show this
//         document.querySelector('.number').textContent = secretNumber; // we display the secret number here, when the player has guessed it!
//         document.querySelector("body").style.backgroundColor = "#60b347"; //<-- here we set the background color in case a player wins the game.
//         document.querySelector(".number").style.width = "30rem"; // <-- here we set the box width when the player wins.

//         if(score > highscore) {
//             highscore = score;
//             document.querySelector(".highscore").textContent = highscore; //ADDING FUNCTIONALITY TO THE HIGHSCORE;
//         }

//     //WHEN THE GUESS IS TOO HIGH:
//     } else if (guess > secretNumber) { // if the guess is bigger than the secret number.
//         if (score > 1) { // <-- if the guess is bigger than zero...
//             document.querySelector(".message").textContent = "Too high!";
//             score = score - 1; //or the same thing would be --> score--;
//             document.querySelector(".score").textContent = score;//here we display that score in the "Score:" element on the page
//         } else {
//             document.querySelector(".message").textContent = "You lost the game!"; // this shows up when you've guessed wrong 20 times and there's no more guesses left.
//             document.querySelector(".score").textContent = 0;
//         }
//     //WHEN THE GUESS IS TOO LOW:
//     } else if (guess < secretNumber) { // if the guess is lower than the secret number.
//         if (score > 1) { // <-- if the guess is bigger than zero...
//             document.querySelector(".message").textContent = "Too low!";
//             score = score - 1; //or the same thing would be --> score--;
//             document.querySelector(".score").textContent = score;//here we display that score in the "Score:" element on the page
//         } else {
//             document.querySelector(".message").textContent = "You lost the game!"; // this shows up when you've guessed wrong 20 times and there's no more guesses left.
//             document.querySelector(".score").textContent = 0;
//         }
//     }
// });
// // ADDING A FUNCTIONALITY TO THE AGAIN BUTTON:
// document.querySelector(".again").addEventListener("click", function() {
//     score = 20;
//     secretNumber = Math.trunc(Math.random() * 20) + 1;

//     document.querySelector(".message").textContent = "Start guessing...";
//     document.querySelector(".score").textContent = score;
//     document.querySelector(".number").textContent = "?";
//     document.querySelector(".guess").value = "";

//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";
// });

// /* ADDING A FUNCTIONALITY TO THE HIGHSCORE (the sooner you guess the secret number, the highest the score):
// - when the player wins section
// */

/* whenever we get something from the user interface(input field, f.e.), it's usually always a string,
you can see that by adding "typeof" to the "console.log(guess)" - in the input field we put a number, but it's actually a string (see in console).
To convert the string to the number, we add Number() <-- see in the example.*/

// !!! the first scenario is always to assume there is no input, and then we need to respond to that somehow.
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*IMPLEMENTING THE GAME LOGIC(the way how the game works):

We need to implement what happens when the guess is correct (when someone guesses the right number(the secret number) between 1 and 20)
We also need to implement what happens when the guess ir too low or too high.
So we have 3 scenarios: 1)didn't enter a number! 2)guessed right! 3)guessed wrong!

To start, we need to define the secret number that has to be guessed, otherwise there is nothing to compare to the number someone entered.
We want the secret number to be defined once - only when we start the application. So it has to be outside/above of the handler function. So we put it above all --> const secretNumber = ....

Now we need to work with the score. The score decreases with each wrong guess. The score starts with 20 (this is the highest score and you have to guess with first time for it to stay at 20)
The code for the score is going to be in the next line below "const secretNumber", but also in else/if statement where the guess is too low or too high.*/
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* MANIPULATING CSS STYLES WITH JAVASCRIPT
- Let's change the page background to green whenever the player guesses the right number(wins the game)! <-- done
- Also the box, where the secret number is, should get wider whenever a player wins! <-- done

We want to manipulate the style of the whole page so we need to select the whole body(<body></body>) of this page first.
See code for this right below this --> else if (guess === secretNumber) {document.querySelector('.message').textContent = 'Correct number :))';
*/

/* ADDING FUNCTIONALITY TO THE AGAIN BUTTON
Starts with:
- document.querySelector(".again").addEventListener
*/

/* ADDING FUNCTIONALITY TO THE HIGHSCORE
- Starts in the "When the player wins" else if block.
*/
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* REFACTORING CODE: THE DRY PRINCIPLE ... the same functionality, just better looking code than the one above. */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//WHEN THERE IS NO INPUT/NO GUESS:
    if (!guess) {
        displayMessage('You should enter a number here!');

//WHEN THE PLAYER WINS:
    } else if (guess === secretNumber) {
        displayMessage('Correct number :))');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

//ADDING FUNCTIONALITY TO THE HIGHSCORE:
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

//WHEN THE GUESS IS WRONG:
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
            score = score - 1;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
//ADDING A FUNCTIONALITY TO THE AGAIN BUTTON:
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
