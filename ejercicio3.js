//3. Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
// sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function upperLower(str){
    if(str==str.toUpperCase()){
        return "Mayúsculas";
    }
    else if(str==str.toLowerCase()){
        return "Minúsculas";
    }
    else{
        return "Ambas";
    }
}

console.log(upperLower("Texto"))