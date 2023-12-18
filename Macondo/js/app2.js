/*let letra = prompt("Digita es: ");
let vocals = ["a","e","o","u","i"];
let texto = "hay muchas cosas de las que me arrepiento";

vocals.forEach(function(vocal){
    texto = texto.replaceAll(vocal, letra)
});

console.log(texto)*/
let passwordWifi = "01110010_01101001_01110111_01101001";
let contra = passwordWifi.split("_")
let string2;
for(let i = 0; contra.length; i++){
     string2 = (String.fromCodePoint(parseInt(contra[i],2)));
     console.log(string2);
}