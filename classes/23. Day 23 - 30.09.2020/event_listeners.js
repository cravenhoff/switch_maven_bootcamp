/* EVENTS LISTENERS IN JAVASCRIPT */

/*

  => Event Listeners
  Event listeners run in the browser and "listen out" for specific, predefined events of the mouse. The event listener will trigger a specific function (or program) to run "when" an event is triggered.
  Syntax: webpageComponent.addEventListener(type, func)
  Syntax: webpageComponent.addEventListener(eventTypeToListenOutFor, functionToRunWhenEventIsTrigger)

*/

/* Create a button in the browser as the webpage component to tie the event listener to. */
// <button onclick="hello()"></button>

// Create the script - the function to run when the event is triggered through an event listener.
function hello() {
  console.log("Greetings");
}

// Add event listener
let btn = document.querySelector("button"); // Selected the button of the webpage
btn.addEventListener("click", hello); // Added a "click" event listener to the button, which will run the hello() function when the button is click (when the event is triggered)
