//Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor.
//toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
function toArray(obj) {
    return Object.entries(obj);
}
const obj = { a: 1, b: 2 };
const result = toArray(obj);
console.log(result); 