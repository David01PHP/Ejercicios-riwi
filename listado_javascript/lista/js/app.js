var allPersonas = [];

function deleteDate(){
    allPersonas.pop();

}

function addPersona(){
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let precio = document.getElementById('precio').value;
    let personas = {
        nombre : nombre,
        descripcion : descripcion,
        precio : precio
    }
    allPersonas.push(personas);
    if(nombre != "" && descripcion != "" && precio != ""){
  
        var fila = "<tr><td>"+nombre+"</td><td>"+descripcion+"</td><td>"+precio+"</td><td>"+"<button type='button' class='btn btn-danger' onclick='deleteDate()'>Eliminar</button>";
        document.getElementById("cajita").innerHTML += fila;



    }


   /* if(precio != "" || descripcion != "" || nombre != ""){
        document.getElementById('nombre').classList.add('is-valid');
        document.getElementById('nombre').classList.remove('is-invalid');
        document.getElementById('nombre').value = "";
        document.getElementById('precio').classList.add('is-valid');
        document.getElementById('precio').classList.remove('is-invalid');
        document.getElementById('precio').value = "";
        document.getElementById('descripcion').classList.add('is-valid');
        document.getElementById('descripcion').classList.remove('is-invalid');
        document.getElementById('descripcion').value = "";


    }
    else{
        document.getElementById('precio').classList.remove('is-valid');
        document.getElementById('precio').classList.add('is-invalid');
        document.getElementById('respuesta-3').innerHTML = "El precio es obligatorio";

        document.getElementById('descripcion').classList.remove('is-valid');
        document.getElementById('descripcion').classList.add('is-invalid');
        document.getElementById('respuesta-2').innerHTML = "La descripcion es obligatorio";

        document.getElementById('nombre').classList.remove('is-valid');
        document.getElementById('nombre').classList.add('is-invalid');
        document.getElementById('respuesta-1').innerHTML = "El nombre es obligatorio";


    }*/
    //nombre
    if(nombre != ""){
        document.getElementById('nombre').classList.add('is-valid');
        document.getElementById('nombre').classList.remove('is-invalid');
        document.getElementById('nombre').value = "";
    }else{
        document.getElementById('nombre').classList.remove('is-valid');
        document.getElementById('nombre').classList.add('is-invalid');
        document.getElementById('respuesta-1').innerHTML = "El nombre es obligatorio";   
    }
    //descripcion
    if(descripcion != ""){
        document.getElementById('descripcion').classList.add('is-valid');
        document.getElementById('descripcion').classList.remove('is-invalid');
        document.getElementById('descripcion').value = "";
        
    }else{
        document.getElementById('descripcion').classList.remove('is-valid');
        document.getElementById('descripcion').classList.add('is-invalid');
        document.getElementById('respuesta-2').innerHTML = "La descripcion es obligatorio";
    }
    //precio
    if(precio != ""){
        document.getElementById('precio').classList.add('is-valid');
        document.getElementById('precio').classList.remove('is-invalid');
        document.getElementById('precio').value = "";
    }else{
        document.getElementById('precio').classList.remove('is-valid');
        document.getElementById('precio').classList.add('is-invalid');
        document.getElementById('respuesta-3').innerHTML = "El precio es obligatorio";    
    }
    //falta validar bien cuando envia datos y si falta uno se borra todo no deberiapasar.
}

