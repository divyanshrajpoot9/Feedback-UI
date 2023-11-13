# Feedback-UI
### Hosted Link : https://divyanshrajpoot9.github.io/Feedback-UI/
### Java Script DOM Manipulation:
The Document Object Model (DOM) is a programming interface for web documents. It provides a structured representation of a web page, allowing you to access and manipulate its elements and content using JavaScript. Here are some basic DOM properties and methods.
document: The document object represents the entire HTML document and serves as the entry point to the DOM. It provides properties and methods to access and modify the document's structure, content, and style.

### Element Selection and Traversal:

  ### getElementById(id): Retrieves an element by its unique id attribute.
  #### getElementsByClassName(className): Returns a collection of elements with a specific class name.
  ####  getElementsByTagName(tagName): Returns a collection of elements with a specific tag name.
  ####  querySelector(selector): Returns the first element that matches the CSS selector.
  ####  querySelectorAll(selector): Returns a list of all elements that match the CSS selector.

  Certainly! This code is a simple JavaScript program that interacts with an HTML document to create a feedback card with a rating system. Let's break it down step by step:

1. **HTML Structure:**
   - There is an HTML document that includes elements with specific classes and IDs. For example, there is a card element with the class "card," a collection of elements with the class "review-container," a button with the ID "btn," and a collection of elements with the class "rating."

2. **JavaScript Code:**

   - `const card = document.getElementsByClassName("card")[0];`
     - This line selects the first element with the class "card" and assigns it to the variable `card`.

   - `const reviewContainer = document.querySelectorAll(".review-container");`
     - This line selects all elements with the class "review-container" and assigns them to the variable `reviewContainer`.

   - `const btn = document.getElementById("btn");`
     - This line selects the element with the ID "btn" and assigns it to the variable `btn`.

   - `const rating = document.querySelectorAll(".rating");`
     - This line selects all elements with the class "rating" and assigns them to the variable `rating`.

   - `let selectedRating = "";`
     - This variable is declared to store the selected rating. It is initially an empty string.

   - `reviewContainer.forEach((ele) => { ... });`
     - This loop iterates over each element in the `reviewContainer` collection.

       - `ele.addEventListener("click", (e) => { ... });`
         - For each element in `reviewContainer`, it adds a click event listener.

           - `removeActive();`
             - Calls a function `removeActive` to remove the "active" class from elements with the class "rating."

           - `selectedRating = e.target.innerText || e.target.parentNode.innerText;`
             - Sets `selectedRating` to the inner text of the clicked element or its parent node's inner text. This is used to capture the selected rating.

           - `e.target.classList.add("active");`
             - Adds the "active" class to the clicked element.

           - `e.target.parentNode.classList.add("active");`
             - Adds the "active" class to the parent node of the clicked element.

   - `btn.addEventListener("click", () => { ... });`
     - Adds a click event listener to the button with the ID "btn."

       - `if (selectedRating !== "") { ... }`
         - Checks if a rating has been selected.

           - `card.innerHTML = ...`
             - If a rating is selected, it updates the HTML content of the `card` element with a thank you message and the selected rating.

   - `function removeActive() { ... }`
     - Defines a function `removeActive` that iterates over elements with the class "rating" and removes the "active" class from them.

In summary, this code creates a simple feedback card with a rating system. When a user clicks on a rating, it becomes active, and when they click the "Submit" button, a thank you message is displayed on the card along with the selected rating. The `removeActive` function ensures that only one rating can be active at a time by removing the "active" class from other ratings.
