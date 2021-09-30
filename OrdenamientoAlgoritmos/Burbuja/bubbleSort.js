//Bubble sort - con For Cicle
function bubbleSort (arr) {
    for(let i = 0; i < arr.length; i++) {
        // j < (longitud - i)
        for(let j = 0; j < arr.length - i - 1; j++) {
            // comparar las posiciones
            if(arr[j] > arr[j + 1]) {
                // intercambia los valores
                // guardar en una variable un valor temp
                var temp = arr[j]

                // reemplazar mi valor actual con el valor adyacente
                arr[j] = arr[j + 1]
                // reemplazo el numero al valor que guardé en temporal
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const listaDeNumeros = [6,2,44,66,9,1,0,99,65,23,43,67,89,3]

console.log(bubbleSort(listaDeNumeros))