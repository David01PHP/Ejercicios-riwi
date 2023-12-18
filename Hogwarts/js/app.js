const estudiante = {
  nombre: "David",
  edad: 21,
  familia: ["Elianis", "Nelson"],
  linaje: "Mestizo",
  casa: "",
  animalPatronus: "",
  cualidades: ["Creatividad", "Erudición", "Inteligencia"],
};

//2
const clases = {
  transformaciones: "Profesor Kevin Slughorn",
  herbologia: "Profesor Maria Umbridge",
  pociones: "Profesor Liliana McGonagall",
  encantamientos: "Profesora Jackie",
  defensaContraLasArtesOscuras: "Profesor Robinson Snape",
  animalesMagicos: "Profesor David Filch",
  historiaDeMagia: "Profesor Ronald Sprout",
};

// Paso 4
function casa(estudiante) {
  if ((estudiante.cualidades.includes("Valor") ||
    estudiante.cualidades.includes("Fuerza") ||
    estudiante.cualidades.includes("Audacia")) &&
    (estudiante.linaje === "Mestizo" ||
    estudiante.linaje === "Muggle" ||
    estudiante.linaje === "Sangre pura")) {

    estudiante.casa = "Gryffindor";

  } else if ((estudiante.cualidades.includes("Justicia") ||
    estudiante.cualidades.includes("Lealtad") ||
    estudiante.cualidades.includes("Paciencia")) &&
    (estudiante.linaje === "Mestizo" ||
    estudiante.linaje === "Muggle")) {

    estudiante.casa = "Hufflepuff";

  } else if (
    (estudiante.cualidades.includes("Creatividad") ||
    estudiante.cualidades.includes("Erudición") ||
    estudiante.cualidades.includes("Inteligencia")) &&
    (estudiante.linaje === "Mestizo" ||
    estudiante.linaje === "Muggle" ||
    estudiante.linaje === "Sangre pura")) {

    estudiante.casa = "Ravenclaw";

  } else if (
    (estudiante.cualidades.includes("Ambición") ||
    estudiante.cualidades.includes("Determinación") ||
    estudiante.cualidades.includes("Astucia")) &&
    estudiante.linaje === "Sangre Pura") {

    estudiante.casa = "Slytherin";

  }
  console.log(estudiante.casa);
}
casa(estudiante);

// Paso 5
class ClaseTransformaciones{
  constructor(boggartpresente,nombreProfesor, horario){
    this._boggartpresente = boggartpresente,
    this._nombreProfesor = nombreProfesor,
    this._horario = horario
  }
  get boggartpresente(){
    return  this._boggartpresente;
  }
  realizarTransformacionRiddikulus(boggart){
    if(boggart != false){
      console.log("Riddikulus");
    } else {
      console.log("no hay un boggart presente");
    }
  } 
  enfrentarBoggart(boggart){
    if(boggart != false){
      console.log("Riddikulus");
    } else {
      console.log("no hay un boggart presente");
    }
  }
} 
const claseTransformaciones = new  ClaseTransformaciones(true, "Profesor Kevin Slughorn","Mañana");


claseTransformaciones.realizarTransformacionRiddikulus(claseTransformaciones._boggartpresente);

//



function generarAnimalPatronus(){
  const defensaContraLasArtesOscuras = ["Fenix","Cuervo","Zorro","Cisne","Cabra"];
  const animalSeleccionado = Math.floor(Math.random() * defensaContraLasArtesOscuras.length);

  estudiante.animalPatronus = defensaContraLasArtesOscuras[animalSeleccionado];

  console.log(estudiante);

}
generarAnimalPatronus();

//paso 6
class ClaseDefensaArtesOscuras{
  constructor(boggartpresente,nombreProfesor, horario){
    this._boggartpresente = boggartpresente,
    this._nombreProfesor = nombreProfesor,
    this._horario = horario
  }
}


// defender dementor
function dementor(){

  let dementor = true;

  if (dementor == true && estudiante.animalPatronus != "") {
    console.log("Detuvistes el dementor!!");
    
  } else {
    console.log("Fuistes absorbido por el dementor y llevado ala enfermeria");
  }
}
dementor();


console.log(estudiante);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

//funcion para registrar

function registrar(){
  let nombre = document.getElementById('nombre');
  let edad = document.getElementById('edad0');
  let linaje = document.getElementById('linaje');
  let cualidades = document.getElementById('cualidades');



}
