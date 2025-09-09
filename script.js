/* ================================
   Part 2: JavaScript Functions
   ================================ */

// Example: Local vs Global Scope
let globalMessage = "Hello from Global Scope!";

// Function with parameter and return value
function greetUser(name) {
  let localMessage = "Hello " + name + "!"; // local scope
  console.log(globalMessage); // using global variable
  return localMessage;
}

// Function to animate the box
function animateBox() {
  const box = document.querySelector(".box");

  // Toggle animation using class
  box.classList.toggle("animate");

  // Call greetUser function with parameter
  alert(greetUser("Student"));
}

// Function to toggle modal visibility
function toggleModal() {
  const modal = document.getElementById("modal");

  // Check current state and return status
  if (modal.style.display === "flex") {
    modal.style.display = "none";
    return "Modal closed";
  } else {
    modal.style.display = "flex";
    return "Modal opened";
  }
}
