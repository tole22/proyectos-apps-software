var btIniciar = document.getElementById("iniciar");

function ocultarLogin (evento) {
    evento.preventDefault();
    $("#logearse").animate({
        marginTop: '-110px'
    }, 600);
}

function mostrarLogin(evento) {
    evento.preventDefault();
    $("#logearse").animate({
        marginTop: 0
    }, 600);
    $("#cerrarLogin").click(ocultarLogin);
}

function cargarDocumento() {
    btIniciar.addEventListener("click", mostrarLogin);
}
$(document).on("ready", cargarDocumento);