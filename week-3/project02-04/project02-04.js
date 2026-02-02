/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Marcellino Modesto
      Date: 2/1/2026   

      Filename: project02-04.js
 */

// define constants
 const CHICKEN_PRICE = 10.95;
 const HALIBUT_PRICE = 13.95;
 const BURGER_PRICE = 9.95;
 const SALMON_PRICE = 18.95;
 const SALAD_PRICE = 7.95;
 const SALES_TAX = 0.07;

 //Event handlers for menu items
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

//Define the calcTotal function
 function calcTotal() {
   let totalCost = 0;
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   totalCost += buyChicken ? CHICKEN_PRICE : 0;
   totalCost += buyHalibut ? HALIBUT_PRICE : 0;
   totalCost += buyBurger ? BURGER_PRICE : 0;
   totalCost += buySalmon ? SALMON_PRICE : 0;
   totalCost += buySalad ? SALAD_PRICE : 0;

   document.getElementById("foodTotal").innerHTML = formatCurrency(totalCost);

   let taxAmount = totalCost * SALES_TAX;
   document.getElementById("foodTax").innerHTML = formatCurrency(taxAmount);

   let orderTotal = totalCost + taxAmount;
   document.getElementById("totalBill").innerHTML = formatCurrency(orderTotal);



   
   
 }




// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
