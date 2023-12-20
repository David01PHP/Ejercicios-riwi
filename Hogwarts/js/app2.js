
let casa = sessionStorage.getItem('casa');

console.log(casa);
if (casa == "Gryffindor"){
    document.getElementById('casa').classList.add('gryffindor');
    document.getElementById('titulo').innerText = "Gryffindor";
} else if (casa == "Hufflepuff"){
    document.getElementById('titulo').innerText = "Hufflepuff";
    document.getElementById('casa').classList.add('hufflepuff');
} else if (casa == "Ravenclaw"){
    document.getElementById('titulo').innerText = "Ravenclaw";
    document.getElementById('casa').classList.add('ravenclaw');
}else if (casa == "Slytherin"){
    document.getElementById('titulo').innerText = "Slytherin";
    document.getElementById('casa').classList.add('slytherin');
} else {
    console.log("no se que casa darte vuelve a intentarlo");
}

let auth = sessionStorage.getItem('auth');
if (auth != 1) {
    window.location.href = "main.html";
}