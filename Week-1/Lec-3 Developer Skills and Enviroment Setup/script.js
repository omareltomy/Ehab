// querySelector() is treated like CSS
// querySelectorAll() Same like querySelector but for multiple items
// getElementById() Is for getting elements by their ID
// getElementsByClassName() Is for getting elements by their ClassNames and it returns a collection of elements Named HTMLCollection
// getElementsByTagName() is for getting Elements by their tag names

const header = document.querySelector(".header");
header.addEventListener("click", () => {
    header.style.color = "red";
    header.style.backgroundColor = "black";
    header.style.fontFamily = "inter";
    header.style.fontSize = "13px";
})

// style.backgroundColor = "black";
// style.fontFamily = "inter";
// style.fontSize = "13px";

// console.log(header.innerHTML, " ,", header.innerText);
// //style
// //innerText
// //innerHTML

// //