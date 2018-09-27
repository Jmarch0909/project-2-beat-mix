// Drum Arrays
let kicks = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let snares = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let hiHats = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
let rideCymbals = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];


function toggleDrum(array,indexNumber) {
    if (changeIt(array,indexNumber) === 0) {
        array[indexNumber] = true } else 
            if (changeIt(array,indexNumber) === 1) {
                array[indexNumber] = false; } 
};


function clear(array) {
    for (var i=0;i<array.length;i++) {
        array[i] = false; }
}

function invert(array) {
    for (var i=0;i<array.length;i++) {
        if (array[i] === false) {
            array[i] = true } else
                if (array[i] === true) {
                    array[i] = false; }
                }
        }
    
function changeIt(array,index) {
    if (array[index] === false) {return 0; } else
        if (array[index] === true) {return 1; } 
};















































