class BinarySearchNode {
    constructor(key = null, value = null, parent = null) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    }
    insert(key, value) {
        // If the tree is empty then this key being inserted is the root node of the tree
        if(this.key == null) {
            this.key = key;
            this.value = value;
        }
        /* If the tree already exists, then start at the root, 
           and compare it to the key you want to insert.
           If the new key is less than the node's key 
           then the new node needs to live in the left-hand branch */
        else if (key < this.key) {
           /* If the existing node does not have a left child, 
               meaning that if the `left` pointer is empty, 
               then we can just instantiate and insert the new node 
               as the left child of that node, passing `this` as the parent */
               if (this.left == null) {
                   this.left = new BinarySearchNode(key, value, this);
               } 
               /* If the node has an existing left child, 
               then we recursively call the `insert` method 
               so the node is added further down the tree */  
               else {
                   this.left.insert(key, value);
               } 
        }
        // Similarly, if the new key is greater than the node's key 
        //then you do the same thing, but on the right-hand side */
        else {
            if(this.right == null) {
                this.right = new BinarySearchNode(key, value, this);
            }
            else {
                this.right.insert(key, value);
            }
        }
    }

    find(key) {
        if(this.key == key) {
            return this.value;
        }
        /* If the item you are looking for is less than the root 
           then follow the left child.
           If there is an existing left child, 
           then recursively check its left and/or right child
           until you find the item */
        else if (key < this.key && this.left) {
            return this.left.find(key);
        }
        else if (key > this.key && this.right) {
            return this.right.find(key)
        }
        // You have searched the tree and the item is not in the tree
        else {
            throw new Error('key error')
        }
    }

    remove(key) {
        if (this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            }
            else if (this.left) {
                this._replaceWith(this.left);
            }
            else if(this.right) {
                this._replaceWith(this.right)
            }
            else {
                this._replaceWith(null);
            }
        }
        else if (key < this.key && this.left) {
            this.left.remove(key);
        }
        else if (key > this.key && this.right) {
            this.right.remove(key);
        }
        else {
            throw new Error('Key Error');
        }
    }
    _replaceWith(node) {
        if (this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node;
            }
            else if(this == this.parent.right) {
                this.parent.right = node;
            }
            if (node) {
                node.parent = this.parent;
            }
        }
        else {
            if (node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            }
            else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }   
    }
    _findMin() {
        if(!this.left) {
            return this;
        }
        return this.left._findMin();
    }
}

//1. Draw a BST
//Given the data 3,1,4,6,9,2,5,7 - ok. 3 is the first and root
//Draw the BST with the keys - E A S Y Q U E S T I O N - ok

//2. Remove the root
//Show how the above trees would look like if you deleted the root of each tree. (Draw the trees, no coding needed here.)
//new root = 4
//new root = not sure about this, would be E (duplicate)

function main(){
    const firstTree = new BinarySearchNode();
    firstTree.insert(3, 3);
    firstTree.insert(1, 1);
    firstTree.insert(4, 4);
    firstTree.insert(6, 6);
    firstTree.insert(9, 9);
    firstTree.insert(2, 2);
    firstTree.insert(5, 5);
    firstTree.insert(7, 7);
};

// 4. What does this program do?
// Without running this code in your code editor, explain what the following program does.
function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}
//gives the total of all the values in a bst

//5. Height of a BST TO CHECK ---------------------------------------
//Write an algorithm to find the height of a binary search tree. 
function findHeigth(element) {
    if(!element) {
        return 0;
    }
    let countLeft = findHeigth(element.right);
    let countRight = findHeigth(element.left);

    return 1 + Math.max(countLeft,countRight );
}

//6. Write an algorithm to check whether an arbitrary binary tree is a binary search tree, assuming the tree does not contain duplicates.
//THIS BELOW IS NOT IMPLEMENTED AND WRONG, BECAUSE IT DOESN'T CONSIDER IF THE SUB NODES ARE MIN OR MAX OF THE ROOT
function chek() {
    if(!element) {
        return console.log('empty binay tree');
    }
    let currNode = element;
    while(currNode > currNode.left || currNode.left == null){
        currNode = currNode.left;
    }
    if (currNode > currNode.left) {
        currNode = currNode.left;
    }
    else if(currNode < currNode.right) {
        currNode = currNode.right;
    }
    return false;
}
//https://www.youtube.com/watch?v=MILxfAbIhrE
    function check(root, min, max) {
        if(root == null) {
            return true;
        }
        if(root.value <= min || root.value > max) {
            return false;
        }
        return check(root.left, min, root.value)
        && check(root.right, root.value, max)
    }

//7. 3rd largest node TO CHECK
function third(element) {
    if(!element){
        return console.log('tree is empty');
    }
    let currNode = element;
    let previousNode;
    let secondUp;
    while(element.right == null) {
        secondUp = previousNode;
        previousNode = currNode;
        currNode = currNode.left;
    }
    while(element.right !== null) {
        secondUp = previousNode;
        previousNode = currNode;
        currNode = element.right;
    }
    if(currNode.left !== null) {
        secondUp = previousNode;
        previousNode = currNode.left;
    } 
    return secondUp;
}

//8. Balanced BST
//balanced tree is when heigth of left side and heigth of right side have a difference of ABSOLUTE  1
//https://www.youtube.com/watch?v=LU4fGD-fgJQ


//9. Are they the same BSTs?
// You are given two arrays which represent two sequences of keys that are used to create two binary search trees. 
// Write a program that will tell whether the two BSTs will be identical or not without actually constructing the tree. 
// You may use another data structure such as an array or a linked list but don't construct the BST. What is the time complexity of your algorithm? 
// E.g., 3, 5, 4, 6, 1, 0, 2 and 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact same BSTs 
// and your program should return true.


//THIS DOEAN'T WORK, CHECK WHY!------------------------------
function checkSame(array1, array2) {
    // Compare arrays, if false don't bother go further
    if (array1.length !== array2.length) {
        return false
    }
    let array1s = array1.sort(function(a,b) {
        return a - b;
    })
    let array2s = array2.sort(function(a,b) {
        return a - b;
    })
    console.log(array1s, array2s);
    //check if arrays are equal
    let equal;
    for( let i=0; i<= array1s.length; i++) {
        if(array1s[i] !== array2s[i]) {
            return equal = false;
        } else {
            return equal = true;
        }
    }
    console.log(equal)

    //first node must be the same, or bst are different
    if((array1[0] === array2[0]) && (equal = true)) {
        return true
    }
    else {return false}
}
console.log(checkSame([3, 5, 4, 6, 7, 0, 2], [3, 1, 5, 2, 4, 6, 0]))

  



