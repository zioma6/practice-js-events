document.addEventListener("DOMContentLoaded", () => {

    const divEle = document.querySelector("div")

    const handleMousemove = () => {
        console.log("Mouse move")
    }

    const handleMouseleave = () => {
        console.log("Mouse leave")
    }

    divEle.addEventListener("click", () => { console.log('click')})

    divEle.addEventListener("mousemove", handleMousemove)

    divEle.addEventListener("mouseleave", handleMouseleave)

});