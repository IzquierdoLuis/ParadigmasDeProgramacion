const mensaje = () => {
    let nombre = document.getElementById("nombre").value;
    let sexo = document.getElementById("sexo").value;
    mensajeBienvenida = ""
    
    mensajeBienvenida = sexo == 1 ? `Bienvenida ${nombre}` :
                                    `Bienvenido ${nombre}`;
    
    document.getElementById("resultado").innerHTML = mensajeBienvenida;
}