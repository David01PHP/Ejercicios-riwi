const estudiante = {
  nombre: "",
  edad: "",
  familia: "",
  linaje: "",
  casa: "",
  animalPatronus: "",
  cualidades: ""
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
/////////////////////////////////////////////////
/***********************************************/
/*esto para abajo ignoralo es de parte del html*/
/***********************************************/
/////////////////////////////////////////////////


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
let familia  = document.getElementById('familia');
let nombre = document.getElementById('nombre');
let edad = document.getElementById('edad');
let linaje = document.getElementById('linaje');
let cualidades = document.getElementById('cualidades');

if (linaje != "" && cualidades != 0 ){
  estudiante.linaje  = linaje.value;
  estudiante.nombre = nombre.value;
  estudiante.edad = edad.value;
  estudiante.familia = familia.value;
  
  
  if (cualidades.value == 1) {
    cualidades = ["Creatividad", "Erudicion", "Inteligencia"];
    estudiante.cualidades = cualidades;
  } else if (cualidades.value == 2) {
    cualidades = ["Valor", "Fuerza", "Audacia"];
    estudiante.cualidades = cualidades;
  } else if (cualidades.value == 3) {
    cualidades = ["Justicia", "Lealtad", "Paciencia"];
    estudiante.cualidades = cualidades;
  } else if (cualidades.value == 4) {
    cualidades = ["Ambición", "Determinación", "Astucia"];
    estudiante.cualidades = cualidades;
  } else {
    console.log("noestas haciendo nd aun");
  }
  casa(estudiante);
  console.log(estudiante);
  sessionStorage.setItem('casa', estudiante.casa);
  sessionStorage.setItem('auth', 1);
}


window.location.href="./casa.html";

}

