const buttons = document.querySelectorAll("button");

const handelCLick = (event) => {
    console.log('clicked')

    event.target.innerText = "clicked"    

    event.target.removeEventListener("click", handelCLick)
}

buttons.forEach((button) => {
    button.addEventListener("click", handelCLick)
})
