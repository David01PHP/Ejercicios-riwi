function operacion(){
    let operaciones = document.getElementById('operacion').value;
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    //operaciones
    if(operaciones == 'suma'){
        let suma = parseFloat(num1) + parseFloat(num2);
        document.getElementById('lbresultado').innerHTML =  " es Suma: resultado = "+suma;
        
    } else if (operaciones== 'divi') {
        let divi= parseFloat(num1) / parseFloat(num2);;
        document.getElementById('lbresultado').innerHTML = " es Division: resultado = "+divi;
    }else if (operaciones== 'resta') {
        let resta = parseFloat(num1) - parseFloat(num2);;
        document.getElementById('lbresultado').innerHTML = " es Resta: resultado = "+resta;
    }else if  (operaciones== 'multi') {
        let multi  = parseFloat(num1) * parseFloat(num2);;
        document.getElementById('lbresultado').innerHTML = " es Multiplicacion: resultado = "+multi;
    }
    //validaciones
    if(operaciones !="" ){
        document.getElementById('operacion').classList.add('is-valid');
        document.getElementById('operacion').classList.remove('is-invalid');
        document.getElementById('operacion').value = "";

    }else{
        document.getElementById('operacion').classList.add('is-invalid');
        document.getElementById('operacion').classList.remove('is-valid');
        document.getElementById('respuesta-1').innerText = "Selecciona una operacion :(";
      
    }
    if(num1 !="" ){
        document.getElementById('num1').classList.add('is-valid');
        document.getElementById('num1').classList.remove('is-invalid');
        document.getElementById('num1').value = "";
    }else{
        document.getElementById('num1').classList.remove('is-valid');
        document.getElementById('num1').classList.add('is-invalid');
        document.getElementById('respuesta-2').innerText = "El primer numero es obligatorio  :("
    }
    if(num2!=""){
        document.getElementById('num2').classList.add('is-valid');
        document.getElementById('num2').classList.remove('is-invalid'); 
        document.getElementById('num2').value = "";
    } else {
        document.getElementById('num2').classList.add('is-invalid');
        document.getElementById('num2').classList.remove('is-valid');
        document.getElementById('respuesta-3').innerText = "El segundo numero es obligatorio :(";
    }
    //falta hacer que se vacien los campos pero me quedo grande
}