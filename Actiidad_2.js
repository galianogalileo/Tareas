// Ingreso de datos
var p1 = prompt("Ingrese palabra 1")
var p2 = prompt("Ingrese palabra 2")


// Asigna cada palabra a una variable para conocer la longitud
var c1 = p1.length
var c2 = p2.length
var d = 0

// Compara cada palabra mediante la condición if para conocer si son iguales o cual tiene más caracteres
if (c1 == c2){
  alert("Longitud de la palabra 1: " + c1 + " caracteres" + "\n" + "Longitud de la palabra 2: " + c2 + " caracateres" + "\n" + "La longitud de las palabras es la misma")
}else if (c1 > c2){
  alert("Longitud de la palabra 1: " + c1 + " caracteres" + "\n" + "Longitud de la palabra 2: " + c2 + " caracateres" + "\n" + "La primer palabra es más larga que la segunda")
  d = 1
}else if (c2 > c1){
  alert("Longitud de la palabra 1: " + c1 + " caracteres" + "\n" + "Longitud de la palabra 2: " + c2 + " caracateres" + "\n" + "La segunda palabra es más larga que la primera")
  d = 2
}

// Muestra ambas palabras en orden alfabetico
let items = [p1, p2];
items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }));
alert("Palabras ordenadas alfabeticamente: " + items)

// Muestra en letras mayusculas la palabra más corta
if (d == 1){
  alert("Palabra más corta en mayucula" + p2.toUpperCase());
}else if (d == 2){
  alert("Palabra más corta en mayuscula: " + p1.toUpperCase());
}else {
  alert("Palabras de la misma longitud en mayuscula: " + p1.toUpperCase());
}