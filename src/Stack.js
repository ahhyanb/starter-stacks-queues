class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }


    // Create a new node,
    // add data to the new node, and
    // have the pointer point to the top
    push(value) {
        this.top = new Node(value, this.top);
        return this;
    }

    /* In order to remove the top of the stack, you have to point
    the pointer to the next item. That next item becomes the
    top of the stack */
    pop(value) {
        const popped = this.top;
        this.top = popped.next;
        return popped.value;
    }
}