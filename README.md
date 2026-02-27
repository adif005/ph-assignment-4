1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   getElementById---only find the specific id element from dom.
   getElementsByClassName-----its find the same class elements from dom
   querySelector----it give us the first maching tag/class/ element from dom
   querySelectorAll---it give us the all maching tag/class/ elements from dom
2. How do you create and insert a new element into the DOM?
  create------by using document.createElement("div/p/etc")
insert----parent.appendChild('newchild')
3. What is Event Bubbling? And how does it work?
  When an event happens on an element (like a click), it doesn't just stay there. It "bubbles up" to its parents. 
4.   What is Event Delegation in JavaScript? Why is it useful?
without using too much eventListener to evety child Elements.only add a eventListener to the parent elememt.
it reduce the memory uses
5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault()--- Stops the browser's default action
stopPropagation()--- Stops the event from bubbling
