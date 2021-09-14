let titleLabel;
let pauseImage;
let content;

$(document).ready(function() {
  titleLabel = $("#titleLabel");
  pauseImage = $("#pauseImage");
  content = $("#content");
  
  let pause = window.location.search.substring(1).split("=")[1];

  switch(pause) {
    case "eyes":
      titleLabel.text("Pausa para tus Ojos");
      pauseImage.attr("src", "../assets/img/eyes.jpg");
      content.text(`Muchas veces pasamos todo el dia trabajando en el ordenador y en 
        nuestros ratos de descanso aprovechamos para mirar el movil sin pensar que quizas 
        deberiamos frenar el ritmo. Como descansar la vista de pantallas electronicas? 
        Muy probablemente tu mismo hayas tenido alguna vez estos habitos, pero lo cierto 
        es que con esto solo consigues que tus ojos se sientan mas cansados.`);
      break;
    case "hands":
      titleLabel.text("Pausa para tus Manos");
      pauseImage.attr("src", "../assets/img/hands.jpg");
      content.text(`Las pausas activas son breves periodos de descanso activo que siguen a los 
        periodos de tension de caracter fisico y psicologico generados durante la jornada laboral o 
        academica o durante la diversion con medios tecnologicos, para que las personas recuperen 
        energias con el fin de propiciar un desempeno eficiente en su trabajo o actividad, a traves 
        de diferentes tecnicas y ejercicios que ayudan a reducir la fatiga osteomuscular y la fatiga 
        intelectual, previniendo la aparicion del estres generado en labores o actividades mantenidas 
        por mas de 30 a 45 minutos.`);
      break;
    case "legs":
      titleLabel.text("Pausa para tus Piernas");
      pauseImage.attr("src", "../assets/img/legs.jpg");
      content.text(`En la vida laboral son grandes los retos que se deben enfrentar diariamente por 
        lo que es necesario preparar la mente y el cuerpo, a traves de ejercicios de relajacion 
        osteomuscular, antes, durante o despues de una jornada laboral, con calentamiento muscular y pausas activas.`);
      break;
    case "back":
      titleLabel.text("Pausa para tu Espalda");
      pauseImage.attr("src", "../assets/img/back.jpg");
      content.text(`Es importante cuidar la postura, seguir atentamente las indicaciones, mantener una 
      respiracion adecuada buscando una correcta aplicacion de los ejercicios, con el fin de incrementar 
      los beneficios de los mismos. Hacer diariamente dos pausas activas con una duracion de 7 minutos cada una, 
      mejora la flexibilidad, la fuerza muscular y la movilidad articular, por medio de diferentes ejercicios 
      disenados para este fin.`);
      break;
    case "head":
      titleLabel.text("Pausa para tus Cerebro");
      pauseImage.attr("src", "../assets/img/head.jpg");
      content.text(`El calentamiento y la pausa activa no sustituyen la actividad fisica regular,
        la cual se recomienda realizar adicionalmente, lo que ayuda a la disminucion de las probabilidades 
        de aparicion de enfermedades cronicas como: hipertension, diabetes, dislipidemia, enfermedad 
        pulmonar obstructiva cronica, obesidad, osteoporosis y gran numero de enfermedades, producto 
        algunas veces de habitos inadecuados adquiridos en el transcurso de la vida.`);
      break;
  }

  $("#backButton").click(function() {
    document.location.href = "pauses.html";
  });
});
