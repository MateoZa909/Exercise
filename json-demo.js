let infoCurso = {
    "titulo": "Aprende Node.JS",
    "numVistas": 45642,
    "numLikes": 21112,
    "temas": [
        "JavaScript",
        "Node.js"
    ],
    "esPublico": true
};

// Objeto -> Cadena  de caracteres
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso); 

// console.log(infoCursoJSON);
// console.log(typeof infoCursoJSON);

// Cadena de caracteres -> Objeto
let inforCursoObjeto = JSON.parse(infoCursoJSON);
// console.log(inforCursoObjeto);
// console.log(typeof inforCursoObjeto);


// Ejercicio 1
let arreglo = {
    "title": "Parfums",
    "brands": [
        "Creed",
        "Acqua Di Gio",
        "MontBlanc"
    ],
    "cost": [
        1300500,
        580000,
        450000
    ]
}

let convertToText = JSON.stringify(arreglo);
console.log(convertToText);

let ConvertToJson = JSON.parse(convertToText);
console.log(ConvertToJson);


// Ejercicio 2
