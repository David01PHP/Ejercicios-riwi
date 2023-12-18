var persons = [
    {
       nombre: "Julian",
       apellidos: "Jimenex",
       correo : "julian@gmail.com"
    },
    {
       nombre: "Andres",
       apellidos: "Martinez",
       correo : "andres@gmail.com"
    },
    {
       nombre: "carmen",
       apellidos: "matias",
       correo : "carmen@gmail.com"
    }];

    function actualizar(posicion){
       let nombre = document.getElementById('nombre_' + posicion).value;
       let apellido = document.getElementById('apellido_' + posicion).value;
       let correo = document.getElementById('correo_' + posicion).value;
       
       if (nombre != ""){
         document.getElementById('nombre_' + posicion).classList.remove('is-invalid');
         document.getElementById('nombre_' + posicion).classList.add('is-valid');
         persons[posicion].nombre = nombre;
         persons[posicion].apellidos = apellido;
         persons[posicion].correo = correo;
       } else {
         document.getElementById('nombre_' + posicion).classList.remove('is-valid');
         document.getElementById('nombre_' + posicion).classList.add('is-invalid');
       }
         
      
    }

    console.log(persons);