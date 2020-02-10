import Stack from './stacks.js'

class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null    
    }
    enqueue(data) {
        const node = new _Node(data);
        if(this.first === null) {
            this.first = node;
        }
        if(this.last) {
            this.last.next = node
        }
        this.last = node;
    }
    dequeue() {
        //if the queue is empty, there is nothing to return
        if(this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        if(node === this.last) {
            this.last = null;
        }
        return node.value;
    }
}

function main() {
    let starTreq = new Queue();

    starTreq.enqueue("Kirk");
    starTreq.enqueue("Spock");
    starTreq.enqueue("Uhura");
    starTreq.enqueue("Sulu");
    starTreq.enqueue("Checkov");
    starTreq.enqueue("Kirk");
    starTreq.enqueue("Spock");
    starTreq.enqueue("Uhura");
    starTreq.enqueue("Sulu");
    starTreq.enqueue("Checkov");
    return starTreq;
}

main();
function peek(queue) {
    if(this.first === null) {
        return console.log('queue is empty, no peeking');
    }
    return queue.first.value
}
peek(starTreq);

function isEmpty(queue){
    if(this.first === null) {
        return true
    } 
    return false;
}

function display(queue) {
    if(this.first === null) {
        return console.log('queue is empty, nothing to display');
    }
    currNode = this.first;
    console.log(currNode)
    while(this.first !== null){
        console.log(currNode);
        currNode = currNode.next;
    }
    return;
}

function main() {
    let starTreq = new Queue();

    starTreq.enqueue("Kirk");
    starTreq.enqueue("Spock");
    starTreq.enqueue("Uhura");
    starTreq.enqueue("Sulu");
    starTreq.enqueue("Checkov");

    //removing Spock --- WRONG, THIS IS A QUEUE NOT A STACK
    starTreq.dequeue();
    starTreq.dequeue();
    starTreq.dequeue();
    starTreq.dequeue();

    //removing Spock
    starTreq.dequeue(); // kirk
    starTreq.dequeue(); //spock
    starTreq.enqueue("Kirk");
    return starTreq;
}

//8. Queue implementation using a stack
//There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. 
//Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure.
function simulateQueue() {
    const firstStack= new Stack();
    // To enqueue: push onto the stack
    firstStack.push('Kirk');
    firstStack.push('Spock');
    firstStack.push('Uhura');
    firstStack.push('Sulu');
    firstStack.push('Checkov'); //order: Checkov Sulu Uhura Spock Kirk
    const secondStack = new Stack();

    let currNode = firstStack.top;

    while(firstStack.top !== null){
       secondStack.push(currNode);
       firstStack.pop();
       currNode = currNode.next; //not sure about this
    }
    return secondStack;

}
simulateQueue();

//9. Square dance pairing --- to check!
function pair() {
    const maleq = new Queue();
    const femaleq = new Queue();
    const dancer;
    if (dancer.includes("M")) {
        maleq.enqueue(dancer)
    } else {
        femaleq.enqueue(dancer)
    }
    if(maleq.first !== null && femaleq.first !== null) {
        maleq.dequeue();
        femaleq.dequeue();
        console.log(`paired ${maleq.dequeue()}  with ${femaleq.dequeue()}`)
    }

}

//Ophidian Bank --- TBD