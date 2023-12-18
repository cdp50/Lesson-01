var date = new Date();
var year = date.getFullYear();
var button = document.querySelector("button");
var header = document.querySelector("header");
var main = document.querySelector("main");
var colorsHeader = ["bg-green-300", "bg-red-300", "bg-yellow-300"];
var colorsFrom = ["from-green-300", "from-red-300", "from-yellow-300"];
var colorsTo = ["to-green-100", "to-red-100", "to-yellow-100"];
var currentIndex = 0;
button.addEventListener("click", function () {
    header.classList.remove(colorsHeader[currentIndex]);
    main.classList.remove(colorsFrom[currentIndex]);
    main.classList.remove(colorsTo[currentIndex]);
    currentIndex = (currentIndex + 1) % colorsHeader.length;
    header.classList.add(colorsHeader[currentIndex]);
    main.classList.add(colorsFrom[currentIndex]);
    main.classList.add(colorsTo[currentIndex]);
});
