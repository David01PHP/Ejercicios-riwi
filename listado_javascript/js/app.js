/*ejercicio #1 */
let num1 = 19;
let  num2 = 20;
console.log("el resultado de la suma es: ", num1 + num2);

console.log(" ");

/*ejercicio #2 */
let simpleString1 = "Hola ";
let simpleString2 = "Mundo";
console.log("La longitud total de", simpleString1 , "es: ", simpleString1.length);
console.log("La longitud total de", simpleString2 , "es: ", simpleString2.length);

console.log("");

/*ejercicio #3 */
let stringUsingString1 = "JavaScript ";
let stringUsingString2 = "Ejercicios";
console.log(stringUsingString1 + stringUsingString2);

console.log("");

/*ejercicio #4 */
let stringNewString1 = new String("Concatenar ");
let stringNewString2 = new String("Strings");
console.log(stringNewString1 + stringNewString2);

console.log("");

/*ejercicio #5 */
console.log(simpleString1.substring(2,4));

console.log("");

/*ejercicio #6 */
console.log(simpleString2.substring(2,5));

console.log("");

/*ejercicio #7 */
let concat = simpleString1.concat(simpleString2)
console.log(concat);

console.log("");

/*ejercicio #8 */
console.log("concatenacion (+)", simpleString1 + simpleString2);

console.log("");

/*ejercicio #9 */
let templateString = '${simpleString1}, ${simpleString2}';
console.log(templateString);

console.log("");

/*ejercicio #10*/
let stringWithSpaces1 = "  TrimStar  ";
let stringWithSpaces2 = "  TrimEnd  ";
console.log(stringWithSpaces1.trim() + stringWithSpaces2.trim());

console.log("");

/*ejercicio #11*/
let replace = simpleString1.replace("o","i")
console.log(replace);

console.log("");

/*ejercicio #12*/