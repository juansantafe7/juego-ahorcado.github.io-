//Función para reemplazar el caracter por la letra
String.prototype.replaceAt=function(index, character) { return this.substr(0, index) + character + this.substr(index+character.length); }

// variables de elementos HTML

let letrasUsadas = document.getElementById('letras-usadas');

let contenedorLetras = document.getElementById('contenedor-letras');

let IngreseSuLetra = document.getElementById('IngreseSuLetra');

let evaluarLetra = document.getElementById('evaluarLetra');

let vida = document.getElementById('vida');

let dead = document.getElementById('dead');

let parcaTriste = document.getElementById('parca-triste');

let canvas = document.getElementById('pizarra');

let salidaPalabraConGuiones = document.getElementById('salidaPalabraConGuiones');

let inputAgregarPalabra = document.getElementById('inputAgregarPalabra');


// variables globales

var palabras = [];

var palabra = ''

var palabraConGuiones = ''

let contadorFallos = 7;


   
 








