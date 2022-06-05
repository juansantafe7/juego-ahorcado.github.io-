// controles de eventos (agregar-palabra.html)

inputAgregarPalabra.addEventListener('keyup', function() {

    this.value = this.value.replace(/[^a-zA-Z ]/g, "");

    this.value = this.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    this.value = this.value.toUpperCase();

  });