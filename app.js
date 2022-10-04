let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active-menu");
    if(mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    }
    else {
        mainMenu.classList.remove("active-menu");
    }
});




// let incrementBtns = document.querySelectorAll(".increment");
// let decrementBtns = document.querySelectorAll(".decrement");
// let productsQuantity = document.querySelectorAll(".product-quantity input");


// function Counter(incrementButton, decrementButton, inputField) {
//   this.domRefs = {
//     incrementButton,
//     decrementButton,
//     inputField,
//     minCount = 1,
//     maxCount = 5

//   };
//   this.toggleButtonState = function () {
//     this.domRefs.inputField.value;
//     this.domRefs.decrementButton.disabled = count <= minCount;
//     this.domRefs.incrementButton.disabled = coubt >= maxCount;
//   }
//   this.toggleButtonState();
