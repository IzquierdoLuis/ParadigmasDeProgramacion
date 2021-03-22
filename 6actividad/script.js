const cambiarImagen = () => {
    let foco = document.getElementById("foco");
    let imagen = document.getElementById("imagen");

    if (foco.src.match('focoOff')) {
        foco.src = "./focoOn.png";
        imagen.src = "./tenor.gif";
    } else {
        foco.src = "./focoOff.png";
        imagen.src = "./OIP.jfif";      
    }
}