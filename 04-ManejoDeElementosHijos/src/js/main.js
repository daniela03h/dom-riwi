const main = document.querySelector("main")
const buttonExample = document.getElementById("btn-example")

buttonExample.addEventListener("click", () => {
        //Add
        //  const btnResponse = crearBoton()
        // console.log(btnResponse)
        //  main.appendChild(btnResponse)
        // main.innerHTML += `<button type="button" class="btn btn-success>hello</button>`
  
        //Remove
        // const btnFounDeleted = selectOneButton()
        // main.removeChild(btnFounDeleted)

        //Replace
        // const newButton = crearBoton()
        // const existenButon = selectOneButton()
        // main.replaceChild(newButton, existenButon)

        //Insert before
        // const newButton2 = crearBoton()
        // const btnRefer = selectOneButton()

        // main.insertBefore(newButton2, btnRefer)

        //Insert before
        const newButton2 = crearBoton()
        // const btnRefer = selectOneButton()

        main.insertBefore(newButton2, null)

    })



function crearBoton() {
    const button = document.createElement("button")
    button.setAttribute("type","button")
    button.type = "button"

    button.classList.add("btn")
    button.classList.add("btn-success")
    button.classList.add("btn", "btn-success")
    button.textContent = "hello"

    console.log(button)

    return button
}

crearBoton()

function selectOneButton(){
    const btnFounD = document.querySelector(".btn-info")
    return btnFounD

}