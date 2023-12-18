String.prototype.replaceAt = function(index, caracter) {
    return this.substring(0 , index) + caracter + this.substring(index+ caracter.length);
}


let palabras = ['David','Andres','Monterrosa','Gulfo','Nada','Adivina','Hola','Nose','nunca'];
let palabraSelect =palabras[Math.floor(Math.random() * palabras.length)].toLocaleLowerCase();
let palabraGuiones = palabraSelect.replace(/./g, "_ ");
let contadorFallos = 0;

document.querySelector('#palabraGuiones').innerHTML = palabraGuiones;
document.querySelector('#calcular').addEventListener('click', () =>{
    let letra = document.querySelector('#letra').value;
    var fallado = true;
    for(const i in palabraSelect){
        if(letra == palabraSelect[i]){
           palabraGuiones = palabraGuiones.replaceAt(i*2,letra);
           fallado = false;

        }
        
    }

    if(fallado){
        contadorFallos++;
        document.querySelector('#ahorcado').style.backgroundPosition = -(285*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            document.querySelector('#perdedor').style.display = 'flex';
        }
    }else {
        if(palabraGuiones.indexOf('_') < 0){
            document.querySelector('#ganador').style.display = 'flex';
        }
    }
    document.querySelector('#palabraGuiones').innerHTML = palabraGuiones;
    document.querySelector('#letra').value = "";
    document.querySelector('#letra').focus();
})






















/*

let palabra = "Monterrosa";
let letra = document.getElementById('letra').value;
var objectPalabra = palabra.split("");
console.log(objectPalabra);

function pru(letra){
    let palabraFor = "";
    for(let i = 0 ; i < objectPalabra.length; i++){
        if(letra != objectPalabra[i] ){
            document.getElementById('palabraLista').innerHTML += '<li>'+objectPalabra[i] +'</li>';
        }
        

    }

    
console.log(palabraFor);
}

console.log(letraResult);
*/


