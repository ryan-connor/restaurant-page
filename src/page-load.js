console.log("another page load file in here");


let createEl = function (type, elParent, className, idName,innerText) {
    let container = document.getElementById(elParent);

    const newElement = document.createElement(type);
    newElement.classList.toggle(className);
    newElement.setAttribute("id",idName);
    newElement.innerHTML=innerText;
    container.appendChild(newElement);

}

export {createEl};
