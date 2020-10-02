/* THE EVENT LOOP */

/*

   => The Event Loop
   The event loop is a JavaScript mechanism that helps to keep track of events in the browser window and user interactions.
   
   The event loop is managed by the browser and consists of the following three core components:
   1. Event Listeners Container
   2. The Event Queue
   3. Stack
   
   => Event Listeners Storage / Container
   The event listeners container keeps track of and "stores" every registered event listener created in the program.
   These event listeners are tracked by the JavaScript Browser and continuously fed to it or "broadcasted".
   Basically, anytime the browser comes across an event listener in the code, it throws it (or stores it) into the Event Listeners Container.
   
   Eg: htmlElement.addEventListener("event_type", "function_name");
   In the above example, the event_type specified in the event listener, is tied to a function that's invoked when that particular event is triggered on the htmlElement specified.

*/
