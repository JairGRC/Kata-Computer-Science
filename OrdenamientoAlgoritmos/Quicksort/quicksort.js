// Metodo quicksort 
let arr=[3,6,1,8,2,3,6,3,2,5,6]

function quicksort(arr,primero,ultimo){
    let center=Math.floor((primero+ultimo)/2),pivot=arr[center],i=primero,j=ultimo
    do {
        while (arr[i]<pivot) {
            i++
        }
        while (arr[j]>pivot) {
            j--
        }
        if(i<=j){
            let temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i++
            j--
        }
    } while (i<=j)
    if(primero<j){
        quicksort(arr,primero,j)
    }
    if(i<ultimo){
        quicksort(arr,i,ultimo)
    }
}
quicksort(arr,0,arr.length-1)
console.log(arr)