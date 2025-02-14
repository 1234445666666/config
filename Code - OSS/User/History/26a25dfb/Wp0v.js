const container = document.getElementById("container");


const paragraph = document.createElement("p");

paragraph.textContent = "text";

container.appendChild(paragraph);


const newparagraph = document.createElement("p");

newparagraph.textContent = "text2";

container.insertBefore(newparagraph , paragraph);

const clonebutton = document.getElementById("cloneButton");

const button = document.createElement("button");

clonebutton.addEventListener("click" , () => {
    const clonebutton = button.cloneNode(true);
    container.appendChild(clonebutton);
});


const clonedButton = button.cloneNode(true);
document.body.appendChild(clonedButton);