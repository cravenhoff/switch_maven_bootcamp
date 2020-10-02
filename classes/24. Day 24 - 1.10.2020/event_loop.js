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
   
   => The Event Queue
   The event queue is the second key component of the Event Loop Mechanism, and is responsible for, as the name suggests, "queueing" event listeners (stored in the event listeners container) as and when they are triggered. In precise terms, the event queue holds the "function" that is to be executed when a specified event goes off. In the event listener example above, this function is the "function_name" provided in the event listener code/syntax.
   
   All the triggered events are "scheduled" in the event queue, waiting to be run when the "stack" (call stack) is empty and cleared out.

*/
