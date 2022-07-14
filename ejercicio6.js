//6. Escribir una función que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
//Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 36.000 veces esta operación.

function dice(){
    let array = [];
    for(let j=0; j<=(6+6);j++){
        array[j]=0;
    }
    for(let i=0; i<36000; i++){
        let dice1 = Math.round(Math.random()*5 + 1);
        let dice2 = Math.round(Math.random()*5 + 1);
        let sum = dice1 + dice2;
        array [sum]= array[sum] + 1;
    }
    console.log(array);
}

dice();