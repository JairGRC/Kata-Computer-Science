class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
    
    
}

class LinkedList{
    constructor(){
        this.head=null // trackea el primer elemento de la lista
        this.tail=null // tracke el ultimo elemento
        this.length=0
    }
    isEmpty(){
        return this.length===0
    }
    push(value){
        const newNode= new Node(value) //Asignando el valor a la Interface Node, entoncones tendrá acceso a sus metodos y props
        if(this.isEmpty()){ // Validar si la lista esta vacia
            this.head=newNode // asignamos el nuevo nodo al head(primer elemento)
            this.tail=newNode //asignnamos el nuevo nodod al tail (ultimo elemento)
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
    }
    pop(){
        /* ---------Para remover nodos de mi lista:-----------
            Verificar si la lista esta vacia
            Verificar el element next de mi nodo
            Actualizar el tail pointer a que apunte al current node (Head)
            Asignar la nueva tail node que apunte a null
            Decrementar la longitud
            El metodo pop() debe retornar el nuevo tail
        */
        if(this.isEmpty()){
            return null
        }else if(this.length===1){
            const nodeToRemove=this.head
            this.head=null
            this.tail=null
            this.length--
            return nodeToRemove
        }else{
            /* Cuando hay muchos nodos en la lista
            //Asignar nuestro apuntador a la cabeza*/
            let currentNode=this.head

            // remover el ultimo element en la lista
            const nodeToRemove=this.tail
            
            // creo variable para guardar lo que sera mi nueva tail 
            let newTail 
            
            while(currentNode){  //mientras mi currentNode  exista
                if(currentNode.next===nodeToRemove){ // si el next del current es igual al elemento a remover
                    newTail=currentNode // entonces la nueva tail sera el element currente
                    break // termina condición 
                }
                currentNode=currentNode.next  // currentNode le asigno a su next 
            }
            newTail.next= null  // el next de mi nuevo tail tiene que ser null(por se ultimo y siempre apuntan a null)
            this.tail=newTail // asignamos la tail al nuevo valor de tail
            this.length--  // decrementamos longitud
            return nodeToRemove // retornamos valor que movimos 

        }
    }

    get (index) {
        // primero tenemos que confirmar que el index este dentro de los bordes de la pila (es decir su longitud)
        if (index < 0 || index > this.length || this.isEmpty()) return null
    
        // si queremos regresar el primer nodo
        if (index === 0) return this.head
    
        // si queremos regresar el ultimo nodo
        if (index === this.length - 1) return this.tail
    
        // regresar un nodo que este en otra posicion de la lista
    
        /**
         * Necesitamos iterar a traves de la lista hasta encontrar el index del nodo solicitado
         */
        let currentNode = this.head // nos posicionamos sobre el inicio
    
        let iterator = 0
        while (iterator < index) {
          iterator++ // incrementamos el iterador para recorrer la lista
          currentNode = currentNode.next 
          console.log('CURRENT', currentNode) // aqui pueden ver como el current cambia de valor
        }
        
        return currentNode
      }
}

const myLisT = new LinkedList()
myLisT.push('Diego')
myLisT.push('Matylin')
myLisT.push('Jair')
myLisT.push('Pepe')
console.log(myLisT)

console.log(myLisT.pop())
console.log("--------------")
console.log(myLisT.get(2))
