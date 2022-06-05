function iniciarJuego() {
    if (palabras.length == 0) {
      // Almacenamiento en localStorage inicial
      palabras = ['ARGENTINA','CHILE','BRASIL','URUGUAY','PERU','COLOMBIA','PARAGUAY','MEXICO','ECUADOR','NICARAGUA','VENEZUELA'];
      localStorage.setItem("palabras", JSON.stringify(palabras));
    }
    palabra = palabras[Math.floor(Math.random() * palabras.length)];
    //Reemplazo la palabra por guiones
    palabraConGuiones = palabra.replace(/./g, "_ ");
    salidaPalabraConGuiones.innerHTML = palabraConGuiones;
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    letrasUsadas.textContent = ''

  }

  // algoritmo de inicio
iniciarJuego()