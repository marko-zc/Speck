const techInput = document.getElementById("techInput");
const techList = document.getElementById("techList");
const techForm = document.getElementById("techForm");
const removeAllBtn = document.getElementById("removeAllBtn");

techForm.addEventListener("submit", addTech);
removeAllBtn.addEventListener("click", clearTechs);

function addTech(e) {
    e.preventDefault();
    const listElement = document.createElement("li");
    listElement.innerText = techInput.value;
    listElement.classList.add("techItem");
    techList.appendChild(listElement);
    techInput.value = null;
}

function clearTechs() {
    const listElements = Array.from(document.getElementsByClassName("techItem"));
    
    listElements.forEach(el => {
        el.remove();
    })
}
