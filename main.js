const root = document.getElementById("root");

//All section Divs Init
const sectOne = document.createElement("div");
sectOne.setAttribute("class", "inputSection");

//title div inside sextOne div
const title = document.createElement("div");
title.setAttribute("class", "title")
sectOne.appendChild(title);

//content inside sectOne div
const content = document.createElement("div");
content.setAttribute("class", "content")
sectOne.appendChild(content);



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
inputBtn.innerHTML=`<i class="fa-solid fa-plus"></i>`
inputBtn.setAttribute("class", "addBtn")

content.append(input, inputBtn)

//Text Node
const text = document.createElement("p");
text.textContent="ToDo List_"
title.appendChild(text)

//Section two data/task mapping area
const ulist = document.createElement("ul")
sectTwo.appendChild(ulist)
