function calificar() {
    event.preventDefault();
    const respuestasCorrectas = {
        pregunta1: "Disminuir la velocidad y detenerse.",
        pregunta2: "Detenerse y mostrar las credenciales (licencia y matrícula)"
    };
    const nombre = localStorage.getItem("nombre") || "Estudiante";
    
    let puntos = 0;

    const pregunta1 = document.getElementById("pregunta1").value;
    const pregunta2 = document.getElementById("pregunta2").value;

    if (pregunta1 === respuestasCorrectas.pregunta1) {
        puntos += 5;
    }

    if (pregunta2 === respuestasCorrectas.pregunta2) {
        puntos += 5;
    }

    if (puntos >= 5) {
        alert(`Felicitaciones ${nombre}, su inscripción se ha realizado exitosamente. Calificación: ${puntos}/10`);
    } else {
        alert(`Lo sentimos ${nombre}, su inscripción se ha rechazado, por favor vuelva a intentarlo. Calificación: ${puntos}/10`);
    }
}