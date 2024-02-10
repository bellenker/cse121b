/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Elizabeth Wilhite';
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = ("images/personalimage.jpg");

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.getElementById('year').textContent;
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
imageElement.setAttribute('src', profilePicture);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let food = ["alfredo", "loaded baked potato", "lasagna" , "ice cream" , "beef stew on rice"];
const fast = food.push('macaroni');
console.log(fast);
console.log(food);
foodElement.innerHTML += `<br>${food}`;
food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;


