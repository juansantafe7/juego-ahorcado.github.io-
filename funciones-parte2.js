function mostrarPalabra() {

    resultado.innerHTML = '';

    let datos = JSON.parse(localStorage.getItem("palabras"));

    for (let dato of datos) {

      let datoParrafo = document.createElement('li');

      datoParrafo.innerText = dato;

      resultado.appendChild(datoParrafo);

    }
  }

  function agregarPalabra() {

    let agrego = inputAgregarPalabra.value;

    agrego = agrego.toUpperCase();

    palabras = JSON.parse(localStorage.getItem("palabras"));

    if (agrego !== '') {

      palabras.push(agrego);

    }

    localStorage.setItem("palabras", JSON.stringify(palabras));
    
  }
