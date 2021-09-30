// STACK - PILAS

class Stack {
    constructor() {
        this.count = 0
        this.storage = {}
    }

    push(item) {
        this.count++
        this.storage[this.count] = item

        return this.count
    }

    pop() {
        const deletedItem = this.storage[this.count]
        delete this.storage[this.count]
        this.count--
        return deletedItem
    }

    peek() {
        const peekItem = this.storage[this.count]
        return peekItem
    }

    size() {
        const size = this.count
        return size
    }
}

const pila = new Stack()
console.log(pila.push('Rocio'))
pila.push('Gustavo')
pila.push('David')
pila.push('Han')

console.log(pila.size())
console.log(pila.peek())

console.log(pila.pop())
console.log(pila.storage)