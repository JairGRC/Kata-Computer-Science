/**
 * Algoritmo de búsqueda binaria:
 * 
 * Requisitos:
 * 
 * 1) Debemos mandar un arreglo ordenado
 * 
 * Pasos:
 * 
 * 1) Conocer el elemento que voy a buscar
 * 2) Necesitamos un inicio (principio 0)
 * 3) longitud
 * 4) Partir la lista -> comparacion
 * 
 */

const myArray = [4, 7, 10, 11, 55, 71, 89, 100, 2000]

const binarySearch = (arr, elementToFind) => {
    let min = 0, max = arr.length, mid = null, current = null

    while (min <= max) {
        mid = Math.floor((min + max) / 2)
        current = arr[mid]

        if (elementToFind === current) {
            return current
        }

        if (elementToFind > current) {
            min = mid + 1
        }

        if (elementToFind < current) {
            max = mid - 1
        }
    }

    return -1
}


const search = binarySearch(myArray, 15)
if (search >= 0) {
    console.log(`Si existe, ${search}`)
}

if (search === -1) {
    console.log('No existe')
}