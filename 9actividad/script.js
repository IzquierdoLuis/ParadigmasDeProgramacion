const invert = () => {
    let text = document.getElementById("text").value;

    message = text.split('');//convierte el string en arreglo
    message = message.reverse('');//invierte un arreglo
    message = message.join('');//convierte el arreglo en string

    document.getElementById("txet").innerHTML = message;    
}