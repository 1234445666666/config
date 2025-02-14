const container = document.getElementById("container");


const paragraph = document.createElement("p");

paragraph.textContent = "text";

container.appendChild(paragraph);


const newparagraph = document.createElement("p");

newparagraph.textContent = "text2";

container.insertBefore(newparagraph , paragraph);

const clonebutton = document.getElementById("cloneButton");

const button = document.getElementById("cloneButton");

clonebutton.addEventListener("click" , () => {
    const clonebutton = button.cloneNode(false);
    document.body.appendChild(clonebutton);
});






