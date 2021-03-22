const operacion = () => {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let opcion = document.getElementById("opcion");
    let resultado = 0;

    switch (opcion.value) {
        case "1":
            resultado = num1 + num2;                   
            alert("el resultado fue: " + resultado);
            break;
        case "2":
            resultado = num1 - num2;                    
            alert("el resultado fue: " + resultado);
            break;
        case "3":
            resultado = num1 * num2;                    
            alert("el resultado fue: " + resultado);
            break;
        default:
            alert("que paso master no seleccionaste una opcion");
            break;
    }
}