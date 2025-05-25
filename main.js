const root = document.getElementById("root");

//All section Divs Init
const sectOne = document.createElement("div");
sectOne.setAttribute("class", "inputSection");

const sectTwo = document.createElement("div");
sectTwo.setAttribute("class", "itemSection");

const footer = document.createElement("div");
footer.setAttribute("class", "footSection");
//Appending all section Divs
root.append(sectOne, sectTwo, footer);

//Input section engineering
const attr = {
    class: "iputData",
    placeholder: "Enter Task...",
    type: "text"
};

const input = document.createElement("input");
Object.entries(attr).forEach(([Key, value]) => {
    input.setAttribute(Key, value)
})

const inputBtn = document.createElement("button");
inputBtn.setAttribute("class", "addBtn")

sectOne.append(input, inputBtn)
