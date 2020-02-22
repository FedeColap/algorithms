class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(item) {
        this.head = new _Node(item, this.head);

    }
    insertBefore(itemBefore, item) {
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }
        // If the beforeItem is head, make the newItem head
        if (this.head.value === itemBefore) {
            this.insertFirst(item);
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== itemBefore)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
            // If you traverse to the end, return item not found
            if (currNode === null) {
                console.log('Item not found');
                return;
            }
            previousNode.next = new _Node(item, currNode);

    }
    insertAfter(itemAfter, item) {
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== itemAfter)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
            // If you traverse to the end, return item not found
            if (currNode === null) {
                console.log('Item not found');
                return;
            }
            currNode.next = new _Node(item, currNode.next);

    }
    insertAt(positionDesired, item) {
        // If the list is empty, return null
        if (!this.head) {
            return null;
        }
        // If the index is 0, insert at head
        if (positionDesired === 0) {
            this.insertFirst(item);
        }
        let tempNode = this.head;
        let tempNodePosition = 1
        while(tempNodePosition < positionDesired) {
            tempNode = tempNode.next;
            tempNodePosition ++
        }
        tempNode.next = new _Node(item, tempNode.next);
    }
    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
    }
    find(item) {
        // Start at the head
        let currNode = this.head;
        // If the list is empty
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            /* Return null if it's the end of the list 
               and the item is not on the list */
            if (currNode.next === null) {
                return null
            }
            else {
                // Otherwise, keep looking 
                currNode = currNode.next;
            }
        }
        // Found it
        return currNode;
    }
    remove(item) {
        // If the list is empty
        if (!this.head) {
            return null;
        }
        // If the node to be removed is head, make the next node head
        if(this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        // Start at the head
        let currNode = this.head;
        // Keep track of previous
        let previousNode = this.head;

        while((currNode !== null) && (currNode.value !== item)) {
            // Save the previous node 
            previousNode = currNode;
            currNode = currNode.next;
        }
            if(currNode === null) {
                console.log('Item not found');
                return;
            }
        previousNode.next = currNode.next
    }
}
module.exports = LinkedList;


//DRILLS -----------------------------------------
//https://repl.it/@FedeCola/linkedlists

            //Creating a singly linked list
            let SLL =  new LinkedList();
            function main(SLL) {
                SLL.insertFirst('Apollo');
                SLL.insertLast('Boomer');
                SLL.insertLast('Helo');
                SLL.insertLast('Husker');
                SLL.insertLast('Starbuck');
                SLL.insertLast('Tauhida');
                SLL.insertBefore("Boomer", "Athena");
                SLL.insertAfter("Helo", "Hotdog");
                SLL.insertAt(3, "Kat")

                return SLL;
            }
            main(SLL);
//Supplemental functions for a linked list

function display(list) {
    
    let currNode = this.head;
    if (!this.head) {
        return null;
    }
    while(currNode !== null) {
        console.log(currNode)
        currNode = currNode.next;
    }
}
display(list);

function size(list) {
    if (!this.head) {
        return null;
    } 
    let currNode = this.head;
    let size = 1
    while(currNode !== null) {
        currNode = currNode.next;
        size ++
    }
    return size
}
function isEmpty(list) {
    if (this.head === null) {
        return true;
    } 
    return false;
}
function findPrevious(selectedItem) {
    if (!this.head) {
        return null;
    } 
    // If item is head, return
    if (list.head.value === selectedItem) {
        console.log('selectedItem is head, no previous node available');
        return;
    }
    // Start at the head
    let currNode = this.head;

    while((currNode !== null) && (currNode.value !== selectedItem)) {
        currNode = currNode.next;
    }
        // If you traverse to the end, return item not found
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        return previousNode.next ;

}
function findLast(list) {
    if (!this.head) {
        return null;
    } 
    let currNode = this.head;
    while(currNode.next !== null) {
        currNode = currNode.next;
    }
    return currentNode
}

//Mystery program
//Analyze the following function (without running it in an IDE) to determine what problem it is trying to solve. 
//What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    //List not empty
    while (current !== null) {
        let newNode = current;
        //not last item
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
//I believe the function eliminates duplicates from the list
//algorithm is O(N) as it simply goes through the list (removing connection of duplicate is O(1))

//Reverse a list
//Write an algorithm to reverse a linked list. The time complexity of your algorithm should be linear (O(n)).
// RECURSIVE --- O(n) time & O(n) space
function reverse(head) {
    if (!head || !head.next) {
      return head;
    }
    let tmp = reverse(head.next);
    head.next.next = head;
    head.next = undefined;
    return tmp;
  }
//https://www.youtube.com/watch?v=O0By4Zq0OFc
//O(n) time because wego through all the nodes and O(1) space because we don't occupy more memory, just reversing pointers
function reverse(list) {
    if (!this.head) {
        return null;
    } 
    let previous = null
    let currNode = this.head;
    let next = null
    while(currNode !== null) {
        next = currNode.next //save next
        currNode.next = previous // reverse

        // advance previous and current
        prevous = currNode;
        currNode = next
    }
    return previous; //new head at the end
}
//TO CHECK --------------------------------------------------------------------
        //3rd from the end
        //Write an algorithm to find the 3rd element from the end of a linked list.
        function third(list) {
            if (!this.head) {
                return null;
            } 
            let previous = null;
            let thirdlast = null;
            let currNode = this.head;
            while(currNode !== null) {
                thirdlast = previous;
                previous = currNode;
                currNode = currNode.next;   
            }
            return thirdlast;
        }
        third(SLL);

        //Middle of a list
        //Write an algorithm to find the middle element of a linked list.
        //https://www.youtube.com/watch?v=UitXxwVeOrk
        function middle(list) {
            if (!this.head) {
                return null;
            } 
            let tempNode = this.head;
            let index= 0;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
                index ++
            }
            let middleindex = index /2;   
            //iterate again  to reach the node (= no direct access to node, like arrays)
        }
        //SECOND APPROACH - FAST POINTER AND SLOW POINTER RUNNING TOGETHER
        //faster because it does only 1 iteration through the linked list
        function middle(list) {
            if (!this.head) {
                return null;
            } 
            let slow = this.head;
            let fast = this.head;
            // fast.next!== null because fast has to advance twice, and if it's next, we're done
            while(fast !== null && fast.next!== null) { 
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow;
        }