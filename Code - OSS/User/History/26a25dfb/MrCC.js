//1

const container = document.getElementById("container");


const paragraph = document.createElement("p");

paragraph.textContent = "text";

container.appendChild(paragraph);


const newparagraph = document.createElement("p");

newparagraph.textContent = "text2";

container.insertBefore(newparagraph , paragraph);

//2

const clonebutton = document.getElementById("cloneButton");

const button = document.getElementById("cloneButton");

const container1 = document.createElement("div");

clonebutton.addEventListener("click" , () => {
    const clonebutton = button.cloneNode(true);
    container1.appendChild(clonebutton);
});

//3

const template = document.getElementById("itemTemplate");
const list = document.getElementById("itemList");

const item = template.content.cloneNode(true);

list.appendChild(item);


//4


const removableList = document.getElementById("removableList");
const removeButton = document.getElementById("removeButton");

removeButton.addEventListener("click" , () => {
    removableList.removeChild(removableList.firstElementChild);
});

//5

const table = document.getElementById("myTable");

table.addEventListener("click" , (event) => {
    if (event.target.tagName === "TH") {
        event.target.classList.toggle("svet");
    }

    else if (event.target.tagName === "TD") {
        event.target.classList.toggle("svet");
    }

})

// const list = document.getElementById('list');
// list.addEventListener('click', (event) => {
//   if (event.target.tagName === 'LI') {
//     alert(`Вы нажали на ${event.target.textContent}`);
//   }
// });















