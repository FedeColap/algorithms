//print all elements of an array - YAY!!
array = [1, 5, 'ello', '22'];
function magic(array) {
    if (array.length === 0) return (console.log('empty!'))
    
    magic(array.slice(1))
    console.log(array)
}
magic (array);

//triangular number  ---yay!!
function magic(layer){
    if(layer <= 1) return layer
    return layer + magic(layer -1)
}
magic(7);
//potenza --- YAY!! --------
function magic(n,e) {
    if (e === 0) return 1
    return n * magic(n, (e-1))
}
magic(7, 5)

//------------------------------
function magic (level) {
    if (level <= 1) return 1
    return level + magic(level - 1)
}
magic(8)
