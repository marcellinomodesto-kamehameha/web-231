/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Marcellino Modesto
      Date: 1/25/2026

      Filename: project02-02.js
 */

// Function to validate the form
function verifyForm() {
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

//Check if all fields are filled
if (name && email && phone) {
        window.alert("Thank you!");
    } else {
        window.alert("Please fill in all fields");
    }
}      

// Attach event listener to the submit button
document.getElementById("submit").addEventListener("click", verifyForm);
 