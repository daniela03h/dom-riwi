const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")
const btnExample = createButtonInfo()

// main.appendChild(btnExample)


// insert the element before the container
// main.before(btnExample)

// insert the element after the container
// main.after(btnExample)

// insert the element at the first positiion
// main.prepend(btnExample)

// insert the elements at the last positiion
// main.append(btnExample, createButtonInfo())

// replace all children
// main.replaceChildren(btnExample)

// replace the element with his children
// main.replaceWith(btnExample)

// the element is autodelete
// main.remove()

function createButtonInfo() {
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-info")
    btn.textContent = "Point"
    return btn
}

// console.log(main)
// console.log(main.children)

// const btnDark = document.querySelector(".btn-dark")
// console.log(btnDark.parentElement.parentElement);


// console.log(main.firstElementChild);

// console.log(main.lastElementChild);

console.log(main.previousElementSibling);
console.log(main);
console.log(main.nextElementSibling);