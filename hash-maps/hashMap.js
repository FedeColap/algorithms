class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }

    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error');
        }
        return this._hashTable[index].value;
    }

    set(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //Find the slot where this key should be in
        const index = this._findSlot(key);

        if(!this._hashTable[index]){
            this.length++;
        }
        this._hashTable[index] = {
            key,
            value,
            DELETED: false
        }; 
    }

    delete(key) {
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error');
        }
        slot.DELETED = true;
        this.length--;
        this._deleted++;
    }

    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;

        for (let i=start; i<start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }

    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined && !slot.DELETED) {
                this.set(slot.key, slot.value);
            }
        }
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //Bitwise left shift with 5 0s - this would be similar to
            //hash*31, 31 being the decent prime number
            //but bit shifting is a faster way to do this
            //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned - meaning non-negtive number. 
        return hash >>> 0;
    }
}



function main() {
    const lotr = new HashMap();
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandolf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");
    
    console.log(lotr);
    console.log('Hobbit value: ', lotr.get('Hobbit'));
    console.log('Maiar value: ', lotr.get('Maiar'));
    return lotr;  
}
main();

//OUTPUT
//HashMap {length: 9, _hashTable: Array(24), _capacity: 24, _deleted: 0}
// length: 9
// _hashTable: Array(24)
// 2: {key: "HalfElven", value: "Arwen", DELETED: false}
// 4: {key: "LadyOfLight", value: "Galadriel", DELETED: false}
// 6: {key: "Wizard", value: "Gandolf", DELETED: false}
// 7: {key: "RingBearer", value: "Gollum", DELETED: false}
// 12: {key: "Elf", value: "Legolas", DELETED: false}
// 13: {key: "Hobbit", value: "Frodo", DELETED: false}
// 20: {key: "Ent", value: "Treebeard", DELETED: false}
// 22: {key: "Human", value: "Aragorn", DELETED: false}
// 23: {key: "Maiar", value: "Sauron", DELETED: false}

//The Necromancer and Bilbo do not appear in HashMap. Although I was expecting an open address for duplicate keys, so... wwird.
//Retrieve the value that is hashed in the key "Maiar" and Hobbit. ---- are Frodo and Sauron (no mention to duplicates)
//capacity of has table after resizing is 24, given the initial capacity of 8 * the size_ratio 3.

//2. WhatDoesThisDo
// DO NOT run the following code before solving the problem.
// What is the output of the following code? explain your answer.
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}
WhatDoesThisDo();
//it creates 2 hash maps, initialize keys, and set them in slots with value. WRONG!
//it initialize 2 "objects", but since they have the same key, the second overwrites the first, in both hash tables. 
//So even if you call for the first object, it will retrieve the second insertion.


//1) Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 into a hash map of length 11 
//using open addressing and a hash function k mod m, where k is the key and m is the length.

// 10 --> 10; 22 --> 0; 31 --> 9; 4 --> 4; 15 --> is 4, moved to 5; 28 --> 6; 17 --> is 6, moved to 7; 88 --> is 0, moved to 1; 59 --> is 4, moved to 8;

//2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 into the hash map with collisions resolved by separate chaining. 
//Let the hash table have a length m = 9, and let the hash function be k mod m.

//5 --> 5; 28 --> 1; 19 --> 1 chained ; 15 --> 6; 20 --> 2; 33 --> 6 chained;  12 --> 3; 17 --> 8; 10 --> 1 chained.

//4. Remove duplicates
//Implement a function to delete all duplicated characters in a string and keep only the first occurrence of each character. 
//For example, if the input is string “google”, the result after deletion is “gole”. 

function removeDup(string) {
    let mappa = new HashMap();
    //cleans the string
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, ""); 
    stringArray = string.split('');

    for (let i = 0; i< stringArray.length; i++) {
        mappa.set(stringArray[i], stringArray[i]) 
    }
    return mappa;

}
let parola = "google"
removeDup(parola); //WRONG it returns lego and not gole (cuse index operation is not in order)
