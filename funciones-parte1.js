  // funcion dibujar es la siguiente

  function dibujar() {
    
    var ctx = canvas.getContext('2d');

     // Base del ahorcado 

     ctx.canvas.width = 300;

     ctx.canvas.heigth = 100;

     if (contadorFallos <= 6) {

       ctx.beginPath();

       ctx.moveTo(30, 200);

       ctx.lineTo(30, 10);

       ctx.lineTo(150, 10);

       ctx.lineTo(150, 20);
       
       ctx.stroke();

     }
    
     if (contadorFallos <= 5) { //Dibujar cabeza

       ctx.beginPath();

       ctx.arc(150, 40, 20, 0, Math.PI * 2);

       ctx.stroke();

     }

    
     if (contadorFallos <= 4) { //Dibujar cuerpo

       ctx.beginPath();

       ctx.moveTo(150, 60);

       ctx.lineTo(150, 100);

       ctx.stroke();

     }
    
     if (contadorFallos <= 3) { //Primer brazo

       ctx.beginPath();

       ctx.moveTo(150, 60);

       ctx.lineTo(130, 100);

       ctx.stroke();

     }
    
     if (contadorFallos <= 2) { // Segundo Brazo

       ctx.beginPath();

       ctx.moveTo(150, 60);

       ctx.lineTo(170, 100);

       ctx.stroke();

     }
    
     if (contadorFallos <= 1) { // Primer pierna

       ctx.beginPath();

       ctx.moveTo(150, 100);

       ctx.lineTo(170, 130);

       ctx.stroke();

     }
    
     if (contadorFallos <= 0) { //Segunda pierna

       ctx.beginPath();

       ctx.moveTo(150, 100);

       ctx.lineTo(130, 130);

       ctx.stroke();

     }
   }


   
// limpiar()

 function limpiar() {

  salidaPalabraConGuiones.innerHTML = palabraConGuiones;

  IngreseSuLetra.value = '';

  IngreseSuLetra.focus();

}