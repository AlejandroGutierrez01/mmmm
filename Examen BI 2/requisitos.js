function verificarFormulario() {

    let nombres = document.getElementById("nombres").value.trim()
    let edad = parseFloat(document.getElementById("edad").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let calificacion = parseFloat(document.getElementById("califi").value)
    let correo = document.getElementById("correo").value.trim()

    let esApto = true
    let mensaje = `Señor(a) ${nombres} `

    if (nombres === "") {
        esApto = false
        document.getElementById("nombres").classList.add("error")
    } else {
        document.getElementById("nombres").classList.remove("error")
    }

    if (isNaN(edad) || edad < 18) {
        esApto = false
        document.getElementById("edad").classList.add("error")
    } else {
        document.getElementById("edad").classList.remove("error")
    }

    if (isNaN(altura) || altura < 1.60) {
        esApto = false
        document.getElementById("altura").classList.add("error")
    } else {
        document.getElementById("altura").classList.remove("error")
    }

    if (isNaN(calificacion) || calificacion < 75) {
        esApto = false
        document.getElementById("califi").classList.add("error")
    } else {
        document.getElementById("califi").classList.remove("error")
    }

    if (correo === "") {
        esApto = false
        document.getElementById("correo").classList.add("error")
    } else {
        document.getElementById("correo").classList.remove("error")
    }

    if (esApto) {
        alert(mensaje + "SÍ es APTO para adquirir la Licencia puesto que cumple con todos los requisitos mencionados.")
        document.getElementById("requisitosForm").reset()
        localStorage.setItem("nombre", nombres)
        window.location.href = "evaluacion.html"
    } else {
        alert(mensaje + "NO es APTO para adquirir la Licencia de conducir, puesto que no cumple con todos los requisitos mencionados.")
    }
}

function borrarFormulario() {
    document.getElementById("requisitosForm").reset()
    document.querySelectorAll(".error").forEach(element => element.classList.remove("error"))
}