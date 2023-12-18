let date: Date = new Date();
let year: number = date.getFullYear();

let button = document.querySelector("button")
const header = document.querySelector("header")
const main = document.querySelector("main")

const colorsHeader: Array<string> = 
["bg-green-300", "bg-red-300", "bg-yellow-300"]

const colorsFrom: Array<string> = 
["from-green-300", "from-red-300", "from-yellow-300"]

const colorsTo: Array<string> = 
["to-green-100", "to-red-100", "to-yellow-100"]

let currentIndex: number = 0;

button.addEventListener("click", () => {
    header.classList.remove(colorsHeader[currentIndex]);
    main.classList.remove(colorsFrom[currentIndex]);
    main.classList.remove(colorsTo[currentIndex]);

    currentIndex = (currentIndex + 1) % colorsHeader.length;

    header.classList.add(colorsHeader[currentIndex]);
    main.classList.add(colorsFrom[currentIndex]);
    main.classList.add(colorsTo[currentIndex]);
})