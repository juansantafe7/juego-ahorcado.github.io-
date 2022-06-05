// controles de eventos

IngreseSuLetra.addEventListener('keyup', function() {

    this.value = this.value.replace(/[^a-zA-Z ]/g, "");

    this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    this.value = this.value.toUpperCase();

  });
  
   
  evaluarLetra.addEventListener('click', function() {

    function agregarLetra() {

      let elementoLetra = document.createElement('span');

      elementoLetra.innerHTML = letra.toUpperCase();

      letrasUsadas.appendChild(elementoLetra);

    }
   
    let letra = IngreseSuLetra.value.toUpperCase();

    let haFallado = true;

    for (var i = 0; i < palabra.length; i++) {

      if (letra == palabra[i]) {

        //i*2 se debe a que la letra es reemplazada por 2 caracteres; un guión y un espacio.

        palabraConGuiones = palabraConGuiones.replaceAt(i * 2, letra);

        haFallado = false;

      }
    }
   
    if (haFallado) {

      contadorFallos--;

      if (contadorFallos >= 0 && contadorFallos <= 7) {

        vida.innerHTML = 'El numero de vidas que te quedan son: ' + contadorFallos;

      }
   
      if (contadorFallos == 0) {

        alert("la palabra a descubrir era: " + palabra);

        dead.style.display = 'inline-block';

      }

    } else {

      if (palabraConGuiones.indexOf('_') < 0) {

        parcaTriste.style.display = 'inline-block';

      }

    }
   
    dibujar();

    limpiar();

    agregarLetra(letra);

    
  });