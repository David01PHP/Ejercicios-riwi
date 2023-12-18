//1
var salario = 2500000;

function comprar(){
    var compra = prompt('digita 1 o 2');
    if(compra == 1){
        salario -= 15000;
        console.log("Le caera mal porque lleva mucho en el stand");
    } else if(compra == 2){
        salario -= 23000; 
        console.log("Estara llenito y bien");
    } else {
        console.log("Le  tocara comprar algo en medellin");
    }
    console.log("Tu saldo actual es: " + salario);
}


//Caso 2//

// Tamaño original de la maleta de Hildebrando
let altoOriginal = 60;
let largoOriginal = 40;
let anchoOriginal = 20;

// Tamaño estándar para las maletas de mano
const altoEstandar = 55;
const largoEstandar = 40;
const anchoEstandar = 20;

// Calcular factores de reducción para cada dimensión
const factorReduccionAlto = altoEstandar / altoOriginal;
const factorReduccionLargo = largoEstandar / largoOriginal;
const factorReduccionAncho = anchoEstandar / anchoOriginal;

// Aplicar factores de reducción a las dimensiones originales
const nuevoAlto = altoOriginal * factorReduccionAlto;
const nuevoLargo = largoOriginal * factorReduccionLargo;
const nuevoAncho = anchoOriginal * factorReduccionAncho;

// Mostrar las nuevas dimensiones de la maleta
console.log("Dimensiones originales de la maleta:");
console.log("Alto: " + altoOriginal + " cm");
console.log("Largo: " + largoOriginal + " cm");
console.log("Ancho: " + anchoOriginal + " cm");

console.log("\nNuevas dimensiones de la maleta después de la reducción:");
console.log("Alto: " + nuevoAlto.toFixed(2) + " cm");
console.log("Largo: " + nuevoLargo.toFixed(2) + " cm");
console.log("Ancho: " + nuevoAncho.toFixed(2) + " cm");

//caso 3
/*
*ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
*a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
*está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
*por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
*01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
*binarios, además cobran 50.000 la hora.
*
*Tienen que crear un código que convierta los números binarios, a decimales y luego a
*caracteres
*
*/
    
function convertirAdecimales(binario){
    let decimal = 0;
    for (let index = 0, j = 8; index < 8; index++, j--) {
        decimal += Number(binario[index]) * Math.pow(2, j );
    }
    console.log(decimal);
    return decimal;
}
let wifi = "Wifi";
let passwordWifi = "01110010_01101001_01110111_01101001";
passwordWifi = passwordWifi.split("_");


let password = passwordWifi.map((elemento) => {
    String.fromCharCode(convertirAdecimales(elemento))
}).join("");
/*
[bin1,bin2,bin3,bin4] = passwordWifi ;
bin1 = String.fromCharCode(convertirAdecimales(bin1));
bin2 = String.fromCharCode(convertirAdecimales(bin2));
bin3 = String.fromCharCode(convertirAdecimales(bin3));
bin4 = String.fromCharCode(convertirAdecimales(bin4));
password = (bin1+bin2+bin3+bin4);
console.log(password);*/

let persona = {
    nombre: "Sarah", 
    pais: "Nigeria", 
    trabajo: "Desarrollador"
};

let nombre = persona["nombre"];
let pais = persona.pais;
let trabajo = persona.trabajo;


//4
/*al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i

*así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al
*hotel mariposas amarillas"
*/
let pedir = "Taxi me puede llevar al hotel mariposas amarillas";
console.log(pedir.replace(/[aeiou]/g,'i'));

//5
/**
* cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi
* que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara losActividades Modulo 3
* 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata,
* no pasa nada.
* si el taxista gana, se descontará del dinero disponible
 */

let pagoTaxi = 300000;
let dinero = 2500000;
let descuento = dinero - pagoTaxi;

let opcionAzarTaxista = "piedra";
let opcionAzarPersona= "tijeras";

if((opcionAzarTaxista == "tijeras" && opcionAzarPersona == "piedra" )|| (opcionAzarTaxista == "piedra" && opcionAzarPersona == "papel") || (opcionAzarTaxista == "papel" && opcionAzarPersona == "tijera" )){
    console.log("Coramos no le pagamos nada"+ " Dinero siponible "+dinero);
} else if ((opcionAzarTaxista == "piedra" && opcionAzarPersona == "papel" )|| (opcionAzarTaxista == "papel" && opcionAzarPersona == "piedra" )|| (opcionAzarTaxista == "piedra" && opcionAzarPersona == "tijeras" )){
    console.log("paga porque perdistes: "+ " Dinero disponible "+ descuento);
} else {
    console.log("empate no se hace nd: ");
}

//6
/**
 * llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de
 * vestimenta para cada cosa, se quedara 4 días
*/
function muestra(){
let colorVestimenta = "amarillo";
let bandera = true;
let vivo;

if(colorVestimenta = "amarillo"){
    if(bandera = true){
        console.log("- ir a la piscina, el agua huele raro, pero no le pone importancia");
        console.log("-si se mete, empieza a sentirse ahogado, demasiado cloro, muere");
        console.log("(terminan las vacaciones)");
    } else {
        console.log("No pasa nada: ");
    }

} else if(colorVestimenta = "verde") {
    if(bandera = true){
        console.log("aminatas, y agüita para el camino");
        console.log("si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos");
    }else{
        console.log("-si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde");
    }
   
} else if(colorVestimenta = "roja"){
console.log("- actividades en la playa");
console.log("- voleibol, juega y la pasa genial");
console.log("- nada en el mar, y monta moto");
console.log("- se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia terminan las vacaciones");
} else if(colorVestimenta = "Azul"){
console.log("actividades dentro del hotel");
console.log("1- bingo, se lo gana y aumenta su dinero");
console.log("2- bailar, y la pasa muy bien");
console.log("3- casino y apuesta, y solo se queda con pasaje de regreso (terminan las vacaciones)");
}
}

muestra();