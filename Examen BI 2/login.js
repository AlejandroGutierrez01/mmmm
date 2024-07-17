function verificar() {
    event.preventDefault()
    let user = document.getElementById("user").value
    let clave = document.getElementById("contra").value

    if (user === "ESFOT" && clave === "Esfot123*") {
        window.location.href = "requisitos.html"
    }
    else{
        alert("Usuario o contraseña incorrectos. Por favor ingrese nuevamente.")
    }     
}