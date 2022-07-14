//5. Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
// Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".

function palindrome(str){
    str = str.toUpperCase();
    let array = [];
    let spacedArray = str.split("");

    for(let i=0; i<spacedArray.length;i++){
        if(spacedArray[i]!=" "){
            array.push(spacedArray[i]);
        }
    }
    for(let i=0; i<array.length;i++){
        if(array[i]!=array[array.length-(1+i)]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("La ruta nos aporto otro paso natural"));