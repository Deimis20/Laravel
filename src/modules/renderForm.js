import form from "./form"; //modulio importas

const renderFrom = ()=>{
    let formElement = document.createElement('form');
    formElement.className = "form-line";
    formElement.innerHTML = form();
    document.querySelector('.card-body').appendChild(formElement)
}

export default renderFrom