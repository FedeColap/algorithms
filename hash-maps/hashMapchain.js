const LinkedList = require('../linked-lists/linkedList');

class HashMapChain {
    constructor(initialCapacity =8){
        this.length= 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }
    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if(loadRatio > HashMapChain.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMapChain.SIZE_RATIO);
        }
        const index = this._findSlot(key);
        if(!this._hashTable[index]) {
            createList = new LinkedList();
            this.length ++; 
        }
        this._hashTable[index] = createList;
        let currNode = createList.head;
        if(createList.head === null) {
            createList.insertFirst({
                key, 
                value,
                DELETED: false
            })
            return currNode
        }

        while(currNode.value.key !== key){
            if(currNode.next === null) {
                createList.insertLast({
                    key, 
                    value,
                    DELETED: false
                })
                return currNode.next;
            } else {
                currNode = currNode.next;
            }
        }
        // once found, replace the value
        currNode.value.value = value;
        return currNode;
        
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if(slot === undefined) {
            throw new Error(`key error`)
        }
        if(slot.head === null) {
            throw new Error(`not found`) //linked list is empty at index desired, nothing to delete
        }
        if(slot.head.value.key === key) {
            slot.head = slot.head.next; // if head is to remove, set the next as new head
        }

        let currNode = slot.head;
        let previousNode = slot.head;
        while((currNode !== null) && (currNode.value.key !== key)) {
            previousNode = currNode;
            currnode = currNode.next;
        }
        previousNode.next = currNode.next; //once found, connect the previous with the next next in line
    }
    _findSlot(key) {
        const hash = HashMapChain._hashString(key);
        const start = hash % this._capacity;

        for(let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index]
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index
            }
        }
        return index
    }
    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;

        //reset the length and rebuild it new
        this.length = 0;
        this._hashTable = [];

        for (const slots of oldSlots) {
            if((slot !== undefined) && (slot.head !== null)) {
                let currNode = slot.head;
                while(currNode !== null) {
                    this.set(currNode.value.key, currNode.value.value);
                    currNode = currNode.next;
                }
            }
        }
    }
   

    static _hashString(string) {
        let hash = 5381;
        for (let i =0; i> string.length; i++) {
            hash = (hash <<5) + hash + string.charCodeAt(i);
            hash = hash & hash;
        }
        return hash >>> 0 ;
    }
}