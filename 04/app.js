const divElements = document.querySelectorAll('div');
const bodyElement = document.querySelector('body');

const handleClick = (event) => {
    event.stopPropagation(); 

    divElements.forEach((div) => {
        const delay = parseInt(div.dataset.time); 
        setTimeout(() => {
            div.classList.add("clicked"); 
        }, delay);
    });
};

const handleClickBody = () => {
    divElements.forEach((div) => {
        div.classList.remove("clicked"); 
    });
};

divElements.forEach((div) => {
    div.addEventListener("click", handleClick);
});

bodyElement.addEventListener("click", handleClickBody);
