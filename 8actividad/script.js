const mensaje = () => {
    let nombre = document.getElementById("nombre").value;
    let sexo = document.getElementById("sexo").value;
    mensajeBienvenida = ""
    
    sexo == 1 ? mensajeBienvenida = `Bienvenida ${nombre}` : mensajeBienvenida = `Bienvenido ${nombre}`;
    
    document.getElementById("resultado").innerHTML = mensajeBienvenida;
}