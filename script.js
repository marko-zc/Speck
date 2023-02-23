const techInput = document.getElementById("techInput");
const techList = document.getElementById("techList");

addTech = (e) => {
    e.preventDefault();
        const listElement = document.createElement("li");
        listElement.innerText = techInput.value;
        listElement.classList.add("techItem");
        techList.appendChild(listElement);
        techInput.value = "";
}

clearTechs = () => {
    const listElements = document.getElementsByClassName("techItem");
    while (listElements.length > 0) {
        listElements[0].remove();
    }
}
