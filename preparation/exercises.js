// Prompt: Find the first item that occurs an even number of times in an array. const store = [ 1, 2, 5, 3, 4, 8, 6, 9, 0, 1, 4, 4 ];
//https://repl.it/@FedeCola/even-occurrence


//MergeSort on Linked List
//https://repl.it/@FedeCola/mergeSort-linkedlists --- does not work
//https://repl.it/@FedeCola/mergeSortllist2 --- does work

  
function Node (val) {
    this.value = val
    this.next = null
  }
  
  Node.prototype.add = function (val) {
    let node = this
    while (node.next) {
      node = node.next
    }
    node.next = new Node(val)
  }
  
  function compareTwoStrings (a, b) {
    let currA = a
    let currB = b
    //iterate as long as letters are same and lists are not consumed
    while(currA && currB && currA.value === currB.value) {
      currA = currA.next
      currB = currB.next
    }
    if(!currA && !currB) return 0
    //b is longer or if a still has a value, compare
    else if(!currA && currB || currA.value < currA && currB.value) return -1
    //a is longer or if b still has a value, compare
    else if(!currB && currA || currA.value > currB && currB.value) return 1
  }
  
  let listA = new Node('c')
  listA.add('a')
  listA.add('t')
  listA.add('s')
  
  let listB = new Node('c')
  listB.add('a')
  listB.add('t')
  
  compareTwoStrings(listA, listB)